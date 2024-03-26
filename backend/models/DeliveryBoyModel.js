import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const DeliveryBoySchema = new Schema({
    name: {
        type:String
    },
    email: {
        type: String,
        required : true,
        index : true
    },
    number: {
        type:String
    },
 
    password: {
        type:String
    },
    isApproved: {
        type: String,
        default:'pending'
    },
    refreshToken:{
        type: String,
        default:""
    }
},{
    timestamps : true,
})


DeliveryBoySchema.pre('save', async function (next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password , 4)
})


DeliveryBoySchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

DeliveryBoySchema.methods.generateAccessToken = async function(){
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

DeliveryBoySchema.methods.generateRefreshToken = async function(){
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



export default mongoose.model('DeliverBoy',DeliveryBoySchema)