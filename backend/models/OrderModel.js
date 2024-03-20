import mongoose , {Schema} from "mongoose";

const OrderSchema = new Schema({
    products: {
            product: {
              type: Schema.Types.ObjectId,
              ref: "Product",
            },
            quantity: {
              type: Number,
                default: 1,
                  min:1
            },
          },
    user: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    
    
    Restaurant: {
        type: mongoose.Types.ObjectId,
        ref:'Restaurant'
    },
    status: {
        type: String,
        default:'process'
    },
    deliveryBoy: {
        type: mongoose.Types.ObjectId,
        ref:'DeliverBoy'
    },
    address: 
        {    
            type : String,
    },
    payment: {
        razorpay_payment_id:{
            type : String
        },
        razorpay_order_id:{
            type : String
        },       
         razorpay_signature:{
            type : String
        },
        payment :{
            type : Boolean,
            default : true
        }
    },
    total: {
        type:Number,
    },
    RestaurantReview: {
        type: mongoose.Types.ObjectId,
        ref:"Review"
    },
    deliveryBoyReview: {
        type: mongoose.Types.ObjectId,
        ref:'Review'
    },
      isreviewGiven:{
        forRestaurant:{
            type:Boolean,
            default:false
        },
        forDeliveryBoy:{
            type:Boolean,
            default:false
        }
    },
},{
    timestamps : true,
})

export default mongoose.model('Order', OrderSchema);
