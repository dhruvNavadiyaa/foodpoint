import Category from "../models/CategoryModel.js";


//Adding Category 

const CreateCategory = async(req,res)=>{

    const create = await Category.create({
        name  : req?.body?.name,
        description  : req?.body?.description,
        Resturant : req?.body?.Resturant_id
    })
    res.send({
        Categoryinformation : create
    })
}


// featch All catagory with Resturent Id 

const FetchWithId = async(req,res)=>{
    const AllFetch = await Category.find({
        Resturant : req?.body?.Resturant_id
    })
    res.send({
        AllProduct : AllFetch
    })
}

const FetchAll = async(req,res)=>{
    const AllFetch = await Category.find()
    res.send({
        AllProduct : AllFetch
    })
}

const DeleteCategory = async (req, res) => {
    const  deleteCatagory = await Category.deleteOne({_id : req?.body?.Category_id})
    return res.send({
        "ResturantDelete": "successfull"
    })
}
export  { CreateCategory ,FetchWithId , FetchAll ,DeleteCategory}