import Resturant from "../models/ResturantModel.js";
import jwt  from "jsonwebtoken";


const generateAccesssAndRefreshToken = async(_id) => {
    const resturantFind = await Resturant.findById(_id)
    const accessToken = await resturantFind.generateAccessToken()
    const refreshToken = await resturantFind.generateRefreshToken()
    resturantFind.refreshToken=refreshToken
    resturantFind.save({validateBeforeSave: false})
    return { accessToken , refreshToken}
  }


const CreateResturant = async(req,res)=>{
    const exists = await Resturant.findOne({
        email : req?.body?.email
    })
    if (exists){
        return res.send({
            "email":"exists",
        })
    }

    const create = await Resturant.create({
        name  : req?.body?.name,
        ownerName : req?.body?.ownerName,
        email  : req?.body?.email,
        password  : req?.body?.password,
        number  : req?.body?.number,
        resturantType : req?.body?.resturantType,
        timing:{
            openAt: req?.body?.openAt,
            closeAt: req?.body?.closeAt
        },
        address:{
            street:req?.body?.street,
            area:req?.body?.area,
            fulladdress:req?.body?.fullAddress
        },
        bankDetail:{
            acNo :req?.body?.acNo,
            ifscCode:req?.body?.ifscCode ,
            acType:req?.body?.acType
        },
        pancardDetail:{
            panName: req?.body?.panName,
            panNo: req?.body?.panNo
        }
    })
    res.send({
        resturantinformation : create
    })
}



const LoginResturant = async(req,res)=>{
    const loginResturant = await Resturant.findOne({
        email : req?.body?.email
    })
    if(!loginResturant) {
        return res.send({
            login: false,
        })
    }
    const password = await loginResturant.isPasswordCorrect(req?.body?.password)
    if (!password) {
        return res.send({
          login: false
        });
      }
      const { accessToken , refreshToken} = await generateAccesssAndRefreshToken(loginResturant._id)
     const resturantInfo= await Resturant.findById(loginResturant._id).select("-password -refreshToken")
     const options={
        httpOnly : true,
        secure : true
      }
      return res
      .cookie("accessToken", accessToken ,options )
      .cookie("refreshToken", refreshToken ,options )
      .json({
        login : true,
        resturantInfo  ,
        accessToken,
        refreshToken
      });
        
}


const FetchAll = async (req, res) => {
    const  featchAll = await Resturant.find()
    return res.send({
        "All Resturant": featchAll
    })
}

const UpdateResturant= async (req, res) => {
    const updatedResturent = await Resturant.findByIdAndUpdate(req?.body?.Resturant_id , {
        name  : req?.body?.name,
        ownerName : req?.body?.ownerName,
        email  : req?.body?.email,
        password  : req?.body?.password,
        number  : req?.body?.number,
        resturantType : req?.body?.resturantType,
        timing:{
            openAt: req?.body?.openAt,
            closeAt: req?.body?.closeAt
        },
        address:{
            street:req?.body?.street,
            area:req?.body?.area,
            fulladdress:req?.body?.fullAddress
        },
        bankDetail:{
            acNo :req?.body?.acNo,
            ifscCode:req?.body?.ifscCode ,
            acType:req?.body?.acType
        },
        pancardDetail:{
            panName: req?.body?.panName,
            panNo: req?.body?.panNo
        },
        isApproved : req?.body?.isApproved
    })
    req.send({
        "Resturant": "Updated Successfully"
    })
}


const FeatchResturant = async (req, res) => {
    const  featchAll = await Resturant.find({
        isApproved : "Approved"
    })
    return res.send({
        "All Resturant": featchAll
    })
}

const DeleteResturant = async (req, res) => {
    const  delteRest = await Resturant.deleteOne({_id : req?.body?.Resturant_id})
    return res.send({
        "ResturantDelete": "successfull"
    })
}



const RefreshTokenEndPoint  = async (req, res) => {
    const refreshToken = req?.cookies?.refreshToken || req?.body?.refreshToken || req?.header("Authorization")?.replace("Bearer ","")
    if(!refreshToken){
      return res.send({
        login : false,
        "Token": "UnAuthorized",
      });
    }
    const veriftoken = jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET)

    const resturantFind = await Resturant.findById(veriftoken._id).select("-password")
    if (!resturantFind) {
      return res.send({
        login : false,
        "Token": "UnAuthorized",
      });
    }
    if(!refreshToken == resturantFind.refreshToken){
        return res.send({
          login : false,
            "Token": "UnAuthorized",
          });
      }
    const resturantInfo = await Resturant.findById(veriftoken._id).select("-password -refreshToken")
    const accessToken = await resturantInfo.generateAccessToken()

    return res.send({
      login : true,
      resturantInfo,
      accessToken
    });
}
export  { CreateResturant , LoginResturant  ,FetchAll,UpdateResturant,FeatchResturant , DeleteResturant ,RefreshTokenEndPoint}