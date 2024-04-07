import React, { useState, useEffect } from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import  axios from 'axios'
export default function Home() {

  const navigate = useNavigate()
  const restrodata = useSelector(state => state.restaurant.RestaurantInfo)
  const images = useSelector(state => state.restaurant.RestaurantInfo.img)

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [productDetail, setProductDetail] = useState([])
  const changeImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 2000); // Match this with your CSS transition duration
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    // changeImage(newIndex);
    setCurrentImageIndex(newIndex)
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    // changeImage(newIndex);
    setCurrentImageIndex(newIndex)
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 1000); // Continuously cycle images every 1 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const getProduct = async() =>{
    const response = await axios.post('http://localhost:5000/api/product/resturent', { restaurant_id:restrodata._id });
    setProductDetail(response?.data?.AllProduct)
  }
  const userId = useSelector(state => state?.restaurant?.RestaurantInfo?._id)
  useEffect(() => {
    getProduct()
    // console.log(userId)
  }, [])

  return (
    <>
      <Navbar />

      <div className='row front-img m-0 '>

        <div className="col mb-5 r mb-5 " style={{ marginTop: '100px' }}>

          {/* RESTAURANT INFORMATION ROW */}
          <div className='row  d-flex align-items-center justify-content-between'>

            <div className='col-sm-6 px-md-5 px-5 '>
              <p className='fs-2 fw-bold text-secondary mb-5'>Welcom to <span className='text-warning border-bottom border-2 border-secondary text-uppercase'>{restrodata.name}</span></p>
              <div className='fw-medium'>
                <p className='font-monospace'>Thank you for joining our online delivery platform! We're excited to partner with you and look forward to driving more customers to your delicious dishes.</p>
                <p className='mb-0 text-secondary'><i className="bi bi-star text-dark"> </i> {`${restrodata.rating}`.slice(0, 4)}/5 Overall Ratings</p>
                <p className='mb-0 text-secondary'><i className="bi bi-clock text-dark"> </i> {restrodata?.timing?.openAt} to {restrodata?.timing?.closeAt}</p>
                <p className='mb-0 text-secondary'><i className="bi bi-geo-alt text-dark"> </i> {restrodata?.address?.street}, {restrodata?.address?.area}</p>
                <p className='mb-0 text-secondary'><i className="bi bi-envelope text-dark"> </i> {restrodata?.email}</p>
              </div>
            </div>
            {/* RESTAURANT PHOTO CROUSEL */}
            <div className='col-sm-6  p-0' >
              <div className='carouselStyle'>
                <button onClick={prevImage} className='arrowStyleL btn btn-outline-light'>&lt;</button>
                <img
                  src={images[currentImageIndex]}
                  alt="carousel"
                  className={`imageStyle w-75 rounded rounded-3 box-shadow ${isTransitioning ? 'carousel-image-exit' : ''}`} // Add your transitioning class here
                />
                <button onClick={nextImage} className='arrowStyleR btn btn-outline-light'>&gt;</button>
              </div>
            </div>

          </div>

          {/* RESTAURANT TOP RATED PRODUCT */}
          <div className="container-md px-5 mt-5 ">

            <div className="row px-md-5 ">
              <p className='fs-2 d-none d-sm-block fw-bold text-secondary text-center mb-5'><i className="bi bi-star pe-2"></i> Your top rated Products <i className="bi bi-star ps-2"></i></p>
              <p className='fs-6 d-sm-none d-block fw-bold text-secondary text-center mb-5'><i className="bi bi-star pe-2"></i>Top rated Products<i className="bi bi-star ps-2"></i></p>

              {/* RESTAURANT BEST ITEM CARD */}
              {productDetail.map((item , index )=>
              {
                return(<div key={index} className="col-sm-6 px-5-md mb-5" >
                <div className="item p-3 rounded rounded-4 box-shadow">
                  <div className='row m-0'>
                    <div className="col d-flex align-items-center">
                      <div>
                        <p className='mb-0 fw-bold text-secondary'>By {restrodata?.name}</p>
                        <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                      </div>
                      <div className='p-1 border rounded text-center ms-auto'>
                        <small className='fw-medium '><i className="bi bi-star-fill text-success"> </i>{`${item?.rating}`.slice(0,3)}/5</small><br />
                        <hr className='border border-dark border-1 my-0 mt-1' />
                        <small className=''>Ratings</small>
                      </div>
                    </div>
                  </div>
                  <hr className='mb-3' />
                  <div className="row m-0">
                    <div className="col-8 ">
                      <p className='fw-bold mb-0'>{item?.name}</p>
                      <small className='fw-medium'>&#x20B9; {item?.price}</small><br />
                      <small className='fw-medium text-secondary'>{item?.description}</small>
                    </div>
                    <div className="col-4 ">
                      <img src={item?.img ||"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"}
                        className='img-fluid rounded rounded box-shadow' alt="" 
                        style={{height:"100px", width:"100%",objectFit:'cover'}}
                        />
                    </div>
                  </div>
                </div>
              </div>)})}

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}




