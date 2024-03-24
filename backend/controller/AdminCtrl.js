import User from "../models/UserModel.js";
import Category from "../models/CategoryModel.js";
import DeliveryBoy from "../models/DeliveryBoyModel.js";
import Product from "../models/ProductModel.js";
import Restaurant from "../models/RestaurantModel.js";


const AllUser = async(req , res)=>{
    const ExistsUser = await User.find().count()
    const ExistsRestaurant = await Restaurant.find().count()
    const ActiveRestaurant = await Restaurant.find({
        isApproved : "Approved"
    }).count()
    const InActiveRestaurant = await Restaurant.find({
        isApproved : "Pending"
    }).count()
    const ExistsDeliveryBoy = await DeliveryBoy.find().count()
    const ActiveDeliveryBoy = await DeliveryBoy.find({
        isApproved : "approved"
    }).count()
    const InActiveDeliveryBoy = await DeliveryBoy.find({
        isApproved : "pending"
    }).count()
    const ExistsCategory = await Category.find().count()   
    const ExistsProduct = await Product.find().count()
    const ActiveProduct = await Product.find({
        isActive : true
    }).count()
    const InActiveProduct = await Product.find({
        isActive : false
    }).count()
    return res.send({
        ExistsUser,
        ExistsRestaurant,
        ActiveRestaurant,
        InActiveRestaurant,
        ExistsDeliveryBoy,
        ActiveDeliveryBoy,
        InActiveDeliveryBoy,
        ExistsCategory,
        ExistsProduct,
        ActiveProduct,
        InActiveProduct
    })
}


export { AllUser}