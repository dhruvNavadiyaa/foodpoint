import Order from "../models/OrderModel.js";
import Restaurant from "../models/RestaurantModel.js";
import { instance } from "../utils/razerpayUtils.js";
import crypto from "crypto";
import mongoose from "mongoose";

const CreateOrder = async (req, res) => {
  console.log(req?.body?.Restaurant_id)
  const create = await Order.create({
    products: {
      product: req?.body?.product,
      quantity: req?.body?.qty,
    },
    user: req?.body?.user,
    restaurant: req?.body?.Restaurant_id,
    address: req?.body?.address,
    payment: {
      razorpay_payment_id: req?.body?.razorpay_payment_id,
      razorpay_order_id: req?.body?.razorpay_order_id,
      razorpay_signature: req?.body?.razorpay_signature,
    },
    total: req?.body?.total,
  });

  // const findRestaurant = await Restaurant.findById(req?.body?.Restaurant_id)
  // await Message("You Have New Order , Please Check Ypur Order List" , "8140974832")
  res.send({
    success: true,
    Orderinformation: create,
  });
};
const allOrder = async (req, res) => {
  const find = await Order.find().sort({"createdAt": -1})
  res.send({
    success: true,
    Orderinformation: find,
  });
}
const OrderWithId = async (req, res) => {
  
  const find = await Order.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req?.body?.order_id)
      }
    },
    {
      $lookup: {
        from: "products",
        localField: "products.product",
        foreignField: "_id",
        as: "productDetail",
      },
    },
    {
      $lookup: {
        from: "restaurants",
        localField: "productDetail.restaurant",
        foreignField: "_id",
        as: "restaurantDetail",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userDetail",
      },
    },
    {
      $addFields: {
        productDetail: {
          $first: "$productDetail",
        }, 
        restaurantDetail: {
          $first: "$restaurantDetail",
        }, 
        userDetail: {
          $first: "$userDetail",
        },
      },
    }
  ]);

  if(find.length > 0){
    res.send({
      success: true,
      Orderinformation: find[0],
    });
  }
};

const orderInfo = async (req, res) => {
  const find = await Order.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(req.body.user_id),
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "products.product",
        foreignField: "_id",
        as: "productDetail",
      },
    },
    {
      $lookup: {
        from: "restaurants",
        localField: "productDetail.restaurant",
        foreignField: "_id",
        as: "restaurantDetail",
      },
    },
    {
      $addFields: {
        productDetail: {
          $first: "$productDetail",
        }, 
        restaurantDetail: {
          $first: "$restaurantDetail",
        },
      },
    },
    {
        $group: {
          _id: {
            $cond: {
              if: { $in: ["$status", ["cancel", "done"]] }, // Check if status is "cancel" or "done"
              then: "group1", // If yes, group as "group1"
              else: "group2", // Otherwise, group as "group2"
            },
          },
          orders: { $push: "$$ROOT" }, // Push the entire document into respective groups
        },
      },
  ]);
  return res.send({
    orderInfo: find,
  });
};
const updateOrderStatus = async (req, res) => {
  const find = await Order.findByIdAndUpdate(req?.body?.Order_id, {
    status: req?.body?.status,
  });
  return req.send({
    success: true,
    orderInfo: find,
  });
};

const paymentWay = async (req, res) => {
  var options = {
    amount: Number(req.body.money) * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  const order = await instance.orders.create(options);
  res.send({ order });
};

const paymentVerify = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = (await razorpay_order_id) + "|" + razorpay_payment_id;
  const expectedSignature = await crypto
    .createHmac("sha256", "5nUk3fO1Om6ZN9k5Kgqu5R81")
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    return res.send({
      success: true,
    });
  }
  return res.send({
    success: false,
  });
};



const orderInfoWithRestaurant = async (req, res) => {
  const find = await Order.aggregate([
    {
      $match: {
        restaurant: new mongoose.Types.ObjectId(req.body.Restaurant_id),
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "products.product",
        foreignField: "_id",
        as: "productDetail",
      },
    },
    {
      $lookup: {
        from: "restaurants",
        localField: "restaurant",
        foreignField: "_id",
        as: "restaurantDetail",
      },
    },
    {
      $addFields: {
        productDetail: {
          $first: "$productDetail",
        }, 
        restaurantDetail: {
          $first: "$restaurantDetail",
        },
      },
    },
    {
        $group: {
          _id: {
            $cond: {
              if: { $in: ["$status", ["cancel", "done"]] }, 
              then: "group1", 
              else: "group2", 
            },
          },
          orders: { $push: "$$ROOT" }, 
        },
      },
  ]);
  return res.send({
    orderInfo: find,
  });
};



const updateDeliveryBoy = async(req, res) => {
  const find = await Order.findByIdAndUpdate(req?.body?.Order_id, {
    deliveryBoy: req?.body?.DeliveryBoy_id,
    status: req?.body?.status,
  });
  res.send({ 
    success : true,
  })
}


const orderPendingForDelivery = async(req, res) => {
  const find = await Order.find( {
    status: "processing",
  });
  res.send({ 
    success : true,
    orderInfo : find,
  })
}


const orderHistoryForDelivery = async(req, res) => {
  const find = await Order.find( {
    deliveryBoy:req.body.DeliveryBoy_id,
    status: "done",
  });
  res.send({ 
    success : true,
    orderInfo : find,
  })
}

export {orderHistoryForDelivery,orderPendingForDelivery,orderInfoWithRestaurant,updateDeliveryBoy, updateOrderStatus,CreateOrder,OrderWithId, orderInfo, allOrder, paymentWay, paymentVerify };
