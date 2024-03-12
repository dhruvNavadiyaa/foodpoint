import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";

const resturantSchema = mongoose.Schema({
    name: {
        type: String,
    },
    ownerName: {
        type:String
    },
    email: {
        type:String,
    },
    password: {
        type:String
    },
    number:{
        type:Number,
    },
    isActive : {
        type : Boolean
    }
    ,
    resturantType:{
        type:String,
    },
    timing:{
       openAt:{
            type:String
        },
        closeAt:{
            type:String
        }
    },
    address: {
        street: {
            type:String,
        },
        area: {
            type:String
        },
        fullAddress:{
            type:String
        }
    },
    bankDetail:{
        acNo :{
            type:String,
        },
        ifscCode: {
            type:String
        },
        acType:{
            type:String
        }
    },
    pancardDetail:{
        panName:{
            type:String
        },
        panNo:{
            type:String
        }
    },
    order: [{
        type: mongoose.Types.ObjectId,
        ref: 'Order'
    }],
    isApproved: {
        type: String,
        default:'Pending'
    },
    rating: {
        type: String,
        default:0
    },
    refreshToken :{
        type: String,
        default :""
    }
},{
    timestamps : true,
})

resturantSchema.pre('save', async function (next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password , 4)
})


resturantSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

resturantSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}

resturantSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id : this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}



export default mongoose.model('Resturant',resturantSchema)