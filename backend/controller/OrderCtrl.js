import Order from "../models/OrderModel.js";
import Restaurant from '../models/RestaurantModel.js'
import Message from '../utils/MessageUtils.js'
const CreateOrder = async(req,res)=>{

    const create = await Order.create({
        products  :req?.body?.products_id,
        customer  : req?.body?.customer,
        Restaurant : req?.body?.Restaurant_id,
        paymentWay : req?.body?.paymentWay,
        payment : req?.body?.payment,
        total : req?.body?.total,
        address:req?.body?.address,
    })
    const findRestaurant = await Restaurant.findById(Restaurant_id)
    Message("You Have New Order , Please Check Ypur Order List" , findRestaurant.number)
    res.send({
        Orderinformation : create
    })
}


const allOrder = async(req,res)=>{

    const finde = await Order.find().sort( { "createdAt": 1 } )

    res.send({
        Orderinformation : create
    })
}

const orderInfo = async(req,res)=>{
    const find = await Order.findById(req.params.id)
    return req.send({
        orderInfo : find
    })
}
const updateOrderStatus = async(req,res)=>{
    const find = await Order.findByIdAndUpdate(req?.body?.Order_id , {
        status: req?.body?.status
    })
    return req.send({
        orderInfo : find
    })
}


export  { CreateOrder , allOrder }