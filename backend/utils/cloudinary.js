import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


cloudinary.config({
    cloud_name:"yashtalaviya",
    api_key:"518358186656512",
    api_secret:"vUNA48idCiyvFUXIx9ClbNSZj20",
})

const uploadCloudinary =async (localpath)=>{
    try{
    const response = await cloudinary.uploader.upload(localpath,{
        resource_type: "auto"
    })
    fs.unlink(localpath,err => {})
    return response.url

}
catch (e) {
    console.log(e)
    fs.unlink(localpath)
    return null;
}
}

// uploadCloudinary()
export default uploadCloudinary
