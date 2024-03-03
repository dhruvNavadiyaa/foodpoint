import React from 'react';
import '../css/Restaurant.css';
import Footer from './Footer';
const Restaurent = () => {
    return (
        <div className="Restaurent-page container-fluid">

            <nav className=''>
                <nav className="navbar navbar-expand-lg py-3">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Search</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>

            {/* RESTAURENT */}
            <div className="container">
                <span className='btn btn-sm btn-outline-danger ms-5'>order now</span>
                <span className='btn btn-sm btn-outline-danger mx-2'>Review</span>
                <span className='btn btn-sm btn-outline-danger'>Photos</span>
            </div>
            <div className="container px-5 mt-2 restaurents-component" style={{ width: '80vw' }}>

                <div className="row text-center" >
                    <h2 className='mt-3'>Category</h2>
                </div>

                <div className="row px-5 mt-2 justify-content-between" >
                    <div className="col-2 reataurent text-center">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/6893/310ad17e-e42f-4372-bc74-e633e1628c66.svg" className='foodImg' alt="" />
                        <p className='mt-auto'>Italian</p>
                    </div>
                    <div className="col-2 reataurent text-center">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/6893/310ad17e-e42f-4372-bc74-e633e1628c66.svg" className='foodImg' alt="" />
                        <p className='mt-auto'>Italian</p>
                    </div>
                    <div className="col-2 reataurent text-center">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/6893/310ad17e-e42f-4372-bc74-e633e1628c66.svg" className='foodImg' alt="" />
                        <p className='mt-auto'>Italian</p>
                    </div>
                    <div className="col-2 reataurent text-center">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/6893/310ad17e-e42f-4372-bc74-e633e1628c66.svg" className='foodImg' alt="" />
                        <p className='mt-auto'>Italian</p>
                    </div>
                    <div className="col-2 reataurent text-center">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/6893/310ad17e-e42f-4372-bc74-e633e1628c66.svg" className='foodImg' alt="" />
                        <p className='mt-auto'>Italian</p>
                    </div>
                    <div className="col-2 reataurent text-center">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/6893/310ad17e-e42f-4372-bc74-e633e1628c66.svg" className='foodImg' alt="" />
                        <p className='mt-auto'>Italian</p>
                    </div>
                </div>

                <div className="row mt-5 px-5 mb-5 items">
                    <div className="col-2 ">
                        <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='item-image ms-0' alt="" />
                    </div>
                    <div className="col-7 ">
                        <span className='fw-bold'>Burger King</span><br />
                        <span className='mt-2'>500 INR</span><br />
                        <spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni, ut libero alias voluptatum culpa quam, debitis ullam ratione, soluta aut? Quis ab obcaecati, saepe eligendi laboriosam repudiandae quisquam optio?</spam>

                    </div>
                </div>
                <div className="row mt-5 px-5 mb-5 items">
                    <div className="col-2 ">
                        <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='item-image ms-0' alt="" />
                    </div>
                    <div className="col-7 ">
                        <span className='fw-bold'>Burger King</span><br />
                        <span className='mt-2'>500 INR</span><br />
                        <spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni, ut libero alias voluptatum culpa quam, debitis ullam ratione, soluta aut? Quis ab obcaecati, saepe eligendi laboriosam repudiandae quisquam optio?</spam>

                    </div>
                </div>
                <div className="row mt-5 px-5 mb-5 items">
                    <div className="col-2">
                        <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='item-image ms-0' alt="" />
                    </div>
                    <div className="col-7">
                        <span className='fw-bold'>Burger King</span><br />
                        <span className='mt-2'>500 INR</span><br />
                        <spam>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni, ut libero alias voluptatum culpa quam, debitis ullam ratione, soluta aut? Quis ab obcaecati, saepe eligendi laboriosam repudiandae quisquam optio?</spam>

                    </div>
                    .
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Restaurent;
