import mongoose from "mongoose";


const db =async()=>{
    await mongoose.connect( process.env.MONGODB_URL)
    console.log("Connect successfully")
}



export default db;