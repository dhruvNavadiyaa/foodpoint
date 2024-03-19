import mongoose , {Schema} from "mongoose";


const ContactusSchema = new Schema({
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
    message: {
        type:String
    }
},{
    timestamps : true,
})


export default mongoose.model('Contactus',ContactusSchema)