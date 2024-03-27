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
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref:'Restaurant'
    },
    status: {
        type: String,
        default:'pending'
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
      isreviewGiven:{
        type : Boolean,
        default : false
    },
    rating:{
        type : Number,
        default : 0
    }
},{
    timestamps : true,
})

export default mongoose.model('Order', OrderSchema);
