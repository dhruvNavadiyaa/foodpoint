import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/emailSend.js";
const generateAccesssAndRefreshToken = async (_id) => {
  const userFind = await User.findById(_id);
  const accessToken = await userFind.generateAccessToken();
  const refreshToken = await userFind.generateRefreshToken();
  userFind.refreshToken = refreshToken;
  userFind.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
};

const CreateUser = async (req, res) => {
  const exists = await User.findOne({
    email: req?.body?.email,
  });
  if (exists) {
    return res.send({
      login: false,
      success: false,
      email: "change email",
    });
  }

  const create = await User.create({
    name: req?.body?.name,
    email: req?.body?.email,
    password: req?.body?.password,
    number: req?.body?.number,
  });
  res.send({
    success: true,
    userinformation: create,
  });
};
const LoginUser = async (req, res) => {
  const loginUser = await User.findOne({
    email: req?.body?.email,
  });
  if (!loginUser) {
    return res.send({
      success: false,
      login: false,
    });
  }
  const password = await loginUser.isPasswordCorrect(req?.body?.password);
  if (!password) {
    return res.send({
      success: false,
      login: false,
    });
  }
  const { accessToken, refreshToken } = await generateAccesssAndRefreshToken(
    loginUser._id
  );
  const userInfo = await User.findById(loginUser._id).select(
    "-password -refreshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  res
    .cookie("accessToken", accessToken)
    .cookie("refreshToken", refreshToken)
    .json({
      login: true,
      userInfo,
      success: true,
      accessToken,
      refreshToken,
    });
};

const DeleteUser = async (req, res) => {
  const deleteUser = await User.deleteOne({ _id: req?.body?.User_id });
  // console.log(deleteUser)
  res.send({
    user: "User deleted",
  });
};

const AllUser = async (req, res) => {
  const exists = await User.find();
  return res.send({
    User: exists,
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

  const userFind = await User.findById(veriftoken._id);

  if (!userFind) {
    return res.send({
      login: false,
      Token: "UnAuthorized",
    });
  }
  if (!refreshToken == userFind.refreshToken) {
    return res.send({
      login: false,
      Token: "UnAuthorized",
    });
  }
  const userInfo = await User.findById(veriftoken._id).select(
    "-password -refreshToken"
  );
  const accessToken = await userInfo.generateAccessToken();

  return res.send({
    login: true,
    userInfo,
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
  const updateUser = await User.findByIdAndUpdate(
    req?.body?.userId,
    {
      varifiedCode: generateOTP(),
    },
    { new: true }
  );
  await sendEmail("OTP VERIFICATION" ,updateUser.email , `Your OTP verification code is ${updateUser.varifiedCode} `) ;
  return res.send({
    success: true,
  });
};


const verifyOtp = async (req , res) =>{

  const user =await User.findById(req?.body.userId);
  const otp = req?.body?.otp
  if(otp == user?.varifiedCode){
    const updateUser =await User.findByIdAndUpdate(
      req?.body?.userId,
      {
        isVerified: true,
      }
    );
    const userInfo = await User.findById(req?.body?.userId).select(
      "-password -refreshToken"
    );
    return res.send({
      login: true,
      userInfo,
      success: true,
    })
  }
  return res.send({
    success: false,
  })
}
export {
  CreateUser,
  LoginUser,
  AllUser,
  otpGenerate,
  DeleteUser,
  RefreshTokenEndPoint,
  verifyOtp
};
