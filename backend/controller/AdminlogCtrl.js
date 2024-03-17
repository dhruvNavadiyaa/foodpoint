import Admin from "../models/AdminModel.js";
import jwt  from "jsonwebtoken";
const CreateAdmin = async (req, res) => {
  const exists = await Admin.findOne({
    email: req?.body?.email,
  });
  if (exists) {
    return res.send({
      email: "change email",
    });
  }

  const create = await Admin.create({
    name: req?.body?.name,
    email: req?.body?.email,
    password: req?.body?.password,
    number: req?.body?.number,
  });
  res.send({
    Admininformation: create,
  });
};
const LoginAdmin = async (req, res) => {
  const loginAdmin = await Admin.findOne({
    email: req?.body?.email,
  });

  if (!loginAdmin) {
    return res.send({
      login: false,
    });
  }
  const password = await loginAdmin.isPasswordCorrect(req?.body?.password);
  if (!password) {
    return res.send({
      login: false
    });
  }
    const { accessToken , refreshToken} = await generateAccesssAndRefreshToken(loginAdmin._id)
      const adminFind = await Admin.findById(loginAdmin._id).select("-password -refreshToken")
      const options={
        httpOnly : true,
        secure : true,
      }
    return res
    .cookie("accessToken", accessToken ,options )
    .cookie("refreshToken", refreshToken ,options )
    .json({
      login : true,
      adminInfo : adminFind ,
      accessToken,
      refreshToken
    });
};


const generateAccesssAndRefreshToken = async(_id) => {
      const adminFind = await Admin.findById(_id)
      const accessToken = await adminFind.generateAccessToken()
      const refreshToken = await adminFind.generateRefreshToken()
      adminFind.refreshToken=refreshToken
      adminFind.save({validateBeforeSave: false})
      return { accessToken , refreshToken}
    }


    const RefreshTokenEndPoint = async (req, res)=> {
      const refreshToken = req?.cookies?.refreshToken || req?.body?.refreshToken || req?.header("Authorization")?.replace("Bearer ","")
      if(!refreshToken){
        return res.send({
        login : false,
          "Token": "UnAuthorized",
        });
      }
      const veriftoken = jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET)

      const adminFind = await Admin.findById(veriftoken._id).select("-password")
      if (!adminFind) {
        return res.send({
        login : false,
          "Token": "UnAuthorized",
        });
      }
      if(!refreshToken == adminFind.refreshToken){
        return res.send({
          login : false,
            "Token": "UnAuthorized",
          });
      }
      const accessToken = await adminFind.generateAccessToken()
      const adminInfo = await Admin.findById(veriftoken._id).select("-password -refreshToken")
      return res.send({
        login : true,
        adminInfo ,
        accessToken
      });
    } 
export { CreateAdmin, LoginAdmin , RefreshTokenEndPoint };
