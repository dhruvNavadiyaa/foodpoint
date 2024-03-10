import React from 'react'
import Navbar from './Navbar'
import '../css/Util.css'
import Footer from './Footer';

export default function OrderList() {
    return (
        <>
            <Navbar />
            <div className='row m-0 p-3'>
                <div className="col p-3 border box-shadow" style={{ marginTop: '100px' }}>
                    <h3 className='fw-bold'>&#x2022; Order Summary</h3>
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
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    )
}
