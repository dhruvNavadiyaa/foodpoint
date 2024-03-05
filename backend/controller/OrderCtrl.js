import Order from "../models/OrderModel.js";



const CreateOrder = async(req,res)=>{

    const create = await Order.create({
        products  :req?.body?.description,
        customer  : req?.body?.customer,
        Resturant : req?.body?.Resturant_id,
        payment : req?.body?.payment,
        total : req?.body?.total,
        resturant : req?.body?.resturant_id,
        deliveryBoy:req?.body?.deliveryBoy,
        address:req?.body?.address,
        deliveryBoy:req?.body?.deliveryBoy
    })
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


export  { CreateOrder }