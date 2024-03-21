import React, { useState, useEffect } from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'

export default function Home() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/RestroDetails')
  }
  const images  = useSelector(state => state.restaurant.RestaurantInfo.img)

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

        <div className="col mb-5  r mb-5" style={{ marginTop: '100px' }}>

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


        </div>

      </div>
      <Footer />
    </>
  )
}




