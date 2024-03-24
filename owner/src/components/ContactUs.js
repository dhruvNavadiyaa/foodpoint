import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
export default function ContactUs() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [num, setNum] = useState("")
    const [message, setMessage] = useState("")
    const sendContactUs = async () => {
        const data = {
            name,
            email,
            number: num,
            message,
            from: "restaurant"
        }
        const response = await axios.post('http://localhost:5000/api/contactus/create', data, { withCredentials: true });
        console.log(response.data);
        if (response.data.success === true) {
            setName("")
            setEmail("")
            setNum("")
            setMessage("")
        }
    }
    return (
        <>
            <Navbar />
            <div className='row m-0 '>

                <div className="container-md " style={{ marginTop: '100px', fontFamily: '' }}>

                    <div className="row px-sm-4 py-md-4 m-0">

                        <div className="col-12 col-md-6 mb-5 ">

                            <p className='fw-bold text-primary'>Contact Us</p>
                            <h1 className='fs-4'>GET IN TOUCH WITH US</h1>
                            <p className='mt-4'>customer support team that is available 24/7 to help customers with their queries. Customers can get in touch with the support team through a variety of channels, including phone, email, and chat.</p>

                            <div className="row mt-4 ">
                                <div className="col d-flex align-items-center">
                                    <div className="">
                                        <i className="bi bi-house fs-3 px-4 py-3 text-primary rounded box-shadow " style={{ backgroundColor: 'rgb(245, 248, 252)' }}></i>
                                    </div>
                                    <div className="ms-4 ">
                                        <p className='fs-5 fw-bold mb-0'>Our Location</p>
                                        <p className=' mb-0'>123 Food Street, Flavor Town</p>
                                        <p className=''>Indonesia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col  d-flex align-items-center">
                                    <div className="">
                                        <i className="bi bi-headset fs-3 px-4 py-3 text-primary rounded box-shadow" style={{ backgroundColor: 'rgb(245, 248, 252)' }}></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className='fs-5 fw-bold mb-0'>Phone Number</p>
                                        <p>(123) 456-7890</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="d-flex align-items-center">
                                    <div className="">
                                        <i className="bi bi-envelope fs-3 px-4 py-3 text-primary rounded box-shadow" style={{ backgroundColor: 'rgb(245, 248, 252)' }}></i>
                                    </div>
                                    <div className="ms-4 ">
                                        <p className='fs-5 fw-bold mb-0'>Email Address</p>
                                        <p>food.point@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-6 mb-5">
                            <div className='px-sm-4'>
                                <div className="px-4 px-sm-5 py-5 box-shadow">
                                    <form onSubmit={sendContactUs}>
                                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name ' className='fs-6 w-100 py-2 px-3' />
                                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' className='fs-6 mt-4 w-100 py-2 px-3' />
                                        <input type="Number" required value={num} onChange={(e) => setNum(e.target.value)} placeholder='Your Phone' className='fs-6 mt-4 w-100 py-2 px-3' />
                                        <textarea value={message} required onChange={(e) => setMessage(e.target.value)} id="" rows="5" placeholder='Your Massage' className='fs-6 mt-4 w-100 py-2 px-3'></textarea>
                                        <button type='submit' className='btn btn-primary mt-4 w-100 py-2 rounded rounded-3' disabled={name.trim() === '' || email.trim() === '' || num.trim() === '' || message.trim() === ''}>Send Message</button>
                                    </form>
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
