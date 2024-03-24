import React, { useState, useEffect } from 'react'
import '../css/Util.css'
import '../css/Restaurantdetails.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import foodLogo from '../assets/images/foodLogo.png'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Restaurantdetails() {

    const hide = () => {
        if (window.innerWidth <= 750) {
            let sidebar, slide, main, title
            sidebar = document.querySelector(".sidebar")
            sidebar.classList.toggle("hide")

            slide = document.querySelector(".slide")
            slide.classList.toggle("moveSlide")

            main = document.querySelector(".main")
            main.classList.toggle("mainMove")
            main.classList.toggle("mainDissable")

            title = document.querySelector(".header")
            title.classList.toggle("headerMove")
        }
    }
    //SIDEBAR AND MAINCOMPONENT MOVEMENT FUNCTIONS
    const hideS = () => {
        let sidebar, slide, main, title
        sidebar = document.querySelector(".sidebar")
        sidebar.classList.toggle("hide")

        slide = document.querySelector(".slide")
        slide.classList.toggle("moveSlide")

        main = document.querySelector(".main")
        main.classList.toggle("mainMove")
        main.classList.toggle("mainDissable")

        title = document.querySelector(".header")
        title.classList.toggle("headerMove")
    }

    const navigate = useNavigate()
    const adminName = useSelector(state => state.admin.adminInfo.name)
    const location = useLocation();
    const { restroId } = useParams()
    const [restaurantDetails, setRestaurantDetails] = useState({})
    const [categoryData, setCategoryData] = useState([])
    const [categoryId, setCategoryId] = useState(0)
    // const restroId = location.state.restroId;

    const getAllDetail = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/Restaurant/alldetail', { restaurant_id: restroId });
            // console.log(response.data.restaurantDetails)
            // console.log(response.data.allproductWithCategories)
            setRestaurantDetails(response.data.restaurantDetails)
            setCategoryData(response.data.allproductWithCategories)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
    useEffect(() => {
        getAllDetail()
        // console.log(restroId)
    }, [])

    return (
        <>
            <SideBar />
            <div className="container-fluid m-0 p-0" onClick={hide}>

                <div className='container-fluid main mainDissable' onClick={hide}>

                    <div className="row header">
                        <div className='d-flex' >
                            <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
                            <i className="bi bi-backspace rounded-circle slide box-shadow" onClick={() => { navigate('/Restaurant') }}></i>
                            <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , {adminName}</p>
                        </div>
                    </div >

                    <div className="row row2 mt-3 rounded rounded-5" >

                        <div className="container-sm px-md-5 w-100 mt-4">

                            {/* RESTAURENT INFO */}
                            <div className="row m-0" >
                                <div className="col-12 d-flex justify-content-between border-bottom pb-3 mb-3">
                                    <div className=''>
                                        <span className='fs-1 fw-bold text-uppercase'>{restaurantDetails.name}</span><br />
                                        <div className='mt-2 mb-1  '>
                                            <small className='text-secondary fw-medium'> &#x2022; {restaurantDetails?.timing?.openAt} to {restaurantDetails?.timing?.closeAt}</small><br />
                                            <small className='text-secondary fw-medium'> &#x2022; {restaurantDetails?.address?.street}, {restaurantDetails?.address?.area}</small><br />
                                            <p className='text-secondary w-md-75 ps-2'>"Experience the essence of culinary excellence at our cozy eatery, where local flavors meet modern flair in every bite, right in the city's heart."</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className="border p-2 text-center rounded rounded-3" >
                                            <p className='mb-0 border-bottom border-2 pb-2 fw-bold' ><i className="bi bi-star-fill text-success"></i> {restaurantDetails.rating}</p>
                                            <small className='fw-medium'>Ratings</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <p className='fw-bold'><i className="bi bi-hourglass-split"></i> 20-25 MINS</p>
                                </div>
                            </div>

                            {/* CATEGORY */}
                            <div className="row m-0 mt-3">
                                <p className='fw-bold text-center'><i className="bi bi-star"> </i> CATEGORIES <i className="bi bi-star"> </i></p>
                                <div className="col d-flex py-2 scroll-bar">

                                    {categoryData.map((item, index) => {
                                        return (
                                            <div className="me-4 text-center mx-2 mt-3" style={{ width: '100px' }} key={index} onClick={() => setCategoryId(index)}>
                                                <img src="https://media.istockphoto.com/id/962353378/vector/fast-food-line-icon.jpg?s=612x612&w=0&k=20&c=xD9-KlVj_w4hqhlB6VnsnTqcaumATgDnywNdhrhOok4="
                                                    className='rounded rounded-circle p-1 border box-shadow' alt="" style={{ height: '80px', width: '80px' }} /><br />
                                                <small className='mt-2 fw-bold fs-6 text-secondary'>{item.categoryDetails?.name}</small>
                                            </div>
                                        )
                                    })
                                    }

                                </div>
                            </div>

                            <div className="row m-0 mb-5 mt-5">

                                {/* PRODUCT CARDS */}
                                {
                                    categoryData[categoryId]?.data.map((item, index) => {
                                        return (
                                            <div className="col-md-4 col-5 p-0 " >
                                                <div className='border mx-3 pb-3 border box-shadow rounded rounded-3 bg-light'>
                                                    <img src={item.img || 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="" className='img-fluid w-100 box-shadow rounded rounded-3' />
                                                    <div className='px-3 mt-2'>
                                                        <div className='px-2'>
                                                            <p className='fs-md-4 fw-bold text-uppercase'>{item.name}</p>
                                                            <p className='mt-1 fs-6 fw-medium'> &#8226; {item.description}</p>
                                                            <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> {item.rating}/5</small>
                                                        </div>
                                                        <hr className='my-2' />
                                                        <div className='row fs-md-5 fw-bold text-center'>
                                                            <div className="col">Price</div>
                                                            <div className="col">Status</div>
                                                        </div>
                                                        <div className="row text-center">
                                                            <div className="col">{item.price} INR</div>
                                                            <div className="col">{item.isActive ? "Active" : "UnActive"}</div>
                                                        </div>
                                                        {/* <button className='mt-3 btn btn-dark w-50 py-1'>Deative</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>


                        </div>


                    </div>
                </div>
            </div >
        </>
    )
}
