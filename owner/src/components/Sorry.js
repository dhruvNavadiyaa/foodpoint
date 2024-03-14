import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function AddProduct() {
    return (
        <>
            <Navbar />
            <div className='' style={{ height:'100vh',background: 'linear-gradient(45deg, rgb(253, 244, 181),rgb(206, 219, 252),rgb(251, 214, 212)' }}>

                <div className="row m-0">
                    <div className="col" style={{marginTop:'30vh'}}>
                        <h1 className='text-center text-secondary fw-bold px-5'>It seems like your restaurent is not verified from manager!</h1>
                    </div>
                </div>
                
            </div >
            {/* <Footer /> */}
        </>
    )
}
