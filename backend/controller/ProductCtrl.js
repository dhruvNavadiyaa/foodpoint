import Product from "../models/ProductModel.js";
import Category from "../models/CategoryModel.js";
import Resturant from "../models/ResturantModel.js";


//Add Product and Also id push in to the Category And Resturant models
const CreateProduct = async(req,res)=>{

    const create = await Product.create({
        name  : req?.body?.name,
        price : req?.body?.price,
        category  : req?.body?.category_id,
        resturnat  : req?.body?.resturnat_id,
        description  : req?.body?.description
    })
    const pushcat = await Category.findByIdAndUpdate(req?.body?.category_id,{ $push:{product : req?.body?.create._id } })
    const pushRes = await Category.findByIdAndUpdate(req?.body?.resturnat_id,{ $push:{product : req?.body?.create._id } })
    res.send({
        Productinformation : create
    })
}


// Featch all products within catagory
const CatagoryProuct = async(req,res)=>{
    // console.log(req.query)
    const AllFeatch = await Product.find({
        category : req?.query?.category_id
    })
    res.send({
        AllProduct : AllFeatch
    })
}

export  { CreateProduct , CatagoryProuct }