import React from 'react'
import Navbar from './Navbar'

export default function PlaceOrder() {
    return (
        <>
            <Navbar />
            <div className='row m-0'>

                <div className="" style={{ marginTop: '90px' }}>

                    <div className="container popular mt-4">
                        <div className="row m-0">

                            <div className="container-md" >
                                <div className="row m-0 mb-5">

                                    <div className="col px-5-md mb-5 box-shadow rounded rounded-4">
                                        <div className="item ">

                                            <div className="row m-0">

                                                {/* USER DETAILS */}
                                                {/* <div className="col m-0">
                                                    <div className="row m-0 border">
                                                        <div className='row'>
                                                            <div className="col-6">
                                                                <p className='mb-0'>First Name</p>
                                                                <input type="text" className='w-100' placeholder='Enter name' />
                                                            </div>
                                                            <div className="col-6">
                                                                <p className='mb-0'>Last Name</p>
                                                                <input type="text" className='w-100' placeholder='Enter Last name' />
                                                            </div>
                                                            <div className="col-6 mt-2">
                                                                <p className='mb-0'>Email</p>
                                                                <input type="email" className='w-100' placeholder='Enter Email' />
                                                            </div>
                                                            <div className="col-6"></div>
                                                            <div className="col-6 mt-2">
                                                                <p className='mb-0'>Phone Number</p>
                                                                <input type="Number" className='w-100' placeholder='Enter Email' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="row m-0 box-shadow rounded rounded-3 py-3 px-2">

                                            {/* PRODUCT DETAILS */}
                                            <div className="col-8" >
                                                <div className='row m-0 ' >
                                                    <div className="col d-flex align-items-center">
                                                        <div>
                                                            <p className='mb-0 fw-bold text-secondary'>By McDonald's</p>
                                                            <small className='fw-medium text-secondary'><i class="bi bi-star-fill text-secondary"> </i> 4/5 &#8226; 20-25 min</small>
                                                        </div>
                                                        <i class="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                                    </div>
                                                    <hr className='my-2' />
                                                    <div>
                                                        <small className='text-warning'><i class="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                        <p className='fw-bold mb-0'>McVeggie Burger</p>
                                                        <small className='fw-medium text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas vitae porro ipsum.</small><br /><br />
                                                        <small className='fw-medium text-secondary'>Total Quantity : 12</small><br />
                                                        <small className='fw-medium'>Total payment amount : &#x20B9; 99</small><br />
                                                        <div className='mt-3 border'>
                                                            <p className='fw-bold text-secondary'>Track Your Order</p>
                                                            <p className='fw-bold text-secondary'>Status : <span className='text-dark'>On way</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 border">
                                                {/* <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
                                                    className='img-fluid rounded rounded box-shadow' alt="" /> */}

                                            </div>

                                        </div>
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
