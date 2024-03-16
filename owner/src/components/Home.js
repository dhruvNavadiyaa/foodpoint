import React, { useState, useEffect } from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/RestroDetails')
  }
  const images = [
    'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  // State to keep track of the current image index
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [active, setActive] = useState(true);
  // // Function to navigate to the next image

  // const nextImage = () => {
  //   setActive(false); // Disable active state to start the exit transition
  //   setTimeout(() => { // Wait for the exit transition
  //     setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  //     setActive(true); // Re-enable active state for the enter transition
  //   }, 1000); // This timeout should match the CSS transition duration
  // };

  // // Function to navigate to the previous image
  // const prevImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // useEffect(() => {
  //   const interval = setInterval(nextImage, 4000); // Adjust timing to account for transitions
  //   return () => clearInterval(interval);
  // }, []);

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

        <div className="col mb-5 border r mb-5" style={{ marginTop: '100px' }}>


          {/* <div>
            <div className='carouselStyle'>
              <button onClick={prevImage} className='arrowStyleL'>
                &lt;
              </button>
              <img src={images[currentImageIndex]} alt="carousel" className='imageStyle w-75 box-shadow' />
              <button onClick={nextImage} className='arrowStyleR'>
                &gt;
              </button>
            </div>
          </div> */}
          <div>
            <div className='carouselStyle'>
              <button onClick={prevImage} className='arrowStyleL'>&lt;</button>
              <img
                src={images[currentImageIndex]}
                alt="carousel"
                className={`imageStyle w-75 rounded rounded-3 box-shadow ${isTransitioning ? 'carousel-image-exit' : ''}`} // Add your transitioning class here
              />
              <button onClick={nextImage} className='arrowStyleR'>&gt;</button>
            </div>
          </div>

          <div className=' text-center'>
            <h2 className='text-dark fw-bold mt-4'>Register your restaurant on "FoodPoint" and get more customers!</h2>
            <button className='btn btn-dark fs-5 mt-4 py-2 fw-bold' onClick={handleClick}>Register Your Restaurant</button>
          </div>


        </div>

      </div>
      <Footer />
    </>
  )
}




