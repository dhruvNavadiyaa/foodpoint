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

                                    <div className="col px-5-md mb-5 rounded rounded-4">
                                        <div className="item ">
                                        </div>
                                        <div className="row m-0 box-shadow rounded rounded-3 py-3 px-2">

                                            {/* PRODUCT DETAILS */}
                                            <div className="col-8" >
                                                <div className='row m-0 ' >
                                                    <div className="col-12 mb-2 d-flex justify-content-between">
                                                        <p className='fs-5 fw-bold'>Use Number </p>
                                                        <input className='w-50 border border-2 rounded px-3'
                                                            placeholder='Enter Name' value="8155913582" dissable></input>
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-between">
                                                        <p className='fs-5 fw-bold'>Delivery Address </p>
                                                        <textarea className='w-50 border border-2 rounded px-3'
                                                            placeholder='Enter delivery Address'></textarea>
                                                    </div>
                                                    {/* <div className="col d-flex align-items-center border">
                                                        <div>
                                                            <p className='mb-0 fw-bold text-secondary'>By McDonald's</p>
                                                            <small className='fw-medium text-secondary'><i class="bi bi-star-fill text-secondary"> </i> 4/5 &#8226; 20-25 min</small>
                                                        </div>
                                                        <i class="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                                    </div> */}
                                                    <hr className='my-3' />
                                                    {/* <div>
                                                        <small className='text-warning'><i class="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                        <p className='fw-bold mb-0'>McVeggie Burger</p>
                                                        <small className='fw-medium text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas vitae porro ipsum.</small><br /><br />
                                                        <small className='fw-medium text-secondary'>Total Quantity : 12</small><br />
                                                        <small className='fw-medium'>Total payment amount : &#x20B9; 99</small><br />
                                                        <div className='mt-3 border'>
                                                            <p className='fw-bold text-secondary'>Track Your Order</p>
                                                            <p className='fw-bold text-secondary'>Status : <span className='text-dark'>On way</span></p>
                                                        </div>
                                                    </div> */}
                                                    <div className="col-12 d-flex justify-content-between">
                                                        <div className="row m-0">
                                                            <div className="col">
                                                                <p className='fs-5 fw-bold'>Items and Delivery </p>
                                                                <small className=' mb-0 fw-medium text-secondary'>By McDonald's</small><br />
                                                                <p className='mt-1 fw-bold mb-0 text-success'>McVeggie Burger</p>
                                                                <small className='fw-medium text-secondary'>&#x2022; <i class="bi bi-star-fill text-secondary"> </i> 4/5 &#8226; 20-25 min</small><br />
                                                                <small className='fw-medium text-secondary'></small><br />
                                                                <small>&#x2022; Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus quia ea laborum est dolore dolorum amet similique harum rem?</small>
                                                            </div>
                                                            <div className="col">
                                                                <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" className='img-fluid rounded rounded-3 box-shadow' alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ORDER SUMMMARY */}
                                            <div className="col-4  border-start">
                                                <button className='btn btn-warning'>Use Your Payment Methos</button>
                                                {/* <small className='fs-6 text-center'>Choose a payment method to continue checking out. You will still have a chance to review and edit your order before it is final.</small> */}
                                                <hr className='mt-3 mb-2' />
                                                <p className='fs-5 fw-bold mt-1'>Order Summary</p>
                                                <div className='d-flex ' >
                                                    <p className='mb-0'>items : 1x</p>
                                                    <p className='mb-0 ms-auto'>&#8377; 1499</p>
                                                </div>
                                                <div className='d-flex ' >
                                                    <p className='mb-0 '>Delivery :</p>
                                                    <p className='mb-0 ms-auto'>--</p>
                                                </div>
                                                <div className='d-flex ' >
                                                    <p className='mb-0 '>Total :</p>
                                                    <p className='mb-0 ms-auto'>--</p>
                                                </div>
                                                <hr className='my-2' />
                                                <div className='d-flex ' >
                                                    <p className='mb-0 fs-5 fw-bold text-danger '>Order Total </p>
                                                    <p className='mb-0 ms-auto fw-bold'>&#8377; 1499</p>
                                                </div>
                                                <button className='btn btn-outline-success'>PAY NOW <i class="bi bi-credit-card-2-front"></i></button>
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
