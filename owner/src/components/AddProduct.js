import React, { useState } from 'react'
import Navbar from './Navbar'
import '../css/AddProject.css'
import Footer from './Footer'

export default function AddProduct() {
    const [img, setImg] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(img)
    }
    return (
        <>
            <div className='' style={{ background: 'linear-gradient(45deg, rgb(253, 244, 181),rgb(206, 219, 252),rgb(251, 214, 212)' }}>

                <Navbar />
                <div className='row  p-5 py-3 m-0' >

                    <form action="">
                        <div className="col px-5 py-4 mb-5   rounded rounded-5 box-shadow" style={{ backgroundColor: 'rgb(226, 232, 240)', marginTop: '100px' }}>
                            <h1 className='fs-4 fw-bold'>&#x2022; Add Product</h1>

                            <div className="row m-0 mt-4">
                                <div className="col ">
                                    <small className='label-text'>PRODUCT NAME</small><br />
                                    <input type="text" className='w-100 mt-1 py-2 px-3 form-input' placeholder='Enter product name' />
                                </div>
                                <div className="col ">
                                    <small className='label-text'>PRICE</small><br />
                                    <input type="text" className='w-100 mt-1 py-2 px-3 form-input' placeholder='0' />
                                </div>
                            </div>

                            <div className="row m-0 mt-2">
                                <div className="col">
                                    <small className='label-text'>DESCRIPTION</small><br />
                                    <textarea name="" id="" cols="" rows="2" className='w-100 mt-1 py-2 px-3 form-input' placeholder='Write product description....'></textarea>
                                    <small className='fw-light'><i>Make it as long as you like</i></small>
                                </div>
                            </div>

                            <div className="row m-0 mt-2" >
                                <div className="col ">
                                    <small className='label-text'>TYPE</small><br />
                                    {/* <input type="text" className='w-100 py-2 mt-1 form-input' /> */}
                                    <select name="" id="" className='w-100 mt-1 py-2 px-3 form-input'>
                                        <option value="">Street food</option>
                                        <option value="">Street food</option>
                                        <option value="">Street food</option>
                                        <option value="">Street food</option>
                                        <option value="">Street food</option>
                                        <option value="">Street food</option>
                                    </select>
                                </div>
                                <div className="col ">
                                    <small className="label-text">ADD IMAGE</small>
                                    <input type="file" value={img} onChange={(e) => e.target.files[0]} className="w-100 py-1 file-upload" />
                                </div>
                            </div>

                            <div className="row mt-5">
                                <button type='submit' onClick={handleSubmit} className='btn btn-dark w-25 m-auto'>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div >
            <Footer />
        </>
    )
}
