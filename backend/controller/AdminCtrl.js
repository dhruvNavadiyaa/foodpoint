import User from "../models/UserModel.js";
import Category from "../models/CategoryModel.js";
import DeliveryBoy from "../models/DeliveryBoyModel.js";
import Order from "../models/OrderModel.js";
import Product from "../models/ProductModel.js";
import Resturant from "../models/ResturantModel.js";
import Review from "../models/ReviewModel.js";


const AllUser = async(req , res)=>{
    const ExistsUser = await User.find().count()
    const ExistsResturant = await Resturant.find().count()
    const ActiveResturant = await Resturant.find({
        isActive : true
    }).count()
    const InActiveResturant = await Resturant.find({
        isActive : false
    }).count()
    const ExistsDeliveryBoy = await DeliveryBoy.find().count()
    const ActiveDeliveryBoy = await DeliveryBoy.find({
        isAvilable : true
    }).count()
    const InActiveDeliveryBoy = await DeliveryBoy.find({
        isAvilable : false
    }).count()
    const ExistsCategory = await Category.find().count()
    const ActiveCategory = await Category.find({
        isActive : true
    }).count()
    const InActiveCategory = await Category.find({
        isActive : false
    }).count()
   
    const ExistsProduct = await Product.find().count()
    const ActiveProduct = await Product.find({
        isActive : true
    }).count()
    const InActiveProduct = await Product.find({
        isActive : false
    }).count()
    return res.send({
        ExistsUser,
        ExistsResturant,
        ActiveResturant,
        InActiveResturant,
        ExistsDeliveryBoy,
        ActiveDeliveryBoy,
        InActiveDeliveryBoy,
        ExistsCategory,
        ActiveCategory,
        InActiveCategory,
        ExistsProduct,
        ActiveProduct,
        InActiveCategory,
        ActiveProduct
    })
}


export { AllUser}