import DeliveryBoy from "../models/DeliveryBoyModel.js";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/emailSend.js";

const generateAccesssAndRefreshToken = async (_id) => {
  const deliveryBoyFind = await DeliveryBoy.findById(_id);
  const accessToken = await deliveryBoyFind.generateAccessToken();
  const refreshToken = await deliveryBoyFind.generateRefreshToken();
  deliveryBoyFind.refreshToken = refreshToken;
  deliveryBoyFind.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
};

const CreateDeliveryBoy = async (req, res) => {
  const exists = await DeliveryBoy.findOne({
    email: req?.body?.email,
  });
  if (exists) {
    return res.send({
      email: "exists",
    });
  }

  const create = await DeliveryBoy.create({
    name: req?.body?.name,
    email: req?.body?.email,
    password: req?.body?.password,
    number: req?.body?.number,
  });
  res.send({
    userinformation: create,
  });
};

const LoginDeliveryBoy = async (req, res) => {
  const loginDeliveryBoy = await DeliveryBoy.findOne({
    email: req?.body?.email,
  });
  if (!loginDeliveryBoy) {
    return res.send({
      login: false,
    });
  }
  const password = await loginDeliveryBoy.isPasswordCorrect(
    req?.body?.password
  );
  if (!password) {
    return res.send({
      login: false,
    });
  }
  const { accessToken, refreshToken } = await generateAccesssAndRefreshToken(
    loginDeliveryBoy._id
  );
  const deliveryBoyInfo = await DeliveryBoy.findById(
    loginDeliveryBoy._id
  ).select("-password -refreshToken");
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
      login: true,
      deliveryBoyInfo,
      accessToken,
      refreshToken,
    });
};

const allDeliveryBoy = async (req, res) => {
  const approved = await DeliveryBoy.find({
    isApproved: "approved",
  });
  const pending = await DeliveryBoy.find({
    isApproved: "pending",
  });
  res.send({
    success: true,
    approved,
    pending,
  });
};

const DeleteDeliveryBoy = async (req, res) => {
  const deleteDeliveryBoy = await DeliveryBoy.deleteOne({
    _id: req?.body?.DeliveryBoy_id,
  });
  return res.send({
    success: true,
    deliveryBoy: "deliveryBoy deleted",
  });
};

const UpdateDeliveryBoy = async (req, res) => {
  const deleteUser = await DeliveryBoy.findByIdAndUpdate(
    req?.body?.DeliveryBoy_id,
    {
      isApproved: req?.body?.status,
    }
  );
  res.send({
    success: true,
    user: "User Updated",
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

  const deliveryBoyFind = await DeliveryBoy.findById(veriftoken._id).select(
    "-password"
  );
  if (!deliveryBoyFind) {
    return res.send({
      login: false,
      Token: "UnAuthorized",
    });
  }
  if (!refreshToken == deliveryBoyFind.refreshToken) {
    return res.send({
      login: false,
      Token: "UnAuthorized",
    });
  }
  const deliveryBoyInfo = await DeliveryBoy.findById(veriftoken._id).select(
    "-password -refreshToken"
  );
  const accessToken = await deliveryBoyInfo.generateAccessToken();

  return res.send({
    login: true,
    deliveryBoyInfo,
    accessToken,
  });
};

const otpGenerate = async (req, res) => {
  function generateOTP() {
    let digits = "0123456789";
    let OTP = "";
    let len = digits.length;
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * len)];
    }

    return Number(OTP);
  }
  // console.log(typeof(generateOTP()))
  const updateUser = await DeliveryBoy.findByIdAndUpdate(
    req?.body?.userId,
    {
      varifiedCode: generateOTP(),
    },
    { new: true }
  );
  await sendEmail(
    "OTP VERIFICATION",
    updateUser.email,
    `Your OTP verification code is ${updateUser.varifiedCode} `
  );
  return res.send({
    success: true,
  });
}; 

const verifyOtp = async (req, res) => {
  const deliveryboy = await DeliveryBoy.findById(req?.body.DeliveryBoyId);
  const otp = req?.body?.otp;
  if (otp == deliveryboy?.varifiedCode) {
    const updateDeliveryBoy = await DeliveryBoy.findByIdAndUpdate(
      req?.body?.DeliveryBoyId,
      {
        isVerified: true,
      }
    );
    const deliveryBoyInfo = await DeliveryBoy.findById(
      req?.body?.DeliveryBoyId
    ).select("-password -refreshToken");
    return res.send({
      login: true,
      deliveryBoyInfo,
      success: true,
    });
  }
  return res.send({
    success: false,
  });
};

export {
  CreateDeliveryBoy,
  allDeliveryBoy,
  LoginDeliveryBoy,
  DeleteDeliveryBoy,
  UpdateDeliveryBoy,
  RefreshTokenEndPoint,
  otpGenerate,
  verifyOtp
};
