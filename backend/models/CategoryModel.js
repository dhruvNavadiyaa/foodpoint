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
    Resturant : {
        type: mongoose.Types.ObjectId,
        ref:'Resturant'
    }
},{
    timestamps : true,
})

export default mongoose.model('Category', Category);
