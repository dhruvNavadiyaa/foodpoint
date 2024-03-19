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
    customer: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    payment: {
        type: String,
    },
    total: {
        type:Number,
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
        {    fulladdress: {
                type: String,
            },
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
