import express from "express";
import db from "./db.js";
import dotenv from 'dotenv'
import cors from "cors";
import cookieParser from "cookie-parser";
import user from './route/userRoute.js'
import delivery from './route/DeliveryBoyRoute.js'
import Restaurant from './route/RestaurantRoute.js'
import product from './route/ProductRoute.js'
import admin from './route/AdminRoute.js'
import category from './route/CategoryRoute.js'
import contactUs from './route/CategoryRoute.js'
dotenv.config()
const app = express();
app.use(express.json())
db()
const corsOptions = {
    origin : true,
    credentials : true
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use("/api/user",user)
app.use("/api/delivery",delivery)
app.use("/api/Restaurant",Restaurant)
app.use("/api/product",product)
app.use("/api/admin",admin)
app.use("/api/category",category)
app.use("/api/contactus",contactUs)
app.listen(process.env.PORT , ()=>{
    console.log(`runing on ${process.env.PORT}` )
})
