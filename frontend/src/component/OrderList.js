import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function OrderList() {

    // http://localhost:5000/api/order/orderinfo
    const user_id = useSelector(state => state.user.userInfo.userInfo._id)
    const [orderPending, setOrderPending] = useState([])
    const [orderDone, setOrderDone] = useState([])

    const getallOrder = async () => {
        const response = await axios.post('http://localhost:5000/api/order/orderinfo', { user_id })
        const arr = response.data.orderInfo
        console.log(response.data.orderInfo)
        arr.map(item => {
            if (item._id === "group2") {
                setOrderPending(item.orders)
            }
            else if (item._id === "group1") {
                setOrderDone(item.orders)
            }
        })

    }

    useEffect(() => {
        getallOrder()
    }, [])
    return (
        <>
            <Navbar />
            <div className='row m-0'>

                <div className="" style={{ marginTop: '90px' }}>

                    <div className="container px-5 popular mt-4">
                        <p className='fs-5 mb-0 mt-5 fw-bold'>Order Items</p>
                        <div className="row m-0">

                            <div className="container-md px-md-5 mt-4" >

                                {orderPending.map((item, index) => {
                                    return (<div key={index} className="row m-0 ">

                                        <div className="col px-5-md mb-5">
                                            <div className="item p-3 rounded rounded-4 box-shadow">

                                                <div className="row m-0">
                                                    <div className="col ">
                                                        <div className='row m-0'>
                                                            <div className="col d-flex align-items-center">
                                                                <div>
                                                                    <p className='mb-0 fw-bold text-secondary'>By {item?.restaurantDetail?.name}</p>
                                                                    <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> {item?.restaurantDetail?.rating}/5 &#8226; 20-25 min</small>
                                                                </div>
                                                                <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                                            </div>
                                                            <hr className='my-2' />
                                                            <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                            <p className='fw-bold mb-0'>{item?.productDetail?.name}</p>
                                                            <small className='fw-medium text-secondary'>{item?.productDetail?.description}</small><br /><br />
                                                            <small className='fw-medium text-secondary'>Total Quantity : {item?.products?.quantity}</small><br />
                                                            <small className='fw-medium'>Total payment amount : &#x20B9;{item.total} </small><br />
                                                            <div className='mt-3 border'>
                                                                <p className='fw-bold text-secondary'>Track Your Order</p>
                                                                <p className='fw-bold text-secondary'>Status : <span className='text-dark'>{item.status}</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 ">
                                                        <img src={item?.productDetail?.img || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"}
                                                            className='img-fluid rounded rounded box-shadow' alt="" />
                                                        {/* <button className='btn btn-outline-danger btn-sm'>Cancel</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                })}

                                {orderPending.length === 0 ? <div>There Is No Order Runnig To You Right Now.</div> : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" style={{ marginTop: '10px' }}>

                    <div className="container px-5 popular mt-4">
                        <p className='fs-5 mb-0 mt-5 fw-bold'>Order History</p>
                        <div className="row m-0">

                            <div className="container-md px-md-5 mt-4" >
                                {orderDone.map((item, index) => {
                                    return (<div key={index} className="row m-0 mb-5">

                                        <div className="col px-5-md mb-5">
                                            <div className="item p-3 rounded rounded-4 box-shadow">

                                                <div className="row m-0">
                                                    <div className="col ">
                                                        <div className='row m-0'>
                                                            <div className="col d-flex align-items-center">
                                                                <div>
                                                                    <p className='mb-0 fw-bold text-secondary'>By {item.restaurantDetail.name}'s</p>
                                                                    <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> {item.restaurantDetail.rating}/5 &#8226; 20-25 min</small>
                                                                </div>
                                                                <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                                            </div>
                                                            <hr className='my-2' />
                                                            <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                            <p className='fw-bold mb-0'>{item.productDetail.name}</p>
                                                            <small className='fw-medium text-secondary'>{item.productDetail.description}</small><br /><br />
                                                            <small className='fw-medium text-secondary'>Total Quantity : {item.products.quantity}</small><br />
                                                            <small className='fw-medium'>Total payment amount : &#x20B9;{item.total} </small><br />
                                                            <div className='mt-3 border'>
                                                                <p className='fw-bold text-secondary'>Track Your Order</p>
                                                                <p className='fw-bold text-secondary'>Status : <span className='text-dark'>{item.status}</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 ">
                                                        <img src={item.productDetail.img || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"}
                                                            className='img-fluid rounded rounded box-shadow' alt="" />
                                                        {/* <button className='btn btn-outline-danger btn-sm'>Cancel</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                })}
                                {orderDone.length === 0 ? <div>There Is No Order History.</div> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col d-flex align-items-center">
                                                <div>
                                                    <p className='mb-0 fw-bold text-secondary'>By McDonald's</p>
                                                    <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> 4/5 &#8226; 20-25 min</small>
                                                </div>
                                                <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                            </div> */}
            {/* <hr className='mb-3' /> */}
        </>
    )
}






