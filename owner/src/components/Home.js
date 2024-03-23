import React, { useState, useEffect } from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Home() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/RestroDetails')
  }
  const images = useSelector(state => state.restaurant.RestaurantInfo.img)

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    const interval = setInterval(changeImage, 1000); // Continuously cycle images every 4 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);


  return (
    <>
      <Navbar />

      <div className='row front-img m-0'>

        <div className="col mb-5 r mb-5" style={{ marginTop: '100px' }}>

          <div>
            <div className='carouselStyle'>
              <button onClick={prevImage} className='arrowStyleL btn btn-light'>&lt;</button>
              <img
                src={images[currentImageIndex]}
                alt="carousel"
                className={`imageStyle w-75 rounded rounded-3 box-shadow ${isTransitioning ? 'carousel-image-exit' : ''}`} // Add your transitioning class here
              />
              <button onClick={nextImage} className='arrowStyleR btn btn-light'>&gt;</button>
            </div>
          </div>

          {/* <div className=' text-center'>
            <h2 className='text-dark fw-bold mt-4'>Register your restaurant on "FoodPoint" and get more customers!</h2>
            <button className='btn btn-dark fs-5 mt-4 py-2 fw-bold' onClick={handleClick}>Register Your Restaurant</button>
          </div> */}
          <div className="container px-5 mt-5">

            <div className="row px-5">
              <p className='fs-2 fw-bold text-secondary text-center mb-5'><i class="bi bi-star pe-2"></i> Your top rated Products <i class="bi bi-star ps-2"></i></p>
              
              {/* RESTAURANT BEST ITEM CARD */}
              <div className="col-sm-6 px-5-md mb-5" >
                <div className="item p-3 rounded rounded-4 box-shadow">
                  <div className='row m-0'>
                    <div className="col d-flex align-items-center">
                      <div>
                        <p className='mb-0 fw-bold text-secondary'>By Mc'Donald</p>
                        <small className='text-warning'><i className="bi bi-star-fill text-warning"> </i>BESTSELLER</small>
                      </div>
                      <div className='p-1 border rounded text-center ms-auto'>
                        <small className='fw-medium '><i className="bi bi-star-fill text-success"> </i>3/5</small><br />
                        <hr className='border border-dark border-1 my-0 mt-1' />
                        <small className=''>Ratings</small>
                      </div>
                    </div>
                  </div>
                  <hr className='mb-3' />
                  <div className="row m-0">
                    <div className="col-8 ">
                      <p className='fw-bold mb-0'>Mc Vaggie Burgur</p>
                      <small className='fw-medium'>&#x20B9; 199</small><br />
                      <small className='fw-medium text-secondary'>item.descriptio Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti?</small>
                    </div>
                    <div className="col-4 ">
                      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
                        className='img-fluid rounded rounded box-shadow' alt="" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}




