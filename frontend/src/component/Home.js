import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import '../css/Home.css'; // Make sure to create and import the CSS file
import Navbar from './Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate()
  const [topRestaurant, setTopRestaurant] = useState([])
  const [topProduct, setTopProduct] = useState([])

  const getTopRestaurent = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/Restaurant/toprestaurant');
      setTopRestaurant(response.data.Restaurant)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  const getTopProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/top');
      console.log(response.data)
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
          <div className="container">
            <p className='fs-4 fw-bold'>What's on your mind?</p>

            <div className="row  m-0">

              <div className="col d-flex mt-3 scroll-bar py-2" >

                {topProduct.map((item,index) =><div  key={index} className="product ms-3 me-5 text-center  ">
                  <img src={item.img || "https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=600"}
                    className='border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>{item.name}</p>
                </div>)
                }


              </div>
            </div>
          </div>

          {/* RESTAURENT */}
          <div className='container restaurant mt-5 mb-5'>
            <p className='fs-4 text-start fw-bold mb-3'>Top restaurant chains in Surat</p>
            <div className="row">
              <div className="col d-flex justify-content-around flex-wrap">

                {/* <div className="row d-flex justify-content-around mt-3 mb-5 m-0 " > */}
                {topRestaurant.map((item, index) => {
                  return (
                    <div className='d-inline mb-3' onClick={() => { navigate('/Restaurant') }} key={index}>
                      <div className="card p-0 rounded rounded-4 box-shadow" >
                        <img src={item?.img[0] ||"https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600"} alt=""
                          className='card-img rounded rounded-4 box-shadow'
                        />
                        <div className="card-img-overlay">
                          {/* <p className='text-light'>Dominos</p> */}
                        </div>
                      </div>
                      <div className='px-3 mt-1'>
                        <p className='fs-5 mb-0 fw-bold text-secondary text-nowrap overflow-hidden'>{item.name}</p>
                        <small className='fw-bold text-secondary mt-1 mb-0'><i className="bi bi-star-fill p-1 py-0 text-light bg-warning rounded rounded-circle" /> {item.rating}/5 &#x2022; 20-25 mins</small><br />
                        <small className='mt-1 fw-bold text-secondary'>{item.address.street},{item.address.street} </small>
                      </div>
                    </div>
                  )
                })

                }

              </div>

              {/* </div> */}

            </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;
