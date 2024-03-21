import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function PlaceOrder() {

    const navigate = useNavigate()
    const {productId} = useParams()
    const [qty, setQty] = useState(1)
    const [add, setAdd] = useState()
    const no = useSelector(state => state.user.userInfo.userInfo.number)
    const userId = useSelector(state => state.user.userInfo.userInfo._id)
    const [num, setNum] = useState(no)
    const [fullDetail, setFullDetail] = useState({})
    const [total, setTotal] = useState()

    const clickHadler = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/order/checkout', { money: total })
            console.log(response.data)
            const orderHere = response.data.order


            var options = {
                key: "rzp_test_tqYz4ebJLClrKM", // Enter the Key ID generated from the Dashboard
                amount: orderHere.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: orderHere.currency,
                name: "Dhruv",
                description: "Razer Pay",
                image: "https://example.com/your_logo",
                order_id: orderHere.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                // callback_url: "http://localhost:5000/api/order/paymentverify",
                "handler": async function (response) {
                    authorizePayment(response)
                },
                prefill: {
                    name: "Dhruv Navadiya",
                    email: "dhruv@example.com",
                    contact: "9000090000"
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#3399cc"
                }
            }
            const razer = new window.Razorpay(options);
            razer.open()
        }
        catch (e) {
            console.log(e)
        }
    }

    const productDetail = async () => {
        const response = await axios.post('http://localhost:5000/api/product/detail', { product_id: productId })
        setFullDetail(response.data.product)
        console.log(response.data.product)
        setTotal(response.data.product.price)
    }

    useEffect(() => {
        productDetail()
    }, [])
    useEffect(() => {
        setTotal((fullDetail.price) * qty)
    }, [qty])

    const authorizePayment = async (response) => {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response
        const data = await axios.post('http://localhost:5000/api/order/paymentverify',
            { razorpay_payment_id, razorpay_order_id, razorpay_signature })
        if (data.data.success) {
            const payload = {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                product: fullDetail._id,
                qty: qty,
                user: userId,
                Restaurant_id: fullDetail.restaurant,
                address: add,
                total: total
            }
            const orderCreate = await axios.post('http://localhost:5000/api/order/create', payload)
            console.log(orderCreate.data)
        }

    }
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
                                                            type='number' placeholder='Enter Number' value={num} onChange={e => setNum(e.target.value)}></input>
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-between">
                                                        <p className='fs-5 fw-bold'>Delivery Address </p>
                                                        <textarea className='w-50 border border-2 rounded px-3'
                                                            value={add} onChange={e => setAdd(e.target.value)} placeholder='Enter delivery Address'></textarea>
                                                    </div>
                                                    
                                                    <hr className='my-3' />

                                                    <div className="col-12 ">
                                                        <div className="row m-0 border d-flex  border">
                                                            <div className="col">
                                                                <p className='fs-5 fw-bold'>Items and Delivery </p>
                                                                <small className=' mb-0 fw-medium text-secondary'>By    {fullDetail.restaurantDetails.name}</small><br />
                                                                <p className='mt-1 fw-bold mb-0 text-success'>{fullDetail.name}</p>
                                                                <small className='fw-medium text-secondary'>&#x2022; <i className="bi bi-star-fill text-secondary"> </i> {fullDetail.rating}/5 &#8226; 20-25 min</small><br />
                                                                <small className='fw-medium text-secondary'></small><br />
                                                                <small>&#x2022;{fullDetail.description}</small>
                                                            </div>
                                                            <div className="col text-center">
                                                                <img src={fullDetail.img || "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"} className='img-fluid rounded rounded-3 box-shadow' alt="" />
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
                                                <div className='d-flex align-items-center' >
                                                    <p className='mb-0 d-flex  align-items-center'>items: </p>
                                                    <div className=' d-flex align-items-center ms-2' >
                                                        <button onClick={e => { if (qty > 1) { setQty(qty - 1) } }} className='btn btn-sm btn-light border my-2 py-0'>-</button>
                                                        <span className='mx-1 fw-medium'>{qty}X</span>
                                                        <button onClick={e => { setQty(qty + 1) }} className='btn btn-sm btn-light border my-2 py-0'>+</button>
                                                    </div>
                                                    <p className='mb-0 ms-auto'>&#8377; {total}</p>
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
                                                    <p className='mb-0 ms-auto fw-bold'>&#8377; {total}</p>
                                                </div>
                                                <button onClick={clickHadler} className='btn btn-outline-success'>PAY NOW <i className="bi bi-credit-card-2-front"></i></button>
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
