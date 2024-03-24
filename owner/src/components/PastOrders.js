import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../css/Util.css'
import Footer from './Footer';
import axios from 'axios'
import { useSelector } from 'react-redux';

export default function PastOrders() {

    const Restaurant_id = useSelector(state => state.restaurant.RestaurantInfo._id)
    const [orders,setOrders] = useState([])

    const [modalState, setModalState] = useState({
        isVisible: false,
        type: null, // Could be 'approve' or 'reject'
        data: null, // Data you want to pass to the modal
    });

    const getOrderDetail = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/order/historyRestaurants', { Restaurant_id });
            setOrders(response.data.orderInfo)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getOrderDetail()
        // console.log(restroId)
    }, [])
    useEffect(() => {
        
        console.log(orders)
    }, [orders])
    return (
        <>

           

                <div className="col-12 mt-5 p-3 border box-shadow " style={{ marginBottom: '50vh' }}>

                    <p className='fs-4 fw-bold text-secondary'>&#x2022; Order History</p>

                    <table className="table table-hover">
                        <thead>
                            <tr className='fs-6'>
                                <th scope="col">Order Id</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                orders.map((item) =>{
                                    return(
                                        <>
                                        <td>{item._id}</td>
                                        <td>{item?.products.product}</td>
                                        <td>{item?.products.quantity}</td>
                                        <td>{item?.total}</td>
                                        <td>{item?.status}</td>
                                        </>
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
                                        // acceptOrder(modalState.data);
                                    } else if (modalState.type == 'cancel') {
                                        // cancelOrder(modalState.data);
                                    };
                                    setModalState({ isVisible: false, type: null, data: null })
                                }}>Ok
                            </button>
                        </div>
                    </div>
                </div>

            
        
        </>
    )
}
