import Restaurant from "../models/RestaurantModel.js";
import jwt from "jsonwebtoken";
import fs from "fs";
import uploadCloudinary from "../utils/cloudinary.js";
import mongoose from "mongoose";
import Product from "../models/ProductModel.js";
const generateAccesssAndRefreshToken = async (_id) => {
  const RestaurantFind = await Restaurant.findById(_id);
  const accessToken = await RestaurantFind.generateAccessToken();
  const refreshToken = await RestaurantFind.generateRefreshToken();
  RestaurantFind.refreshToken = refreshToken;
  RestaurantFind.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
};

const CreateRestaurant = async (req, res) => {
  // console.log(req.files.restaurant)
  const exists = await Restaurant.findOne({
    email: req?.body?.email,
  });
  if (exists) {
    return res.send({
      email: "exists",
    });
  }
  const fileimg = req?.files?.restaurant;
  let url;
  let img = [];
  if (fileimg) {
    for (let i = 0; i < fileimg.length; i++) {
      url = await uploadCloudinary(`./temp/img/${fileimg[i].filename}`);
      img.push(url);
    }
  }
  const create = await Restaurant.create({
    name: req?.body?.name,
    ownerName: req?.body?.ownerName,
    email: req?.body?.email,
    password: req?.body?.password,
    number: req?.body?.number,
    RestaurantType: req?.body?.RestaurantType,
    timing: {
      openAt: req?.body?.openAt,
      closeAt: req?.body?.closeAt,
    },
    address: {
      street: req?.body?.street,
      area: req?.body?.area,
      fulladdress: req?.body?.fullAddress,
    },
    bankDetail: {
      acNo: req?.body?.acNo,
      ifscCode: req?.body?.ifscCode,
      acType: req?.body?.acType,
    },
    pancardDetail: {
      panName: req?.body?.panName,
      panNo: req?.body?.panNo,
    },
    img: img,
  });
  res.send({
    success: true,
    Restaurantinformation: create,
  });
};

const LoginRestaurant = async (req, res) => {
  const loginRestaurant = await Restaurant.findOne({
    email: req?.body?.email,
  });
  if (!loginRestaurant) {
    return res.send({
      login: false,
    });
  }
  const password = await loginRestaurant.isPasswordCorrect(req?.body?.password);
  if (!password) {
    return res.send({
      login: false,
    });
  }
  const { accessToken, refreshToken } = await generateAccesssAndRefreshToken(
    loginRestaurant._id
  );
  const RestaurantInfo = await Restaurant.findById(loginRestaurant._id).select(
    "-password -refreshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
      login: true,
      RestaurantInfo,
      accessToken,
      refreshToken,
    });
};

const topRestaurant = async (req, res) => {
  const featchAll = await Restaurant.find({isApproved:"Approved"}).sort({ rating: -1 }).limit(8);
  return res.send({
    Restaurant: featchAll,
  });
};

const FetchAll = async (req, res) => {
  const featchAll = await Restaurant.find();
  return res.send({
    Restaurant: featchAll,
  });
};
const UpdateRestaurant = async (req, res) => {
  const fileimg = req?.files?.restaurant;
  let img = [];
  let url;
  if (!fileimg) {
    const find = await Restaurant.findById(req?.body?.Restaurant_id);
    img = find?.img;
  } else {
    for (let i = 0; i < fileimg.length; i++) {
      url = await uploadCloudinary(`./temp/img/${fileimg[i].filename}`);
      img.push(url);
    }
  }
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req?.body?.Restaurant_id,
      {
        img,
        name: req?.body?.name,
        ownerName: req?.body?.ownerName,
        email: req?.body?.email,
        password: req?.body?.password,
        number: req?.body?.number,
        RestaurantType: req?.body?.RestaurantType,
        timing: {
          openAt: req?.body?.openAt,
          closeAt: req?.body?.closeAt,
        },
        address: {
          street: req?.body?.street,
          area: req?.body?.area,
          fulladdress: req?.body?.fullAddress,
        },
        bankDetail: {
          acNo: req?.body?.acNo,
          ifscCode: req?.body?.ifscCode,
          acType: req?.body?.acType,
        },
        pancardDetail: {
          panName: req?.body?.panName,
          panNo: req?.body?.panNo,
        },
        isApproved: req?.body?.isApproved,
      },
      { new: true }
    );
    res.send({
      RestaurantInfo: updatedRestaurant,
    });
  } catch (err) {
    console.log(err);
    return res.send({
      RestaurantInfo: updatedRestaurant,
    });
  }
};

const FeatchRestaurant = async (req, res) => {
  const featchAll = await Restaurant.find({
    isApproved: "Approved",
  });
  return res.send({
    "AllRestaurant": featchAll,
  });
};

const DeleteRestaurant = async (req, res) => {
  const delteRest = await Restaurant.deleteOne({
    _id: req?.body?.Restaurant_id,
  });
  return res.send({
    success: true
  });
};

const RefreshTokenEndPoint = async (req, res) => {
  const refreshToken =
    req?.cookies?.refreshToken ||
    req?.body?.refreshToken ||
    req?.header("Authorization")?.replace("Bearer ", "");
  if (!refreshToken) {
    return res.send({
      login: false,
      Token: "UnAuthorized",
    });
  }
  const veriftoken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

  const RestaurantFind = await Restaurant.findById(veriftoken._id).select(
    "-password"
  );
  if (!RestaurantFind) {
    return res.send({
      login: false,
      Token: "UnAuthorized",
    });
  }
  if (!refreshToken == RestaurantFind.refreshToken) {
    return res.send({
      login: false,
      Token: "UnAuthorized",
    });
  }
  const RestaurantInfo = await Restaurant.findById(veriftoken._id).select(
    "-password -refreshToken"
  );
  const accessToken = await RestaurantInfo.generateAccessToken();

  return res.send({
    login: true,
    RestaurantInfo,
    accessToken,
  });
};

const allDetailAboutRestaurants = async (req, res) => {
  const restaurantDetails = await Restaurant.findById(req.body.restaurant_id);
  const allproductWithCategories = await Product.aggregate([
    {
      $match: {
        restaurant: new mongoose.Types.ObjectId(req.body.restaurant_id),
        // isApproved: "Approved"
      },
    },
    {
      $group: {
        _id: "$category",
        data: { $push: "$$ROOT" },
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "_id",
        foreignField: "_id",
        as: "categoryDetails",
      },
    },
    {
      $addFields: {
        categoryDetails: {
          $first: "$categoryDetails",
        },
      },
    },
  ]);

  res.send({
    success: true,
    restaurantDetails,
    allproductWithCategories,
  });
};

const approvedRestaurant = async(req, res) => {
const approve = await Restaurant.findByIdAndUpdate(req.body.Restaurant_id,{
  isApproved : "Approved"
})
res.send({
  success: true,
})
}

export {
  CreateRestaurant,
  topRestaurant,
  allDetailAboutRestaurants,
  LoginRestaurant,
  FetchAll,
  UpdateRestaurant,
  FeatchRestaurant,
  DeleteRestaurant,
  RefreshTokenEndPoint,
  approvedRestaurant
};
