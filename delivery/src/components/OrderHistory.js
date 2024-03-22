import React from 'react'
import Navbar from './Navbar'
import '../css/Util.css'
import Footer from './Footer';

export default function OrderHistory() {
    
    return (
        <>
            <Navbar />
            <div className='row m-0 p-3'>

                {/* ACCEPTED ORDERS */}
                <div className="col p-3 border box-shadow" style={{ marginTop: '100px'}}>
                    <h3 className='fw-bold'>&#x2022; Accepted Order Summary</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr className='fs-6'>
                                <th scope="col">ORDER ID</th>
                                <th scope="col">CUSTOMER NAME</th>
                                <th scope="col">TOTAL PRICE</th>
                                <th scope="col">ORDER DATE</th>
                                <th scope="col">
                                    <div className="dropdown">
                                        <button className="btn btn-sm dropdown-toggle fs-6 fw-bold m-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">TYPE</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/" onClick={(event)=>{event.preventDefault();console.log('hello')}}>Action</a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* ORDER HISTORY */}
                <div className="col p-3 border box-shadow mt-5" style={{marginBottom:'50vh' }}>
                    <h3 className='fs-5 fw-bold text-secondary'>&#x2022; Order History</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr className='fs-6'>
                                <th scope="col">ORDER ID</th>
                                <th scope="col">CUSTOMER NAME</th>
                                <th scope="col">TOTAL PRICE</th>
                                <th scope="col">ORDER DATE</th>
                                <th scope="col">
                                    <div className="dropdown">
                                        <button className="btn btn-sm dropdown-toggle fs-6 fw-bold m-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">TYPE</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/" onClick={(event)=>{event.preventDefault();console.log('hello')}}>Action</a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    )
}
