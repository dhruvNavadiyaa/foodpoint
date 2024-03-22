import React, { useState, useEffect } from 'react'
import '../css/Util.css'
// import '../css/Restaurant.css'
import '../css/Orderdetails.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Navbar from './Navbar'

export default function Orderdetails() {


    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(id)
    }, [])

    return (
        <>
            <Navbar />

            <div className="row m-0" >

                <div className="col"  style={{ marginTop: '100px' }}>

                    <div className="row m-0" >

                        <div className="col-8">

                            {/* CUSTOMER DETAILS */}
                            <div className="row p-3">
                                <div className="col border rounded-4 bg-light"  >
                                    <div className="row py-3 rounded rounded-top-4" style={{ backgroundColor: 'rgb(174, 192, 241)' }}>
                                        <h3 className='ps-4 '>Customers Details</h3>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-3 ps-4  fs-5 d-flex align-items-center">Name</div>
                                        <div className="col-8 border bg-order d-flex align-items-center rounded py-2 bg-order">name</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Mobile No.</div>
                                        <div className="col-8 border bg-order d-flex align-items-center rounded py-2">number</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Email</div>
                                        <div className="col-8 border bg-order d-flex align-items-center rounded py-2">email</div>
                                    </div>
                                    <div className="row mt-2 mb-3">
                                        <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Address</div>
                                        <div className="col-8 border bg-order d-flex align-items-center rounded py-2">address</div>
                                    </div>
                                </div>
                            </div>

                            {/* CUSTOMER ORDER DETAIL */}
                            <div className="row p-3 mb-5">
                                <div className="col border rounded rounded-4 bg-light">
                                    <div className="row py-3 rounded rounded-top-4" style={{ backgroundColor: 'rgb(174, 192, 241)' }}>
                                        <h3 className='ps-4 '>Customers Order Details</h3>
                                    </div>
                                    <div className="row p-4">

                                        <div className="orderCard box-shadow p-3 mb-2">
                                            <div className="col d-flex align-items-center">
                                                <div>
                                                    <p className='mb-0 fw-bold text-secondary'>By name</p>
                                                    <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> 0/5</small>
                                                </div>
                                            </div>
                                            <div className='d-flex '>
                                                <div className=' my-auto'>
                                                    <p className='fs-5 fw-medium '>name</p>
                                                    <small className=''>&#8226; ₹ Price</small><br />
                                                    <small className=''>&#8226; /Quantity</small>
                                                </div>
                                                <div className='order-img ms-auto'><img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='order-img rounded-circle' /></div>
                                            </div>
                                            <div className=''><small>Lorem, ipsum dolor sit amet consectetur adipisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quis!</small></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ORDER SUMMARY */}
                        <div className="col-4 p-3">
                            <div className='border rounded rounded-4 p-3  bg-order'>
                                <p className='p-3 fs-4 fw-medium rounded' style={{ backgroundColor: 'rgb(174, 192, 241)' }}>Order Summary</p>
                                <div className='d-flex mb-1 mt-2'>
                                    <div className='ms-2'>Sub Total</div>
                                    <div className='ms-auto me-2'>price</div>
                                </div>
                                <div className='d-flex mb-1'>
                                    <div className='ms-2'>Quantity</div>
                                    <div className='ms-auto me-2'>quantity</div>
                                </div>
                                <div className='d-flex border-bottom border-3 mb-1 pb-2'>
                                    <div className='ms-2'>Other Charges</div>
                                    <div className='ms-auto me-2'>-</div>
                                </div>
                                <div className='d-flex mb-1'>
                                    <div className='ms-2 fw-bold'>Total</div>
                                    <div className='ms-auto me-2 fw-bold'>ototal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
