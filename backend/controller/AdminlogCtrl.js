import Admin from "../models/AdminModel.js";


const CreateAdmin = async(req,res)=>{
    const exists = await Admin.findOne({
        email : req?.body?.email
    })
    if (exists){
        return res.send({
            "email":"change email"
        })
    }

    const create = await Admin.create({
        name  : req?.body?.name,
        email  : req?.body?.email,
        password  : req?.body?.password,
        number  : req?.body?.number,
    })
    res.send({
        Admininformation : create
    })
}
const LoginAdmin = async(req,res)=>{
    const loginAdmin = await Admin.findOne({
        email : req?.body?.email
    })
    if(!loginAdmin) {
        return res.send({
            "login" :"failed",
        })
    }
    const password = await loginAdmin.isPasswordCorrect(req?.body?.password)
    if(password){
    return   res.send({
        loginAdmin 
    })
}

    return res.send({
        "login": "failed"
    })
        
}



export { CreateAdmin , LoginAdmin }