import mongoose from "mongoose";
import bcrypt from "bcrypt";
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



export default mongoose.model('admin',adminSchema)