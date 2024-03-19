import React, { useState } from 'react'
import Navbar from './Navbar'
import '../css/AddProject.css'
import Footer from './Footer'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function AddProduct() {

    const [changeForm, setChangeForm] = useState(true)
    const restroInfo = useSelector(state => state.restaurant.RestaurantInfo)
    
    //category details adding
    const [categoryName, setCategoryName] = useState('')
    const [categoryDesc, setCategoryDesc] = useState('')
    const restroId = useSelector(state => state.restaurant.RestaurantInfo._id)
    const categoryData = {
        name: categoryName,
        description: categoryDesc,
        Restaurant_id: restroId
    }
    const sendCategoryData = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/category/create', categoryData);
            console.log(response)
        } catch (error) {
            console.log('Error adding data:', error);
        }
    }
    const handleSubmitCategory = (event) => {
        event.preventDefault()
        sendCategoryData()
    }
    
    // product details adding form
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState("")
    const [pimg, setPimg] = useState({})
   

    

    const sendProductData = async () => {
        const formData = new FormData();

        formData.append('name', productName);
        formData.append('price', price);
        formData.append('category_id', category);
        formData.append('restaurant_id', restroId);
        formData.append('description', desc);
        formData.append("product",pimg)
        
    
        const response = await axios.post('http://localhost:5000/api/product/create', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            console.log(response)
        // console.log(data)
    }

    const handleSubmitProduct = (event) => {
        event.preventDefault()
        sendProductData()
    }

    // FETCH ALL CATEGORY
    const [categories, setCategories] = useState([])
    const fetchCategory = async () => {
        const response = await axios.get('http://localhost:5000/api/category/fetch')
        setCategories(response.data.AllProduct)
        console.log(categories)
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    return (
        <>
            <div className='' style={{ background: 'linear-gradient(45deg, rgb(253, 244, 181),rgb(206, 219, 252),rgb(251, 214, 212)' }}>

                <Navbar />
                <div className='row  p-5 py-3 m-0' >

                    <div className="row m-0" >
                        <div className="col" style={{ marginTop: '80px' }}>
                            <button className={`btn  ${!changeForm ? 'btn-outline-dark' : 'btn-dark'} me-2`} onClick={() => setChangeForm(true)}>Add Product</button>
                            <button className={`btn ${changeForm ? 'btn-outline-dark' : 'btn-dark'}`} onClick={() => setChangeForm(false)}>Add Category</button>
                        </div>
                    </div>

                    {!changeForm &&
                        <div className="row m-0">
                            <div className="col px-5 py-4 mb-5   rounded rounded-5 box-shadow" style={{ backgroundColor: 'rgb(226, 232, 240)', marginTop: '30px' }}>
                                <h1 className='fs-4 fw-bold'>&#x2022; Add Category</h1>

                                <div className="row m-0 mt-4">
                                    <div className="col">
                                        <small className='label-text'>CATEGORY NAME</small><br />
                                        <input type="text" className='w-50 mt-1 py-2 px-3 form-input' placeholder='Enter name'
                                            value={categoryName}
                                            onChange={(e) => setCategoryName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row m-0 mt-2">
                                    <div className="col">
                                        <small className='label-text'>DESCRIPTION</small><br />
                                        <textarea name="" id="" cols="" rows="2" className='w-100 mt-1 py-2 px-3 form-input' placeholder='Write Category description....'
                                            value={categoryDesc}
                                            onChange={(e) => setCategoryDesc(e.target.value)}
                                            required
                                        ></textarea>
                                        {/* <small className='fw-light'><i>Make it as long as you like</i></small> */}
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <button type='submit' onClick={handleSubmitCategory} className='btn btn-dark w-25 m-auto'
                                        disabled={categoryName === '' || categoryDesc === ''}>Add Category</button>
                                </div>
                            </div>
                        </div>
                    }
                    {changeForm &&
                        <div className="row m-0">
                            <div className="col px-5 py-4 mb-5   rounded rounded-5 box-shadow" style={{ backgroundColor: 'rgb(226, 232, 240)', marginTop: '30px' }}>
                                <h1 className='fs-4 fw-bold'>&#x2022; Add Product</h1>

                                <div className="row m-0 mt-4">
                                    <div className="col ">
                                        <small className='label-text'>PRODUCT NAME</small><br />
                                        <input type="text" className='w-100 mt-1 py-2 px-3 form-input' placeholder='Enter product name'
                                            value={productName}
                                            onChange={(e) => setProductName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col ">
                                        <small className='label-text'>PRICE</small><br />
                                        <input type="text" className='w-100 mt-1 py-2 px-3 form-input' placeholder='0'
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row m-0 mt-2">
                                    <div className="col">
                                        <small className='label-text'>DESCRIPTION</small><br />
                                        <textarea name="" id="" cols="" rows="2" className='w-100 mt-1 py-2 px-3 form-input' placeholder='Write product description....'
                                            value={desc}
                                            onChange={(e) => setDesc(e.target.value)}
                                            required
                                        ></textarea>
                                        <small className='fw-light'><i>Make it as long as you like</i></small>
                                    </div>
                                </div>

                                <div className="row m-0 mt-2" >
                                    <div className="col ">
                                        <small className='label-text'>FOOD TYPE</small><br />
                                        <select  value={category} onClick={(e)=>setCategory(e.target.value)} onChange={(e)=>setCategory(e.target.value)} className='w-100 mt-1 py-2 px-3 form-input text-secondary'>
                                            {
                                                categories.map((items, index) => {
                                                    return (
                                                        <>
                                                            <option key={index} value={items._id}>{items.name}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col ">
                                        <small className="label-text">ADD IMAGE</small>
                                        <input type="file" onChange={(e) => setPimg(e.target.files[0])} className="w-100 py-1 file-upload"
                                            required />
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <button type='submit' onClick={handleSubmitProduct} className='btn btn-dark w-25 m-auto'
                                        disabled={productName === '' || price === '' || desc === ''  || pimg === ''}>Submit</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div >
            <Footer />
        </>
    )
}
