import Resturant from "../models/ResturantModel.js";



const CreateResturant = async(req,res)=>{
    const exists = await Resturant.findOne({
        email : req?.body?.email
    })
    if (exists){
        return res.send({
            "email":"exists",
        })
    }

    const create = await Resturant.create({
        name  : req?.body?.name,
        ownerName : req?.body?.ownerName,
        email  : req?.body?.email,
        password  : req?.body?.password,
        number  : req?.body?.number,
        resturantType : req?.body?.resturantType,
        timing:{
            openAt: req?.body?.openAt,
            closeAt: req?.body?.closeAt
        },

    })
    res.send({
        resturantinformation : create
    })
}



const LoginResturant = async(req,res)=>{
    const loginUser = await Resturant.findOne({
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


const FetchAll = async (req, res) => {
    const  featchAll = await Resturant.find()
    return res.send({
        "All Resturant": featchAll
    })
}

const UpdateResturant= async (req, res) => {
    const updatedResturent = await Resturant.findByIdAndUpdate(req?.body?.Resturant_id , {
        isApproved : req?.body?.isApproved
    })
    req.send({
        "user": "Updated Successfully"
    })
}


const FeatchResturant = async (req, res) => {
    const  featchAll = await Resturant.find({
        isApproved : "Approved"
    })
    return res.send({
        "All Resturant": featchAll
    })
}

const DeleteResturant = async (req, res) => {
    const  delteRest = await Resturant.deleteOne({_id : req?.body?.Resturant_id})
    return res.send({
        "ResturantDelete": "successfull"
    })
}

export  { CreateResturant , LoginResturant  ,FetchAll,UpdateResturant,FeatchResturant , DeleteResturant }