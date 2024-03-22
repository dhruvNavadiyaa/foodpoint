import React from 'react'
import Navbar from './Navbar'
import '../css/Util.css'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function OrderList() {

    const navigate = useNavigate()
    
    return (
        <>
            <Navbar />
            <div className='row m-0 p-3'>
                <div className="col p-3 border box-shadow" style={{ marginTop: '100px', marginBottom:'50vh' }}>
                    <h3 className='fs-5 fw-bold text-secondary'>&#x2022; All Order</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr className='fs-6'>
                                <th scope="col">ORDER ID</th>
                                <th scope="col">CUSTOMER NAME</th>
                                <th scope="col">TOTAL PRICE</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>
                                    <div className="d-flex">
                                        <button className='btn btn-sm btn-outline-success me-1'>Accept</button>
                                        <button className='btn btn-sm btn-outline-warning' onClick={()=>navigate('/Orderdetails')}>View</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    )
}
