import Order from "../models/OrderModel.js";
import Restaurant from '../models/RestaurantModel.js'
import Message from '../utils/MessageUtils.js'
import razerpay from 'razorpay'
import {instance} from '../utils/razerpayUtils.js'
import crypto from 'crypto'
// import {sha256} from 'crypto-js';
const CreateOrder = async(req,res)=>{

    const create = await Order.create({
        products  :req?.body?.products_id,
        customer  : req?.body?.customer,
        Restaurant : req?.body?.Restaurant_id,
        paymentWay : req?.body?.paymentWay,
        payment : req?.body?.payment,
        total : req?.body?.total,
        address:req?.body?.address,
    })
    const findRestaurant = await Restaurant.findById(Restaurant_id)
    Message("You Have New Order , Please Check Ypur Order List" , findRestaurant.number)
    res.send({
        Orderinformation : create
    })
}


const allOrder = async(req,res)=>{

    const finde = await Order.find().sort( { "createdAt": 1 } )

    res.send({
        Orderinformation : create
    })
}

const orderInfo = async(req,res)=>{
    const find = await Order.findById(req.params.id)
    return req.send({
        orderInfo : find
    })
}
const updateOrderStatus = async(req,res)=>{
    const find = await Order.findByIdAndUpdate(req?.body?.Order_id , {
        status: req?.body?.status
    })
    return req.send({
        orderInfo : find
    })
}


const paymentWay = async(req,res)=>{
    var options = {
        amount: (Number(req.body.money )* 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      const order = await instance.orders.create(options)
      res.send({order})
}

const paymentVerify = async(req,res)=>{
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
    const body = await razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = await  crypto
    .createHmac("sha256", "5nUk3fO1Om6ZN9k5Kgqu5R81")
    .update(body.toString())
    .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic){
        // res.redirect(
        //     `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        //   );
        return res.send({
            "success" : true
        })
    }
    return res.send({
        "success" : false
    })
}
export  { CreateOrder , allOrder ,paymentWay ,paymentVerify}