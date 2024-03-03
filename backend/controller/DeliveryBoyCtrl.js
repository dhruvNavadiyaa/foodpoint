import DeliveryBoy from "../models/DeliveryBoyModel.js";



const CreateDeliveryBoy = async(req,res)=>{
    const exists = await DeliveryBoy.findOne({
        email : req?.body?.email
    })
    if (exists){
        return res.send({
            "email":"exists",
        })
    }

    const create = await DeliveryBoy.create({
        name  : req?.body?.name,
        email  : req?.body?.email,
        password  : req?.body?.password,
        number  : req?.body?.number,
    })
    res.send({
        userinformation : create
    })
}



const LoginDeliveryBoy = async(req,res)=>{
    const loginUser = await DeliveryBoy.findOne({
        email : req?.body?.email
    })
    if(!loginUser) {
        return res.send({
            "login" :"failed",
        })
    }
    const password = await loginUser.isPasswordCorrect(req?.body?.password)
    if(password){
    return   res.send({
        loginUser 
    })
}

    return res.send({
        "login": "failed"
    })
        
}

const allDeliveryBoy =async (req, res) => {
    const  approved = await DeliveryBoy.find({
        isApproved : "approved"
    }) 
    const  pending = await DeliveryBoy.find({
        isApproved : "pending"
    }) 
    const  rejected = await DeliveryBoy.find({
        isApproved : "rejected"
    }) 
    res.send({
        approved,
        pending,
        rejected
    })
}

const DeleteDeliveryBoy =async (req, res) => {
    const deleteDeliveryBoy = await DeliveryBoy.findByIdAndDelete(req?.body?.DeliveryBoy_id)
    res.send({
        "user": "User deleted"
    })
}

const UpdateDeliveryBoy =async (req, res) => {
    const deleteUser = await DeliveryBoy.findByIdAndUpdate(req?.body?.DeliveryBoy_id , {isApproved:req?.body?.isApproved })
    res.send({
        "user": "User Updated"
    })
}

export  { CreateDeliveryBoy,allDeliveryBoy , LoginDeliveryBoy,DeleteDeliveryBoy , UpdateDeliveryBoy}