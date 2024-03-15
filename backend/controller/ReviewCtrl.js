import Review from "../models/ReviewModel.js";



const CreateReview = async(req,res)=>{

    const create = await Review.create({
        userId  : req?.body?.userId,
        userName  : req?.body?.userName,
        Restaurant : req?.body?.Restaurant_id,
        review : req?.body?.review,
        star : req?.body?.star,
        deliveryBoyId : req?.body?.deliveryBoyId,
        itsFor:req?.body?.itsFor
    })
    res.send({
        Reviewinformation : create
    })
}




export  { CreateReview }