import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../css/Util.css'
import Footer from './Footer';
import axios from 'axios'

export default function OrderList() {

    const [orders, setOrders] = useState([])
    const [modalState, setModalState] = useState({
        isVisible: false,
        type: null, // Could be 'approve' or 'reject'
        data: null, // Data you want to pass to the modal
    });

    const getOrderDetail = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/order/allorder');
            // console.log(response.data.Orderinformation)
            setOrders(response.data.Orderinformation)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    const acceptOrder = async (id) => {
        console.log(id)
        // const response = await axios.post('http://localhost:5000/api/order/updateOrderStatus', { Order_id: id,status:"Accept" })
    }
    const cancelOrder = async (id) => {
        console.log(id)
        // const response = await axios.post('http://localhost:5000/api/order/updateOrderStatus', { Order_id: id,status:"Cancel" })
    }

    useEffect(() => {
        getOrderDetail()
        // console.log(restroId)
    }, [])

    return (
        <>
            <Navbar />
            <div className='row m-0 p-3'>
                <div className="col p-3 border box-shadow" style={{ marginTop: '100px', marginBottom: '50vh' }}>

                    <h3 className='fw-bold'>&#x2022; Order Summary</h3>

                    <table className="table table-hover">
                        <thead>
                            <tr className='fs-6'>
                                <th scope="col">Order Id</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">
                                    <div className="dropdown">
                                        <button className="btn btn-sm dropdown-toggle fs-6 fw-bold m-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/" onClick={(event) => { event.preventDefault(); console.log('hello') }}>Action</a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* ORDER DETAILS */}
                            {
                                orders.map((item, index) => {
                                    return (
                                        <tr className=''>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item?.products?.quantity}</td>
                                            <td>{item.total}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <button className='btn btn-sm btn-outline-success me-1' onClick={() => setModalState({ isVisible: true, type: 'accept', data: item._id })}>Accept</button>
                                                    <button className='btn btn-sm btn-outline-danger' onClick={() => setModalState({ isVisible: true, type: 'cancel', data: item._id })}>Cancel</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>

                {/* MODAL */}
                <div className="modal-overlay" hidden={!modalState.isVisible}>
                    <div className="modal-content bg-light p-4 box-shadow">
                        <div className='text-center'>
                            <img src="https://www.svgrepo.com/show/527338/question-circle.svg" alt="" className='w-25' />
                            <p className='fs-3 fw-bold mt-2'>Are you sure?</p>
                            <p className='font-light-thick'>You want to {modalState.type} this Restaurant?</p>
                        </div>
                        <div className="modal-actions d-flex ms-auto mt-auto">
                            <button className='btn btn-secondary me-2 px-3' onClick={() => setModalState({ isVisible: false, type: null, data: null })}>Cancel</button>
                            <button className='btn btn-danger px-3'
                                onClick={() => {
                                    if (modalState.type == 'accept') {
                                        acceptOrder(modalState.data);
                                    } else if (modalState.type == 'cancel') {
                                        cancelOrder(modalState.data);
                                    };
                                    setModalState({ isVisible: false, type: null, data: null })
                                }}>Ok
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
