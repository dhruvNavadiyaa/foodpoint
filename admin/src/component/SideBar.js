// import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Util.css'
import '../css/SideBar.css'

const SideBar = () => {

    return (
        <>
            <div className="sidebar" >
                <div className="container px-4">
                    <div className="row user ">
                        <div className="col mb-3 d-flex">
                            <img src="https://www.svgrepo.com/show/251613/food-location.svg" className='img-fluid main-logo mt-3' alt="" />
                            <h5 className='fw-bold d-inline mt-3 ms-2 '>Food Point</h5>
                        </div>
                    </div>
                    <div className="row projects">
                        <div className="project">
                            <p className='mt-2 fs-6  font-light-thick h-40' id='Home'>DASHBOARD</p>
                            <div>
                                <Link to='/Dashboard' className='text-decoration-none text-dark'>
                                    <p className='ps-3 h-40 pageHover'><i className="bi bi-suitcase-lg me-3"></i> Dashboard</p>
                                </Link>
                            </div>
                        </div>
                        <div className='project mt-2'>
                            <p className='fs-6 font-light-thick'>PAGES</p>
                            <div className='mt-2'>
                                <Link to='/Orders' className='text-decoration-none text-dark'>
                                    <p className='ps-3 h-40 pageHover mb-3'><i className="bi bi-cart3 me-3"></i> Orders</p>
                                </Link>
                                <Link to='/Customers' className='text-decoration-none text-dark'>
                                    <p className='ps-3 h-40 pageHover mb-3'><i className="bi bi-people me-3"></i> Customer</p>
                                </Link>
                                <Link to='/DeliveryPartner' className='text-decoration-none text-dark'>
                                    <p className='ps-3 h-40 pageHover mb-3'><i className="bi bi-truck me-3"></i> Delivery partner</p>
                                </Link>
                                <Link to='/Restaurant' className='text-decoration-none text-dark'>
                                    <p className='ps-3 h-40 pageHover mb-3'><i className="bi bi-shop-window me-3"></i> Restaurant</p>
                                </Link>
                                <Link to='/Category' className='text-decoration-none text-dark'>
                                    <p className='ps-3 h-40 pageHover mb-3'><i className="bi bi-tag me-3"></i> Category</p>
                                </Link>
                                <Link to='/Request' className='text-decoration-none text-dark'>
                                    <p className='ps-3 h-40 pageHover mb-3'><i className="bi bi-list-ul me-3"></i> Request</p>
                                </Link>
                                <Link to='/ContactUs' className='text-decoration-none text-dark'>
                                    <p className='ps-3 h-40 pageHover'><i className="bi bi-phone-vibrate me-3"></i> Contact us</p>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default SideBar