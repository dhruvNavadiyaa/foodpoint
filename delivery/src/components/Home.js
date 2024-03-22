import React, { useState, useEffect } from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()
  useEffect(() => {
  }, []);


  return (
    <>
      <Navbar />

      <div className='row front-img m-0'>

        <div className="col mb-5 r mb-5" style={{ marginTop: '100px' }}>



          <div className=' text-center'>
             <h2 className='text-dark fw-bold mt-4'>Register your Id on "FoodPoint" and get Orders to deliver!</h2>
          </div>


        </div>

      </div>
      <Footer />
    </>
  )
}




