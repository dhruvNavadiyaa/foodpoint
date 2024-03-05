import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type:String
    },
    price: {
        type:Number
    },
    resturnat: {
        type: mongoose.Types.ObjectId,
        ref:'Resturant'  
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref:'Category'
    },
    rating: {
        type: Number,
        default:0
    },
    review: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Review'
        }
    ],
   
    description: {
        type:String
    },
    isActive: {
        type: Boolean,
        default:true
    }
},{
    timestamps : true,
})

export default mongoose.model('Product',ProductSchema)