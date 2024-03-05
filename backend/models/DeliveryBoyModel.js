import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt";


const DeliveryBoySchema = new Schema({
    name: {
        type:String
    },
    email: {
        type: String,
        required : true,
        index : true
    },
    number: {
        type:String
    },
 
    password: {
        type:String
    },
    isApproved: {
        type: String,
        default:'pending'
    },
    review: 
        [
            {
                type: mongoose.Types.ObjectId,
                ref:'Review'
            }    
        ]
    ,
    isAvilable: {
        type: Boolean,
        default:true
    },
    order: [{
        type: mongoose.Types.ObjectId,
        ref:'Order'
    }
    ],
},{
    timestamps : true,
})


DeliveryBoySchema.pre('save', async function (next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password , 4)
})


DeliveryBoySchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}





export default mongoose.model('DeliverBoy',DeliveryBoySchema)