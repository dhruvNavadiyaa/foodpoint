import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type:String
    },
    price: {
        type:Number
    },
    img:
        {type:String}
    ,
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref:'Restaurant'  
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref:'Category'
    },
    rating: {
        type: Number,
        default:0
    },
     totlaReview:{
        type:Number,
        default:0
    },
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