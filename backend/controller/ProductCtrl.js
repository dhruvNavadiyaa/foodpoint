import Product from "../models/ProductModel.js";
import uploadCloudinary from "../utils/cloudinary.js";

//Add Product and Also id push in to the Category And Restaurant models
const CreateProduct = async(req,res)=>{
    const fileimg = req?.files?.product
    let  img = ""
    if(fileimg){
      img =await uploadCloudinary(`./temp/img/${fileimg[0]?.filename}`)
    }
    
    const create = await Product.create({
        name  : req?.body?.name,
        price : req?.body?.price,
        category  : req?.body?.category_id,
        restaurant  : req?.body?.restaurant_id,
        description  : req?.body?.description,
        img
    })
    res.send({
        Productinformation : create
    })
}


// Featch all products within catagory
const CatagoryProuct = async(req,res)=>{
    // console.log(req.query)
    const AllFeatch = await Product.find({
        category : req?.body?.category_id
    })
    res.send({
        AllProduct : AllFeatch
    })
}
const ResturentProuct = async(req,res)=>{
    const AllFeatch = await Product.aggregate([{
        $match: {
          restaurant : req?.body?.restaurant_id
        }
      }])
      res.send({
        AllProduct : AllFeatch
    })
}
const updateProduct = async (req, res) => {
const updatedproduct = await Product.findByIdAndUpdate(req?.body?.product_id , {
        name  : req?.body?.name,
        price : req?.body?.price,
        description  : req?.body?.description
})

return res.send({
    "success": true,
})

}

const deleteProduct = async (req, res) => {
    const deleteWithId = await Product.findByIdAndDelete(req?.body?.product_id)
    
    return res.send({
        "success": true,
    })
    
    }
    

    const searchProduct = async (req, res) => {
        const search = await Product.aggregate([
            {
              "$match": {
                "name": { "$regex": `.*${req?.body?.name}.*` }
              }
            },
            {
              "$sort": {
                "rating": 1  
              }
            }
          ])
          return res.send({
            "success": true,
            "product" : search
        })
    }
export  { CreateProduct , CatagoryProuct ,ResturentProuct,updateProduct,deleteProduct,searchProduct}