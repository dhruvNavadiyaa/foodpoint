import React from 'react';
import Footer from './Footer';
import '../css/Home.css'; // Make sure to create and import the CSS file
import Navbar from './Navbar';
const Home = () => {
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

                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>
                <div className="product ms-3 me-5 text-center  ">
                  <img src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className='image-fluid border rounded rounded-circle product-image box-shadow' alt="" />
                  <p className='fs-5 mt-2 text-secondary fw-bold'>Ice-creame</p>
                </div>


              </div>
            </div>
          </div>

          {/* RESTAURENT */}
          <div className='container restaurant mt-5 mb-5'>
            <p className='fs-4 text-start fw-bold mb-3'>Top restaurant chains in Surat</p>
            <div className="row">
              <div className="col d-flex justify-content-around flex-wrap">

                {/* <div className="row d-flex justify-content-around mt-3 mb-5 m-0 " > */}

                <div className='d-inline mb-3'>
                  <div className="card p-0 rounded rounded-4 box-shadow" >
                    <img src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                      className='card-img rounded rounded-4 box-shadow'
                    />
                    <div className="card-img-overlay">
                      <p className='text-light'>Dominos</p>
                    </div>
                  </div>
                  <div className='px-3 mt-1'>
                    <p className='fs-5 mb-0 fw-bold text-secondary text-nowrap overflow-hidden'>Restaurant Name</p>
                    <small className='fw-bold text-secondary mt-1 mb-0'><i className="bi bi-star-fill p-1 py-0 text-light bg-warning rounded rounded-circle" /> 4/5 &#x2022; 20-25 mins</small><br />
                    <small className='mt-1 fw-bold text-secondary'>Biryani, North IndianChowk Bazar1.8 km.</small>
                  </div>
                </div>
                <div className='d-inline mb-3'>
                  <div className="card p-0 rounded rounded-4 box-shadow" >
                    <img src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                      className='card-img rounded rounded-4 box-shadow'
                    />
                    <div className="card-img-overlay">
                      <p className='text-light'>Dominos</p>
                    </div>
                  </div>
                  <div className='px-3 mt-1'>
                    <p className='fs-5 mb-0 fw-bold text-secondary text-nowrap overflow-hidden'>Restaurant Name</p>
                    <small className='fw-bold text-secondary mt-1 mb-0'><i className="bi bi-star-fill p-1 py-0 text-light bg-warning rounded rounded-circle" /> 4/5 &#x2022; 20-25 mins</small><br />
                    <small className='mt-1 fw-bold text-secondary'>Biryani, North IndianChowk Bazar1.8 km.</small>
                  </div>
                </div>
                <div className='d-inline mb-3'>
                  <div className="card p-0 rounded rounded-4 box-shadow" >
                    <img src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                      className='card-img rounded rounded-4 box-shadow'
                    />
                    <div className="card-img-overlay">
                      <p className='text-light'>Dominos</p>
                    </div>
                  </div>
                  <div className='px-3 mt-1'>
                    <p className='fs-5 mb-0 fw-bold text-secondary text-nowrap overflow-hidden'>Restaurant Name</p>
                    <small className='fw-bold text-secondary mt-1 mb-0'><i className="bi bi-star-fill p-1 py-0 text-light bg-warning rounded rounded-circle" /> 4/5 &#x2022; 20-25 mins</small><br />
                    <small className='mt-1 fw-bold text-secondary'>Biryani, North IndianChowk Bazar1.8 km.</small>
                  </div>
                </div>
                <div className='d-inline mb-3'>
                  <div className="card p-0 rounded rounded-4 box-shadow" >
                    <img src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                      className='card-img rounded rounded-4 box-shadow'
                    />
                    <div className="card-img-overlay">
                      <p className='text-light'>Dominos</p>
                    </div>
                  </div>
                  <div className='px-3 mt-1'>
                    <p className='fs-5 mb-0 fw-bold text-secondary text-nowrap overflow-hidden'>Restaurant Name</p>
                    <small className='fw-bold text-secondary mt-1 mb-0'><i className="bi bi-star-fill p-1 py-0 text-light bg-warning rounded rounded-circle" /> 4/5 &#x2022; 20-25 mins</small><br />
                    <small className='mt-1 fw-bold text-secondary'>Biryani, North IndianChowk Bazar1.8 km.</small>
                  </div>
                </div>
                <div className='d-inline mb-3'>
                  <div className="card p-0 rounded rounded-4 box-shadow" >
                    <img src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                      className='card-img rounded rounded-4 box-shadow'
                    />
                    <div className="card-img-overlay">
                      <p className='text-light'>Dominos</p>
                    </div>
                  </div>
                  <div className='px-3 mt-1'>
                    <p className='fs-5 mb-0 fw-bold text-secondary text-nowrap overflow-hidden'>Restaurant Name</p>
                    <small className='fw-bold text-secondary mt-1 mb-0'><i className="bi bi-star-fill p-1 py-0 text-light bg-warning rounded rounded-circle" /> 4/5 &#x2022; 20-25 mins</small><br />
                    <small className='mt-1 fw-bold text-secondary'>Biryani, North IndianChowk Bazar1.8 km.</small>
                  </div>
                </div>
                <div className='d-inline mb-3'>
                  <div className="card p-0 rounded rounded-4 box-shadow" >
                    <img src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                      className='card-img rounded rounded-4 box-shadow'
                    />
                    <div className="card-img-overlay">
                      <p className='text-light'>Dominos</p>
                    </div>
                  </div>
                  <div className='px-3 mt-1'>
                    <p className='fs-5 mb-0 fw-bold text-secondary text-nowrap overflow-hidden'>Restaurant Name</p>
                    <small className='fw-bold text-secondary mt-1 mb-0'><i className="bi bi-star-fill p-1 py-0 text-light bg-warning rounded rounded-circle" /> 4/5 &#x2022; 20-25 mins</small><br />
                    <small className='mt-1 fw-bold text-secondary'>Biryani, North IndianChowk Bazar1.8 km.</small>
                  </div>
                </div>
                

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
