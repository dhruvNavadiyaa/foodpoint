import Order from '../models/OrderModel.js' 
import Product from '../models/ProductModel.js' 
import Restaurant from '../models/RestaurantModel.js' 


const addReview = async( req, res) => {
    const findOrder = await Order.findById(req?.body?.OrderId)
    const findProduct = await Product.findById(findOrder?.products?.product)
    const findRestaurant = await Restaurant.findById(findOrder?.restaurant)
    console.log(findRestaurant,findOrder,findProduct)
    const updateOrder = await Order.findByIdAndUpdate(req?.body?.OrderId, {
        isreviewGiven:true,
        // rating : req?.body?.Rating
        rating : req?.body?.Rating
    })
    const reviewtoProduct = ((findProduct.totlaReview * findProduct.rating ) + req?.body?.Rating)/(findProduct.totlaReview +1)
    console.log(reviewtoProduct)
    const updateProduct = await Product.findByIdAndUpdate(findOrder?.products?.product,{
        totlaReview
    })
}



export {addReview}