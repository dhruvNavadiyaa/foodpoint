import React, { useEffect } from 'react';
import '../css/Restaurant.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios'

const Restaurent = () => {

    const location = useLocation();
    const restroId = location.state.restroId;
    const getAllDetail = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/Restaurant/alldetail',{restaurant_id:restroId});
            console.log(response.data)
            // setSearchProduct(response.data.product)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
    useEffect(()=>{
        getAllDetail()
        console.log(restroId)
    },[])

    return (
        <>
            <Navbar />
            <div className="row m-0">

                <div className="container-fluid" style={{ marginTop: '100px' }}>

                    <div className="container-sm px-md-5 mt-4 w-100"  style={{ width: '80vw' }}>

                        {/* RESTAURENT INFO */}
                        <div className="row m-0" >
                            <div className="col-12 d-flex justify-content-between border-bottom ">
                                <div className=''>
                                    {/* <p className='fs-5 fw-bold mb-0'>Malhar Dhosa</p><br /> */}
                                    <span className='fs-4 fw-bold'>Malhar Dhosa</span><br />
                                    <div className='mt-2 mb-1  '>
                                        <small className='text-secondary fw-medium'> &#x2022; 8:30AM to 6:30PM </small><br />
                                        <small className='text-secondary fw-medium'> &#x2022; 123, wolf street, bombay, india</small><br />
                                    <p className='text-secondary w-md-75 ps-2'>Lorem ipsum dolor sit amet, um totam quis non, iste culpa obcaecati rem eveniet aperiam, id quae fugiat eius saepe?</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="border p-2 text-center rounded rounded-3" >
                                        <p className='mb-0 border-bottom border-2 pb-2 fw-bold' ><i className="bi bi-star-fill text-success"></i> 4.6</p>
                                        <small className='fw-medium'>500+ ratings</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <p className='fw-bold'><i className="bi bi-hourglass-split"></i> 20-25 MINS</p>
                            </div>
                        </div>

                        {/* CATEGORY */}
                        <div className="row m-0 ">
                        <p className='fw-bold text-center'><i className="bi bi-star"> </i> CATEGORIES <i className="bi bi-star"> </i></p>
                            <div className="col d-flex py-2 scroll-bar">

                                <div className="me-4 text-center mx-2" style={{ width: '100px' }}>
                                    <img src="https://media.istockphoto.com/id/962353378/vector/fast-food-line-icon.jpg?s=612x612&w=0&k=20&c=xD9-KlVj_w4hqhlB6VnsnTqcaumATgDnywNdhrhOok4="
                                        className='rounded rounded-circle p-1 border box-shadow' alt="" style={{ height: '80px', width: '80px' }} /><br />
                                    <small className='mt-2 fw-bold fs-6 text-secondary'>Ice-creame</small>
                                </div>
                                <div className="me-4 text-center mx-2" style={{ width: '100px' }}>
                                    <img src="https://media.istockphoto.com/id/962353378/vector/fast-food-line-icon.jpg?s=612x612&w=0&k=20&c=xD9-KlVj_w4hqhlB6VnsnTqcaumATgDnywNdhrhOok4="
                                        className='rounded rounded-circle p-1 border box-shadow' alt="" style={{ height: '80px', width: '80px' }} /><br />
                                    <small className='mt-2 fw-bold fs-6 text-secondary'>Ice-creame</small>
                                </div>
                                <div className="me-4 text-center mx-2" style={{ width: '100px' }}>
                                    <img src="https://media.istockphoto.com/id/962353378/vector/fast-food-line-icon.jpg?s=612x612&w=0&k=20&c=xD9-KlVj_w4hqhlB6VnsnTqcaumATgDnywNdhrhOok4="
                                        className='rounded rounded-circle p-1 border box-shadow' alt="" style={{ height: '80px', width: '80px' }} /><br />
                                    <small className='mt-2 fw-bold fs-6 text-secondary'>Ice-creame</small>
                                </div>
                                <div className="me-4 text-center mx-2" style={{ width: '100px' }}>
                                    <img src="https://media.istockphoto.com/id/962353378/vector/fast-food-line-icon.jpg?s=612x612&w=0&k=20&c=xD9-KlVj_w4hqhlB6VnsnTqcaumATgDnywNdhrhOok4="
                                        className='rounded rounded-circle p-1 border box-shadow' alt="" style={{ height: '80px', width: '80px' }} /><br />
                                    <small className='mt-2 fw-bold fs-6 text-secondary'>Ice-creame</small>
                                </div>


                            </div>
                        </div>

                        <div className="row m-0 mb-5 mt-5">

                            {/* ITEM CARDS */}
                            <div className="col-sm-6 px-5-md mb-5">
                                <div className="item p-3 rounded rounded-4 box-shadow">
                                    <div className='row m-0'>
                                        <div className="col d-flex align-items-center">
                                            <div>
                                                <p className='mb-0 fw-bold text-secondary'>By McDonald's</p>
                                                <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> 4/5 &#8226; 20-25 min</small>
                                            </div>
                                            <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                        </div>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className="row m-0">
                                        <div className="col-8 ">
                                            <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                            <p className='fw-bold mb-0'>McVeggie Burger</p>
                                            <small className='fw-medium'>&#x20B9; 99</small><br />
                                            <small className='fw-medium text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas vitae porro ipsum.</small>
                                        </div>
                                        <div className="col-4 ">
                                            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
                                                className='img-fluid rounded rounded box-shadow' alt="" />
                                            <button className='btn btn-outline-success btn-sm'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 px-5-md mb-5">
                                <div className="item p-3 rounded rounded-4 box-shadow">
                                    <div className='row m-0'>
                                        <div className="col d-flex align-items-center">
                                            <div>
                                                <p className='mb-0 fw-bold text-secondary'>By McDonald's</p>
                                                <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> 4/5 &#8226; 20-25 min</small>
                                            </div>
                                            <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                        </div>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className="row m-0">
                                        <div className="col-8 ">
                                            <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                            <p className='fw-bold mb-0'>McVeggie Burger</p>
                                            <small className='fw-medium'>&#x20B9; 99</small><br />
                                            <small className='fw-medium text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas vitae porro ipsum.</small>
                                        </div>
                                        <div className="col-4 ">
                                            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
                                                className='img-fluid rounded rounded box-shadow' alt="" />
                                            <button className='btn btn-outline-success btn-sm'>ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Restaurent;
