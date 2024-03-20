import ContactUs from "../models/ContactUsModel.js";


const createContactUs = async(req, res) => {
    const create  = await ContactUs.create({
        name: req?.body?.name,
        email: req?.body?.email,
        number: req?.body?.number,
        message: req?.body?.message,
        from : req?.body?.from
    })
    return res.send({
        "success":true
    })
}

const alldata = async(req, res) => {
    const all = await ContactUs.find().sort({"createdAt" : -1})

    res.send({
        "success":true,
        all
    })
}




export {createContactUs,alldata}