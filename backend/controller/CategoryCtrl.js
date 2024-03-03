import Category from "../models/CategoryModel.js";


//Adding Category 

const CreateCategory = async(req,res)=>{

    const create = await Category.create({
        name  : req?.body?.name,
        description  : req?.body?.description,
        Resturant : req?.body?.Resturant_id
    })
    res.send({
        Categoryinformation : create
    })
}


// featch All catagory with Resturent Id 

const FeatchAll = async(req,res)=>{
    const AllFeatch = await Category.find({
        Resturant : req?.query?.Resturant_id
    })
    res.send({
        AllProduct : AllFeatch
    })
}


export  { CreateCategory ,FeatchAll }