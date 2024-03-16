import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function RestroDetails() {

    const navigation = useNavigate()
    const [changeDetail, setChageDetail] = useState(true)

    return (
        <>
            {/* <Navbar /> */}
            <h2 className='py-3 text-center box-shadow position-fixed top-0 w-100' style={{ backdropFilter: 'blur(5px)' }}>Fill Bank Account Details</h2>
            <div className='row m-0 px-4 my-5' style={{ marginTop: '100px' }}>
                {/* <hr className='my-1 mb-3 text-dark border border-2 border-dark ' /> */}

                <div className="row mt-5">
                    <div className="col-3">

                        <div className=' px-4'>
                            <p className='py-2 ps-3 fw-medium border border-2 border-dark rounded rounded-5' onClick={() => setChageDetail(false)}>Restaurant Information</p><hr className='border border-2 border-dark' />

                            <p className='py-2 ps-3 fw-medium border rounded rounded-5' style={{ backgroundColor: 'rgb(226, 232, 240)' }} onClick={() => setChageDetail(true)}>Restaurant Details</p>
                            <p className='py-2 ps-3 fw-medium border rounded rounded-5' style={{ backgroundColor: 'rgb(226, 232, 240)' }} onClick={() => setChageDetail(false)}>Other Details</p>
                            <p className='py-2 ps-3 fw-medium border rounded rounded-5' style={{ backgroundColor: 'rgb(226, 232, 240)' }} onClick={() => { navigation('/Home') }}>Cancel</p>
                        </div>
                    </div>

                    <div className="col-9 px-4">

                        {/* RESTAURANT DETAILS */}
                        {changeDetail &&
                            <>
                                <div className='row mb-5 py-3 px-5 pb-5 m-0 rounded rounded-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>
                                    <h3 className=''>Restaurant Details</h3>
                                    <div className="mt-2 m-0">
                                        <p className='mb-0'>Restaurant Name</p>
                                        <input type="text" className='py-2 px-2 border rounded'
                                            placeholder='Resturant Name'
                                        />
                                    </div>
                                    <div className="mt-2 m-0">
                                        <p className='mb-0'>Address</p>
                                        <textarea className='w-100 py-1 px-2 border rounded'
                                            placeholder='Enter Address'
                                        />
                                    </div>

                                    <h3 className='mt-3'>More Details</h3>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>Area</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='Resturant Area'
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>Pincode</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='Restaurant Pincode'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>City</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='Enter City'
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>State</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='State Name'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row m-0 mt-2">
                                        <h3 className='mt-3'>Add your Restaurant Photos</h3>
                                        <input type="file" className="w-100 py-1 file-upload" required />
                                    </div>
                                    <div className="col mt-3">

                                        <button className='btn btn-dark px-4 fw-bold ' onClick={() => setChageDetail(false)}>next</button>
                                    </div>
                                </div>

                            </>
                        }

                        {/* RESTAURANT DETAILS */}
                        {!changeDetail &&
                            <>
                                <div className='row mb-5 py-3 px-5 pb-5 m-0 rounded rounded-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>

                                    <h3 className='mt-3'>Bank Details</h3>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>Account Number</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='Bank Account Number'
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>Re-Enter Account Number</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='Re-Enter Account Number'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mt-3">
                                                <p className='mb-0'>Account Type</p>
                                                {/* <input type="text" className='w-100 py-2 px-2 border rounded'
                                                placeholder='Enter City'
                                            /> */}
                                                <select name="" id="" className='w-100 py-2 px-2 border rounded'>
                                                    <option value="">Saving</option>
                                                    <option value="">Current</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mt-3 m-0">
                                                <p className='mb-0'>IFSC Code</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='Bank IFSC Code'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-5 py-3 px-5 pb-5 m-0 rounded rounded-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>

                                    <h3 className='mt-3'>PAN Detail</h3>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>PAN Number</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='PAN card Number'
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>PAN holder name</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='PAN holder name'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col text-center mt-4">
                                        <button className='btn btn-dark mt-3 px-5 fw-bold'>Save</button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
