import Product from "../models/ProductModel.js";
import uploadCloudinary from "../utils/cloudinary.js";

//Add Product and Also id push in to the Category And Restaurant models
const CreateProduct = async(req,res)=>{
    const fileimg = req?.files?.product
    console.log(fileimg)
    console.log(req.body)
    let  img = ""
    if(fileimg){
      img =await uploadCloudinary(`./temp/img/${fileimg[0]?.filename}`)
    }
    try{
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
  catch(e){
    console.log(e)
  }
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
  console.log(req.body)
        const search = await Product.aggregate([
          {
            $match: {
              name : {
                $regex :`.*${req.body.name}.*`,
                $options: "i"
              }
            }
          },{
            $lookup: {
              from: "restaurants", 
              localField: "restaurant",
              foreignField: "_id", 
              as: "restaurantDetails" 
            }
          },{
            $addFields: {
              "restaurantDetails":{
                $first : "$restaurantDetails"
              } 
            }
          }
        ])
          return res.send({
            "success": true,
            "product" : search
        })
    }

    const top10Product = async (req, res) => {
      const top = await Product.aggregate([
        { $sort: { "rating": 1 } },
        { $limit: 10 },
        {
          $lookup: {
            from: "restaurants", 
            localField: "restaurant",
            foreignField: "_id", 
            as: "restaurantDetails" 
          }
        },
  {
    $addFields: {
      "restaurantDetails":{
        $first : "$restaurantDetails"
      } 
    }
  }
      ])
      res.send({
        success : true,
        product :top
      })
    }
  


    const searchProductWithId = async (req, res) => {
      console.log(req.body)
        // const findProduct = await Product.findById(req.body.product_id)
        const findProduct = await Product.findById(req.body.product_id)
        return res.send({ success:"true", product:findProduct})
    }
export  { CreateProduct,searchProductWithId , CatagoryProuct ,ResturentProuct,updateProduct,top10Product,deleteProduct,searchProduct}