import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
    },
    category: [
        {
            type: mongoose.Types.ObjectId,
            ref:'Category'
      }  
    ],
    product: [
        {
            type: mongoose.Types.ObjectId,
            ref:'Product'
        }
    ],
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
    review: [
        {
            type: mongoose.Types.ObjectId,
            ref:'Review'
        }
    ],
})

resturantSchema.pre('save', async function (next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password , 4)
})


resturantSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}



export default mongoose.model('Resturant',resturantSchema)