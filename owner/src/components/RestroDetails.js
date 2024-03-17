import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setRestroDetails } from '../redux/features/RestaurantSlice'

export default function RestroDetails() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [resturant, setResturant] = useState("")
    const [address, setAddress] = useState("")
    const [area, setArea] = useState("")
    const [street, setStreet] = useState("")
    const [img, setImg] = useState("")
    const [acNo, setAcNo] = useState("")
    const [acType, setAcType] = useState("")
    const [ifsc, setIfsc] = useState("")
    const [panName, setPanName] = useState("")
    const [panNo, setpanNo] = useState("")
    const [open, setOpen] = useState("")
    const [close, setClose] = useState("")
    const resturantInfoId = useSelector(state => state.restaurant.RestaurantInfo._id)
    const navigation = useNavigate()
    const [changeDetail, setChageDetail] = useState(true)
    const submitDetail = async () => {

        const formData = new FormData();

        for (var i = 0; i < img.length; i++) {
            formData.append("restaurant", img[i])
        }

        formData.append('name', resturant);
        formData.append('fulladdress', address);
        formData.append('area', area);
        formData.append('street', street);
        formData.append('restaurant', resturant);
        formData.append('acType', acType);
        formData.append('acNo', acNo);
        formData.append('ifscCode', ifsc);
        formData.append('panName', panName);
        formData.append('panNo', panNo);
        formData.append('openAt', open.toString());
        formData.append('closeAt', close.toString());
        formData.append('Restaurant_id', resturantInfoId);
        const response = await axios.post('http://localhost:5000/api/restaurant/update', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        // console.log(response.data)
        dispatch(setRestroDetails(response.data))
        navigate('/')

    }

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
                            <p className='py-2 ps-3 fw-medium border rounded rounded-5' style={{ backgroundColor: 'rgb(226, 232, 240)' }} onClick={() => { navigation('/') }}>Cancel</p>
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
                                        <input type="text" className='py-2 px-2 border rounded' value={resturant}
                                            placeholder='Resturant Name' minLength="8" onChange={(e) => { setResturant(e.target.value) }}
                                        />
                                    </div>
                                    <div className="mt-2 m-0">
                                        <p className='mb-0'>Address</p>
                                        <textarea className='w-100 py-1 px-2 border rounded' value={address}
                                            placeholder='Enter Address' onChange={(e) => { setAddress(e.target.value) }}
                                        />
                                    </div>

                                    <h3 className='mt-3'>More Details</h3>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>Area</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded' value={area}
                                                    placeholder='Resturant Area' onChange={(e) => { setArea(e.target.value) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>Street</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded' value={street}
                                                    placeholder='Restaurant-Street' onChange={(e) => { setStreet(e.target.value) }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2" >

                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>Open At</p>
                                                <input type="time" className='w-100 py-2 px-2 border rounded' value={open}
                                                    placeholder='Open At Time' onChange={(e) => { setOpen(e.target.value) }}
                                                />
                                            </div>
                                        </div><div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>Close At</p>
                                                <input type="time" className='w-100 py-2 px-2 border rounded' value={close}
                                                    placeholder='Close At Time' onChange={(e) => { setClose(e.target.value) }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <h3 className='mt-5'>Add Restaurant Photos</h3>
                                    <div className="row m-0 mt-2">
                                        <input type="file" onChange={(e) => { setImg(e.target.files) }}
                                            multiple className="w-100 py-1 file-upload" required />
                                    </div> */}
                                    <div className="col mt-4 text-center">

                                        <button className='btn btn-dark px-4 fw-bold ' onClick={() => setChageDetail(false)}
                                            disabled={resturant === '' || address === '' || area === '' || street === '' || open === '' || close === ''}>next</button>
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
                                                    placeholder='Bank Account Number' onChange={(e) => { setAcNo(e.target.value) }} value={acNo}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            {/* <div className="mt-2 m-0">
                                                <p className='mb-0'>Re-Enter Account Number</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='Re-Enter Account Number'
                                                />
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mt-3">
                                                <p className='mb-0'>Account Type</p>
                                                {/* <input type="text" className='w-100 py-2 px-2 border rounded'
                                                placeholder='Enter City'
                                            /> */}
                                                <select name="" id="" className='w-100 py-2 px-2 border rounded'
                                                    value={acType} onChange={(e) => { setAcType(e.target.value) }}>
                                                    <option value="Saving">Saving</option>
                                                    <option value="Current">Current</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mt-3 m-0">
                                                <p className='mb-0'>IFSC Code</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='Bank IFSC Code' onChange={(e) => { setIfsc(e.target.value) }} value={ifsc}
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
                                                    placeholder='PAN card Number' onChange={(e) => { setpanNo(e.target.value) }} value={panNo}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mt-2 m-0">
                                                <p className='mb-0'>PAN holder name</p>
                                                <input type="text" className='w-100 py-2 px-2 border rounded'
                                                    placeholder='PAN holder name' onChange={(e) => { setPanName(e.target.value) }} value={panName}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='mt-5'>Add Restaurant Photos</h3>
                                    <div className="row m-0 mt-2">
                                        <input type="file" onChange={(e) => { setImg(e.target.files) }}
                                            multiple className="w-100 py-1 file-upload" required />
                                    </div>
                                    <div className="col text-center mt-4">
                                        <button className='btn btn-dark mt-3 px-5 fw-bold' onClick={submitDetail}
                                            disabled={acNo === '' || acType === '' || ifsc === '' || panNo === '' || panName === ''}
                                        >Save</button>
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
