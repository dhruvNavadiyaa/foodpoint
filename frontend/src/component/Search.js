import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { useNavigate  } from 'react-router-dom';

import '../css/Home.css';

export default function Search() {
    const navigate = useNavigate()
    const [topProduct, setTopProduct] = useState([])
    const [name, setName] = useState('')
    const [searchProduct, setSearchProduct] = useState('')

    const getTopProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/product/top');
            // console.log(response.data.product)
            setTopProduct(response.data.product)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
    const getSearchProduct = async () => {
        if (name.trim() !== '') {
            try {
                const response = await axios.post('http://localhost:5000/api/product/search', { name:name.trim() });
                console.log(response.data.product)
                setSearchProduct(response.data.product)
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        else {
            setSearchProduct('')
        }
    }
    useEffect(() => {
        getTopProduct()
    }, [])
    return (
        <>
            <Navbar />
            <div className='row m-0'>

                <div className="" style={{ marginTop: '90px' }}>

                    <form action="" onSubmit={(e) => {e.preventDefault();getSearchProduct()}}>
                        <div className="container mt-4 px-5  d-flex align-items-center" >

                            <input type="text" className='w-100 py-2 px-3 rounded border border-secondary text-center'
                                placeholder='Search category or product'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {/* <div className='ms-auto'>
                                <button className='btn btn-outline-dark m-0 py-2' onClick={getSearchProduct}>Search</button>
                            </div> */}
                        </div>
                    </form>

                    {/* PUPULAR PRODUCT IN HORIZONTAL SCROLL BAR */}
                    {/* {<div className="container px-5 popular mt-4">
                        <p className='mb-0 mt-5 fw-bold'>Popular Cuisines</p>
                        <div className="row m-0">

                            <div className="col d-flex mt-3 py-2 scroll-bar">

                                <div className="me-4 text-center" style={{ width: '100px' }}>
                                    <img src="https://assets.dryicons.com/uploads/icon/svg/6893/310ad17e-e42f-4372-bc74-e633e1628c66.svg"
                                        className='rounded rounded-circle p-1' alt="" style={{ height: '70px', width: '70px' }} /><br />
                                    <small className='mt-2'>Ice-creame</small>
                                </div>

                            </div>
                        </div>
                    </div>
                    */}

                    {searchProduct !== '' &&
                        <>
                            <div className="container-md px-md-5 mt-4" >
                                <p className='fs-5 mb-0 mt-3 fw-bold'>Searched Items</p>
                                <div className="row m-0 mb-5 mt-3">

                                    {/* SEARCH ITEM CARDS */}

                                    {
                                        searchProduct.map((item, index) => {

                                            return <div className="col-sm-6 px-5-md mb-2" key={index}>
                                                <div className="item p-3 rounded rounded-4 box-shadow">
                                                    <div className='row m-0'>
                                                        <div className="col d-flex align-items-center">
                                                            <div>
                                                                <p className='mb-0 fw-bold text-secondary'>By {item?.restaurantDetails?.name}</p>
                                                                <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> {(String(item?.rating)).slice(0, 3)}/5 &#8226; 20-25 min</small>
                                                            </div>
                                                            {/* <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i> */}
                                                        </div>
                                                    </div>
                                                    <hr className='mb-3' />
                                                    <div className="row m-0">
                                                        <div className="col-8 ">
                                                            <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                            <p className='fw-bold mb-0'>{item?.name}</p>
                                                            <small className='fw-medium'>&#x20B9; {item?.price}</small><br />
                                                            <small className='fw-medium text-secondary'>{item?.description}.</small>
                                                        </div>
                                                        <div className="col-4 ">
                                                            <img src={item?.img || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"}
                                                                className='img-fluid rounded rounded box-shadow' alt="" />
                                                            <button onClick={()=>navigate(`/PlaceOrder/${item?._id}`)} className='btn btn-outline-success btn-sm'>BUY NOW</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }


                                        )
                                    }
                                </div>
                            </div>
                        </>
                    }

                    <div className="container-md px-md-5 mt-4" >
                        <p className='fs-5 mb-0 mt-3 fw-bold'>Popular Cuisines</p>
                        <div className="row m-0 mb-5 mt-3">

                            {/* ITEM CARDS */}
                            {
                                topProduct.map((item, index) => {

                                    return <div className="col-sm-6 px-5-md mb-5" key={index}>
                                        <div className="item p-3 rounded rounded-4 box-shadow">
                                            <div className='row m-0'>
                                                <div className="col d-flex align-items-center">
                                                    <div>
                                                        <p className='mb-0 fw-bold text-secondary'>By {item?.restaurantDetails?.name}</p>
                                                        <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> {(String(item?.rating)).slice(0, 3)}/5 &#8226; 20-25 min</small>
                                                    </div>
                                                    {/* <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i> */}
                                                </div>
                                            </div>
                                            <hr className='mb-3' />
                                            <div className="row m-0">
                                                <div className="col-8 ">
                                                    <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                    <p className='fw-bold mb-0'>{item?.name}</p>
                                                    <small className='fw-medium'>&#x20B9; {item?.price}</small><br />
                                                    <small className='fw-medium text-secondary'>{item?.description}.</small>
                                                </div>
                                                <div className="col-4 ">
                                                    <img src={item?.img || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"}
                                                        className='img-fluid rounded rounded box-shadow w-100' alt="" 
                                                        style={{height:'100px',objectFit:"cover"}}/>
                                                    <button onClick={()=>navigate(`/PlaceOrder/${item?._id}`)} className='btn btn-outline-success btn-sm'>BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
