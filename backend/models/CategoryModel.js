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
    Restaurant : {
        type: mongoose.Types.ObjectId,
        ref:'Restaurant'
    }
},{
    timestamps : true,
})

export default mongoose.model('Category', Category);
