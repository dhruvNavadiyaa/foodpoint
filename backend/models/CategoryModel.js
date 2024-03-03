import mongoose , {Schema} from "mongoose";


const Category = new Schema({
    name: {
        type:String 
    },
    description:{
        type:String,
    },
    isActive: {
        type: Boolean,
        default:true
    },
    product: [{
        type: mongoose.Types.ObjectId,
        ref:'Product'
    }] ,
    Resturant : {
        type: mongoose.Types.ObjectId,
        ref:'Resturant'
    }
})

export default mongoose.model('Category', Category);
