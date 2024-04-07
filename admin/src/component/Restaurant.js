import React, { useState, useEffect } from 'react'
import '../css/Util.css'
import '../css/Restaurant.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Restaurant() {

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

    const adminName = useSelector(state => state.admin.adminInfo.name)
    const navigate = useNavigate()

    const [restaurantDetails, setRestaurantDetails] = useState([])
    const getAllDetail = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Restaurant/fetchall');
            console.log(response.data.Restaurant)
            setRestaurantDetails(response.data.Restaurant)
            // setCategoryData(response.data.allproductWithCategories)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
    useEffect(() => {
        getAllDetail()
    }, [])
    return (
        <>
            <SideBar />
            <div className="container-fluid m-0 p-0" onClick={hide}>

                <div className='container-fluid main mainDissable' onClick={hide}>

                    <div className="row header">
                        <div className='d-flex' >
                            <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
                            <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , {adminName}</p>
                        </div>
                    </div >

                    <div className="row row2">
                        <div className="container-fluid m-0 p-0">

                            <div className='container-fluid px-3 py-2 me-5'>
                                <h2 className='pageName py-3 ps-3'>Restaurant</h2>

                                <div className="mt-4 p-3" >

                                    <div className='row mb-5'>

                                        {/* RESTAURENT CARDS */}
                                        {
                                            restaurantDetails.map((item, index) => {
                                                return (
                                                    <div className='restro rounded box-shadow mb-5 p-0' onClick={() => navigate(`/Restaurantdetails/${item._id}`)} key={index}>
                                                        <img src={item.img[0] || "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600"} className='img-fluid m-0 h-100 rounded rounded-3' alt="" />
                                                        <div className='restro-detail bg-light rounded box-shadow p-2 mx-3'>
                                                            <small className='bg-success rounded px-2'>NEW</small>
                                                            <div className="overflow-hidden mt-1" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >
                                                                <p className='fs-6 fw-bold text-uppercase'>{item.name}</p>
                                                            </div>
                                                            <small className='text-success text-sm'>{`${item.rating}`.slice(0,3)}/5 ratings</small><br />
                                                            <small className='text-sm fw-bold text-secondary'>Status : {item.isApproved}</small>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
