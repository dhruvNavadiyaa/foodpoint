import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useSelector } from 'react-redux'
import '../css/Modal.css'

export default function OrderList() {

    // http://localhost:5000/api/order/orderinfo
    const user_id = useSelector(state => state.user.userInfo.userInfo._id)
    const [orderPending, setOrderPending] = useState([])
    const [orderDone, setOrderDone] = useState([])
    const [modalState, setModalState] = useState({
        isVisible: false,
        id: null
    });
    const [rating, setRating] = useState(0);

    const getallOrder = async () => {
        const response = await axios.post('http://localhost:5000/api/order/orderinfo', { user_id })
        const arr = response.data.orderInfo
        arr.map(item => {
            if (item?._id === "group2") {
                setOrderPending(item?.orders)
            }
            else if (item?._id === "group1") {
                setOrderDone(item?.orders)
                console.log(response.data.orderInfo)
            }
        })

    }

    const giveReview = async () => {
        const data={
            OrderId: modalState.id, 
            Rating: rating
        }
        try {
            const response = await axios.post('http://localhost:5000/api/review/add', data)
            console.log(response.data)
            console.log(rating)
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleStarClick = (index) => {
        setRating(index);
    };

    useEffect(() => {
        getallOrder()
    }, [])


    return (
        <>
            <Navbar />
            <div className='row m-0'>

                <div className="" style={{ marginTop: '90px' }}>

                    <div className="container-md  p-0 px-md-5 px-sm-3 popular mt-1">
                        <p className='fs-5 mb-0 mt-3 fw-bold'>Order Items</p>
                        <div className="row m-0">

                            <div className="container-md px-md-3 p-0 mt-4 " >

                                {orderPending.map((item, index) => {
                                    return (<div key={index} className="row m-0">

                                        <div className="col px-md-5 mb-5">
                                            <div className="item p-3 rounded rounded-4 box-shadow">

                                                <div className="row m-0">
                                                    <div className="col ">
                                                        <div className='row m-0'>
                                                            <div className="col d-flex align-items-center">
                                                                <div>
                                                                    <p className='mb-0 fw-bold text-secondary'>By {item?.restaurantDetail?.name}</p>
                                                                    <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> {item?.restaurantDetail?.rating}/5 &#8226; 20-25 min</small>
                                                                </div>
                                                                {/* <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i> */}
                                                            </div>
                                                            <hr className='my-2' />
                                                            <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                            <p className='fw-bold mb-0'>{item?.productDetail?.name}</p>
                                                            <small className='fw-medium text-secondary'>&#8226; {item?.productDetail?.description}</small><br />
                                                            <small className='fw-medium text-secondary'>&#8226; Total Quantity : {item?.products?.quantity}</small><br />
                                                            <small className='fw-medium'>Total payment amount : &#x20B9;{item?.total} </small><br />
                                                            <div className='mt-3'>
                                                                {/* <p className='fw-bold text-secondary'>Track Your Order</p> */}
                                                                <p className='fw-bold text-secondary'>Order Status : <span className='text-dark'>{item?.status}</span></p>
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

                {/* ORDER HISTORY */}
                <div className="mt-2">

                    <div className="container-md  p-0 px-md-5 px-sm-3 popular mt-2">
                        <p className='fs-5 mb-0 mt-3 fw-bold'>Order History</p>
                        <div className="row m-0">

                            <div className="container-md px-md-3 p-0 mt-5" >
                                {orderDone.map((item, index) => {
                                    return (<div key={index} className="row m-0 mb-5">

                                        <div className="col px-md-5 mb-2">
                                            <div className="item p-sm-3 p-1 rounded rounded-4 box-shadow">

                                                <div className="row m-0">
                                                    <div className="col p-0 p-sm-3">
                                                        <div className='row m-0'>
                                                            <div className="col d-flex align-items-center">
                                                                <div>
                                                                    <p className='mb-0 fw-bold text-secondary'>By {item?.restaurantDetail?.name}'s</p>
                                                                    <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> {item?.restaurantDetail?.rating}/5 &#8226; 20-25 min</small>
                                                                </div>
                                                                {/* <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i> */}
                                                            </div>
                                                            <hr className='my-2' />
                                                            <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                            <p className='fw-bold mb-0'>{item?.productDetail?.name}</p>
                                                            <small className='fw-medium text-secondary'>&#8226; {item?.productDetail.description}</small><br />
                                                            <small className='fw-medium text-secondary'>&#8226; Total Quantity : {item?.products.quantity}</small><br />
                                                            <small className='fw-medium'>Total payment amount : &#x20B9;{item?.total} </small><br />
                                                            <div className='mt-3'>
                                                                {/* <p className='fw-bold text-secondary'>Track Your Order</p> */}
                                                                <p className='fw-bold text-secondary'>Order Status : <span className='text-dark'>{item?.status}</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <img src={item?.productDetail.img || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"}
                                                            className='img-fluid rounded rounded box-shadow w-100' alt="" style={{ height: '200px', objectFit: "cover" }} />
                                                        {!item.isreviewGiven ? <button className='btn btn-outline-primary btn-sm' onClick={() => { setModalState({ isVisible: true, id: item._id }) }}>Give Riview</button> : <p>{Math.floor(item?.productDetail?.rating)}/5</p>}
                                                        {item.isreviewGiven ? <button className='btn btn-outline-primary btn-sm' onClick={() => { setModalState({ isVisible: true, id: item._id }) }}>Give Riview</button> : <p>{Math.floor(item?.productDetail?.rating)}/5</p>}
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

            {/* MODAL */}
            <div className="modal-overlay" hidden={!modalState.isVisible}>
                <div className="modal-content bg-light p-4 box-shadow">
                    <div className='text-center'>
                        <img src="https://www.svgrepo.com/show/19684/review.svg" alt="" className='w-25' />
                        <p className='fs-3 fw-bold mt-2'>Love our food? Rate us!</p>
                        <div className='d-flex fs-4 text-warning mt-4 justify-content-center'>
                            {[...Array(5)].map((star, index) => {
                                index += 1;
                                return (
                                    <i
                                        key={index}
                                        className={`bi bi-star${index <= rating ? '-fill' : ''} mx-1`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleStarClick(index)}
                                    ></i>
                                );
                            })}
                        </div>
                    </div>
                    <div className="modal-actions d-flex ms-auto mt-auto">
                        <button className='btn btn-secondary me-2 px-3' onClick={() => { setModalState({ isVisible: false, type: null, data: null }); setRating(0) }}>Cancel</button>
                        <button className='btn btn-danger px-3' onClick={() => { giveReview() }}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}






