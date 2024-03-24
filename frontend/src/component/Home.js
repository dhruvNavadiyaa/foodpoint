import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import '../css/Home.css'; // Make sure to create and import the CSS file
import Navbar from './Navbar';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate()
  const [topRestaurant, setTopRestaurant] = useState([])
  const [topProduct, setTopProduct] = useState([])

  const getTopRestaurent = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/Restaurant/toprestaurant');
      // console.log(response.data)
      setTopRestaurant(response.data.Restaurant)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  
  const getTopProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/top');
      // console.log(response.data)
      setTopProduct(response.data.product)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  useEffect(() => {
    getTopRestaurent()
    getTopProduct()
  }, [])

  return (
    <>
      <Navbar />
      <div className="row m-0" >

        <div className="home-page container-fluid" style={{ marginTop: '90px' }}>

          {/* TOP PRODUCTS */}
          <div className="container-md">
            <p className='fs-4 fw-bold'>What's on your mind?</p>

            <div className="row m-0">

              <div className="col d-flex mt-3 scroll-bar py-2" >

                {topProduct.map((item, index) =>
                  <div key={index}onClick={()=>navigate(`/PlaceOrder/${item._id}`)}  className="product ms-3 me-md-5 me-3 text-center  ">
                    <img src={item.img || "https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=600"}
                      className='border rounded rounded-circle product-image box-shadow' alt="" />
                    <p className='fs-6 mt-2 text-secondary fw-medium'>{item.name}</p>
                  </div>
                )
                }


              </div>
            </div>
          </div>

          {/* RESTAURENT */}
          <div className='container-md restaurant mt-5 mb-5'>
            <p className='fs-4 text-start fw-bold mb-3'>Top restaurant chains in Surat</p>
            <div className="row m-0">
              {/* <div className="col"> */}

              <div className="row  mt-3 mb-5 m-0 " >

                {topRestaurant.map((item, index) => {
                  return (
                    <div className='col-md-4 col-sm-6 col-xs-8 col-12  mb-3  m-auto' onClick={() => { navigate(`/Restaurant/${item._id}`) }} key={index}>
                      <div className=' m-0 mx-3'>
                        <div className=" p-0 rounded rounded-4 overflow-hidden w-100" >
                          <img src={item?.img[0] || "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600"} alt=""
                            className='img-fluid w-100 rounded rounded-4'
                          />
                        </div>
                        <div className='px-3 mt-2  w-100'>
                          <p className='fs-5 mb-0 fw-medium text-nowrap overflow-hidden'>{item.name}</p>
                          <small className='fw-bold text-secondary mt-1 mb-0'><i className="bi bi-star-fill p-1 py-0 text-light bg-warning rounded rounded-circle" /> {item.rating}/5 &#x2022; 20-25 mins</small><br />
                          <p className='fw-medium text-secondary text-nowrap overflow-hidden'>&#x2022; {item.address.street}, {item.address.area}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
                }

              </div>
              {/* </div> */}

              {/* </div> */}

            </div>
          </div>

        </div>

      </div>
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
                                                        <p className='mb-0 fw-bold text-secondary'>By {item.restaurantDetails.name}</p>
                                                        <small className='fw-medium text-secondary'><i className="bi bi-star-fill text-secondary"> </i> {item.rating}/5 &#8226; 20-25 min</small>
                                                    </div>
                                                    <i className="bi bi-heart-fill fs-4 me-3 ms-auto text-secondary"></i>
                                                </div>
                                            </div>
                                            <hr className='mb-3' />
                                            <div className="row m-0">
                                                <div className="col-8 ">
                                                    <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                                                    <p className='fw-bold mb-0'>{item.name}</p>
                                                    <small className='fw-medium'>&#x20B9; {item.price}</small><br />
                                                    <small className='fw-medium text-secondary'>{item.description}.</small>
                                                </div>
                                                <div className="col-4 ">
                                                    <img src={item?.img || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"}
                                                        className='img-fluid rounded rounded box-shadow' alt="" />
                                                    <button onClick={()=>navigate(`/PlaceOrder/${item._id}`)} className='btn btn-outline-success btn-sm'>BUY NOW</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                )
                            }

                        </div>
                    </div>
      <Footer />
    </>
  );
};

export default Home;
