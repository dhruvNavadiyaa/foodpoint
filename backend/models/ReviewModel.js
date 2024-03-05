import mongoose , {Schema} from "mongoose";


const ReviewSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    userName: {
        type:String
    },
    resturant: {
        type: mongoose.Types.ObjectId,
        ref:'Resturant'
    },
    review: {
        type:String
    },
    star: {
        type:String
    },
    deliveryBoyId: {
        type: mongoose.Types.ObjectId,
        ref:"DeliverBoy"
    },
    itsFor: {
        type:String
    }
},{
    timestamps : true,
})


export default mongoose.model('Review',ReviewSchema)