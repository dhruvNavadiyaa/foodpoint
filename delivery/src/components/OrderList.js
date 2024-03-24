import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../css/Util.css'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';
import { useSelector } from 'react-redux';


export default function OrderList() {
    const [processOrderInfo, setProcessOrderInfo] =useState([])
    const delivery_id = useSelector(state => state?.deliver?.deliverInfo?.deliveryBoyInfo?._id)
    const navigate = useNavigate()
    const processOrder = async() => {
        const response = await axios.get('http://localhost:5000/api/order/orderpending');
        setProcessOrderInfo(response.data.orderInfo)
        // console.log(response.data)
    }

    const acceptOrder = async(id) => {
        console.log(id)
        const response = await axios.post('http://localhost:5000/api/order/acceptOrder',{
            Order_id:id,
            delivery_id,
            status:"on the way"
        });
        processOrder()
    }   


    useEffect(() => {
        processOrder()
    },[])
    return (
        <>
            <Navbar />
            <div className='row m-0 p-3'>
                <div className="col p-3 border box-shadow" style={{ marginTop: '100px', marginBottom:'50vh' }}>
                    {!(processOrderInfo.length===0)?
                    <>
                    <h3 className='fs-5 fw-bold text-secondary'>&#x2022; All Order</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr className='fs-6'>
                                <th scope="col">ORDER ID</th>
                                <th scope="col">CUSTOMER Id</th>
                                <th scope="col">TOTAL PRICE</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {processOrderInfo.map((item,index)=>{

                            return(<tr key={index} className=''>
                                <td>{item._id}</td>
                                <td>{item.user}</td>
                                <td>{item.total}</td>
                                <td>
                                    <div className="d-flex">
                                        <button onClick={()=>{acceptOrder(item._id)}} className='btn btn-sm btn-outline-success me-1'>Accept</button>
                                        <button className='btn btn-sm btn-outline-warning' onClick={()=>navigate(`/Orderdetails/${item._id}`)}>View</button>
                                    </div>
                                </td>
                            </tr>)
                            })}
                        </tbody>
                    </table>
                    </>:<>
                    <h1 className='text-center'>There Is No Order Avaliable</h1></>
}
                </div>
            </div>
            <Footer/>
        </>
    )
}
