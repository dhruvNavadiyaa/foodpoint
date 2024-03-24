import ContactUs from "../models/ContactUsModel.js";
import sendEmail from "../utils/emailSend.js"
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

const deleteMsg = async(req, res) => {
    const all = await ContactUs.findByIdAndDelete(req?.body?.id)
    res.send({
        "success":true,
    })
}


export {createContactUs,deleteMsg,alldata}