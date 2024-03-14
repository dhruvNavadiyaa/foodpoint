import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/YourProducts.css'
import axios from 'axios'

export default function YourProducts() {

  const getdata = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/product/catagory');
        // if (response.data.login === true) {
        //     // console.log(response.data)
        //     dispatch(setRestroDetails(response.data))
        //     navigate('/Home')
        // }
        // else {
        //     alert("Your Email Id and Password are incorrect!")
        // }
    } catch (error) {
        console.log('Error fetching data:' , error);
    }
}

  return (
    <>
    <Navbar/>
    <div className='row m-0 mb-5'>
      
      <h2 className='mt-5 text-center pt-5'><span className='border-bottom border-5'>LIST OF PRODUCTS</span></h2>

        <div className="row m-0 mt-5 mb-5" >

            <div className="col-3  px-3">

              <div className=' px-4'>
                <p className='fs-5 py-2 ps-3 fw-medium border border-2 border-dark rounded rounded-4'>Categories</p><hr className='border border-2 border-dark'/>

                <p className='py-2 ps-3 fw-medium border rounded rounded-4' style={{backgroundColor:'rgb(226, 232, 240)'}}>Street Food</p>               
              </div>

            </div>

            <div className="col-9 ">
              <div className="row p-0 d-flex justify-content-evenly">

                <div className="col-3 p-0  rounded rounded-5 category-cards">
                  <img src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" className='item-img rounded rounded-5' alt="" />

                  <div className='items-details p-3'>
                    <div className='p-3 border rounded rounded-5 box-shadow' style={{backgroundColor:'white'}}>
                    <small className='font-light-thick'>&#x2022; STREET FOOD</small>
                    <p className='mb-0'>Pani Puri</p>
                    <p className='mb-0'>Ratings</p>
                    <p className='mb-0'>&#8377;100 /price</p>
                    </div>
                  </div>
                </div>
                <div className="col-3 p-0  rounded rounded-5 category-cards">
                  <img src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" className='item-img rounded rounded-5' alt="" />

                  <div className='items-details p-3'>
                    <div className='p-3 border rounded rounded-5 box-shadow' style={{backgroundColor:'white'}}>
                    <small className='font-light-thick'>&#x2022; STREET FOOD</small>
                    <p className='mb-0'>Pani Puri</p>
                    <p className='mb-0'>Ratings</p>
                    <p className='mb-0'>&#8377;100 /price</p>
                    </div>
                  </div>
                </div>
                <div className="col-3 p-0  rounded rounded-5 category-cards">
                  <img src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" className='item-img rounded rounded-5' alt="" />

                  <div className='items-details p-3'>
                    <div className='p-3 border rounded rounded-5 box-shadow' style={{backgroundColor:'white'}}>
                    <small className='font-light-thick'>&#x2022; STREET FOOD</small>
                    <p className='mb-0'>Pani Puri</p>
                    <p className='mb-0'>Ratings</p>
                    <p className='mb-0'>&#8377;100 /price</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
