import React, { useState } from 'react'
import '../css/Util.css'
// import '../css/Restaurant.css'
import '../css/Orderdetails.css'
import SideBar from './SideBar'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Orderdetails() {

    const navigate = useNavigate()
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
    const location = useLocation()
    const orderId  = location.state || {};
    
    useState(()=>{
        console.log(orderId)
    },[])

    return (
        <>
            <SideBar />
            <div className="container-fluid m-0 p-0" onClick={hide}>

                <div className='container-fluid main mainDissable' onClick={hide}>

                    <div className="row header">
                        <div className='d-flex' >
                            <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
                            <i className="bi bi-backspace rounded-circle slide box-shadow" onClick={()=>{navigate('/Orders')}}></i>
                            <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , dhruv</p>
                        </div>
                    </div >

                    <div className="row row2 rounded rounded-5" style={{ background: 'linear-gradient(45deg, rgb(95, 230, 211),rgb(138, 95, 246))'}}>

                        <div className="col-8 mt-4">

                            {/* CUSTOMER DETAILS */}
                            <div className="row p-3">
                                <div className="col border rounded-4 bg-light"  >
                                    <div className="row py-3 rounded rounded-top-4" style={{backgroundColor:'rgb(174, 192, 241)'}}>
                                        <h3 className='ps-4 '>Customers Details</h3>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-3 ps-4  fs-5 d-flex align-items-center">Name</div>
                                        <div className="col-8 border bg-order d-flex align-items-center rounded py-2 bg-order">Dhruv</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Mobile No.</div>
                                        <div className="col-8 border bg-order d-flex align-items-center rounded py-2">{orderId}</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Email</div>
                                        <div className="col-8 border bg-order d-flex align-items-center rounded py-2">dhruv@gmail.com</div>
                                    </div>
                                    <div className="row mt-2 mb-3">
                                        <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Address</div>
                                        <div className="col-8 border bg-order d-flex align-items-center rounded py-2">C-101, avadh society, singnpur, katargam, surat, gujarat, india </div>
                                    </div>
                                </div>
                            </div>

                            {/* CUSTOMER ORDER DETAIL */}
                            <div className="row p-3 mb-5">
                                <div className="col border rounded rounded-4 bg-light">
                                    <div className="row py-3 rounded rounded-top-4" style={{backgroundColor:'rgb(174, 192, 241)'}}>
                                        <h3 className='ps-4 '>Customers Order Details</h3>
                                    </div>
                                    <div className="row p-4">

                                        <div className="orderCard box-shadow p-3 mb-2">
                                            <div className='d-flex '>
                                                <div className=' my-auto'>
                                                   <p className='fs-5 fw-medium '>American tacos</p>
                                                   <small className=''>₹ 400 /Price</small><br />
                                                   <small className=''>1/Quantity</small>
                                                </div>
                                                <div className='order-img ms-auto'><img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='order-img rounded-circle' /></div>
                                            </div>
                                            <div className=''><small>Tacos with American twist - ground beef, lettuce, cheese, and salsa.Ordered 3 mins ago</small></div>
                                        </div>
                                        <div className="orderCard box-shadow p-3 mb-2">
                                            <div className='d-flex '>
                                                <div className=' my-auto'>
                                                   <p className='fs-5 fw-medium '>American tacos</p>
                                                   <small className=''>₹ 400 /Price</small><br />
                                                   <small className=''>1/Quantity</small>
                                                </div>
                                                <div className='order-img ms-auto'><img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='order-img rounded-circle' /></div>
                                            </div>
                                            <div className=''><small>Tacos with American twist - ground beef, lettuce, cheese, and salsa.Ordered 3 mins ago</small></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ORDER SUMMARY */}
                        <div className="col-4 p-3 mt-4">
                            <div className='border rounded rounded-4 p-3  bg-order'>
                                <p className='p-3 fs-4 fw-medium rounded' style={{backgroundColor:'rgb(174, 192, 241)'}}>Order Summary</p>
                                <div className='d-flex mb-1 mt-2'>
                                    <div className='ms-2'>Sub Total</div>
                                    <div className='ms-auto me-2'>400</div>
                                </div>
                                <div className='d-flex mb-1'>
                                    <div className='ms-2'>Quantity</div>
                                    <div className='ms-auto me-2'>1</div>
                                </div>
                                <div className='d-flex border-bottom border-3 mb-1 pb-2'>
                                    <div className='ms-2'>Other Charges</div>
                                    <div className='ms-auto me-2'>50</div>
                                </div>
                                <div className='d-flex mb-1'>
                                    <div className='ms-2 fw-bold'>Total</div>
                                    <div className='ms-auto me-2 fw-bold'>450</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
