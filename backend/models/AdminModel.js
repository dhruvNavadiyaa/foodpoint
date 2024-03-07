import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const adminSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        index : true
    },
    password:{
        type: String,   
        required : true
    }
    ,number: {
        type: String,
    },
    refreshToken:{
        type: String,
    }
    },
{
    timestamps : true,
})

adminSchema.pre('save', async function (next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password , 4)
})


adminSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

adminSchema.methods.generateAccessToken = async function(){
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

adminSchema.methods.generateRefreshToken = async function(password){
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


export default mongoose.model('admin',adminSchema)