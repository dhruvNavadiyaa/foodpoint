import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector} from 'react-redux'

export default function Profile() {
  const RestaurantInfo  = useSelector(state => state.restaurant.RestaurantInfo)

  const [changeDetail, setChageDetail] = useState(true)

useEffect(()=>{
  console.log(RestaurantInfo)
},[])
  return (
    <>
      <Navbar />
      <div className='row m-0 px-4 mb-5'>
        <div className='mt-5  text-center'>
          <img src="https://www.svgrepo.com/show/525577/user-circle.svg" className='w-25 mt-4 p-5 py-0' alt="" />
        </div>
        <hr className='my-1 mb-3 text-dark border border-2 border-dark ' />

        <div className="row mt-3">
          <div className="col-3 ">

            <div className=' px-4'>
              <p className='py-2 ps-3 fw-medium border border-2 border-dark rounded rounded-5' onClick={()=>setChageDetail(true)}>Profile</p>
              <p className='py-2 ps-3 fw-medium border border-2 border-dark rounded rounded-5' onClick={()=>setChageDetail(false)}>Restaurant</p><hr className='border border-2 border-dark' />

              {/* <p className='py-2 ps-3 fw-medium border rounded rounded-5' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>Update Profile</p>
              <p className='py-2 ps-3 fw-medium border rounded rounded-5' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>Change Password</p> */}
              <p className='py-2 ps-3 fw-medium border rounded rounded-5' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>Logout</p>
            </div>
          </div>

          <div className="col-9 ">

            {/* PERSONAL DETAILS */}
            {changeDetail &&
              <>
                <div className="row m-0 py-3 border-bottom border-3 border-warning rounded-top rounded-top-4 " style={{ backgroundColor: 'rgb(173, 179, 187)' }}>
                  <h3>Restaurant   Profile</h3>
                </div>

                <div className='row py-1  m-0 rounded-bottom rounded-bottom-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>
                  <div className="row mt-2 m-0">
                    <div className="col-2 "><p className='fs-5  m-0 py-2'>Name</p></div>
                    <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >{RestaurantInfo.name}</p></div>
                  </div>
                  <div className="row  m-0 mt-3">
                    <div className="col-2 "><p className='fs-5  m-0 py-2'>Mobile No.</p></div>
                    <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >{RestaurantInfo.number}</p></div>
                  </div>
                  <div className="row  m-0 mt-3">
                    <div className="col-2 "><p className='fs-5  m-0 py-2'>Email</p></div>
                    <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >{RestaurantInfo.email}</p></div>
                  </div>
                </div>

                <div className="row">

                  {/* BANK DETAILS */}
                  {/* <div className="col-6 mt-3">
                    <div className="row m-0 py-3 border-bottom border-3 border-warning rounded-top rounded-top-4 " style={{ backgroundColor: 'rgb(173, 179, 187)' }}>
                      <h3>Bank details</h3>
                    </div>

                    <div className='row py-1 m-0 rounded-bottom rounded-bottom-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>
                      <div className="row mt-2 m-0">
                        <div className="col-3 "><p className='fs-5  m-0 py-1'>Ac. No.</p></div>
                        <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >3247457383757</p></div>
                      </div>
                      <div className="row  m-0 mt-3">
                        <div className="col-3 "><p className='fs-5  m-0 py-1'>IFSC Code</p></div>
                        <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >SBIN0032K</p></div>
                      </div>
                      <div className="row  m-0 mt-3">
                        <div className="col-3 "><p className='fs-5  m-0 py-1'>Ac. type</p></div>
                        <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >Current</p></div>
                      </div>
                    </div>
                  </div> */}

                  {/* PAN CARD DETAILS */}
                  {/* <div className="col-6 mt-3">
                    <div className="row m-0 py-3 border-bottom border-3 border-warning rounded-top rounded-top-4 " style={{ backgroundColor: 'rgb(173, 179, 187)' }}>
                      <h3>Pan Card details</h3>
                    </div>

                    <div className='row py-1  m-0 rounded-bottom rounded-bottom-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>
                      <div className="row mt-2 m-0">
                        <div className="col-3 "><p className='fs-5  m-0 py-1'>Name</p></div>
                        <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >dhruv</p></div>
                      </div>
                      <div className="row m-0 mt-3">
                        <div className="col-3 "><p className='fs-5  m-0 py-1'>Pan No.</p></div>
                        <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >LAREF2343K</p></div>
                      </div>
                      <div className="row  m-0 mt-3">
                        <div className="col-3 "><p className='fs-5  m-0 py-1'>Pan Status</p></div>
                        <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >ACTIVE</p></div>
                      </div>
                    </div>
                  </div> */}

                </div>
              </>
            }

            {/* RESTAURANT DETAILS */}
            { !changeDetail &&
              <>
              <div className="row m-0 py-3 border-bottom border-3 border-warning rounded-top rounded-top-4 " style={{ backgroundColor: 'rgb(173, 179, 187)' }}>
                <h3>Restaurant Details</h3>
              </div>

              <div className='row py-1  m-0 rounded-bottom rounded-bottom-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>
                <div className="row mt-2 m-0">
                  <div className="col-2 "><p className='fs-5  m-0 py-2'>Restaurant Name</p></div>
                  <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >{RestaurantInfo.name}</p></div>
                </div>
                <div className="row  m-0 mt-3">
                  <div className="col-2 "><p className='fs-5  m-0 py-2'>Address</p></div>
                  <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >{RestaurantInfo.address.street} , {RestaurantInfo.address.area}</p></div>
                </div>
                <div className="row  m-0 mt-3">
                  <div className="col-2 "><p className='fs-5  m-0 py-2'>Working Time</p></div>
                  <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >{RestaurantInfo.timing.openAt} to {RestaurantInfo.timing.closeAt}</p></div>
                </div>
              </div>

              {/* <div className="row mt-3 m-0 py-3 border-bottom border-3 border-warning rounded-top rounded-top-4 " style={{ backgroundColor: 'rgb(173, 179, 187)' }}>
                <h3>Other Details</h3>
              </div>

              <div className='row py-1  m-0 rounded-bottom rounded-bottom-4' style={{ backgroundColor: 'rgb(226, 232, 240)' }}>
                <div className="row mt-2 m-0">
                  <div className="col-2 "><p className='fs-5  m-0 py-2'>Restaurant Type</p></div>
                  <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >-</p></div>
                </div>
                <div className="row  m-0 mt-3">
                  <div className="col-2 "><p className='fs-5  m-0 py-2'>Total Listed Products</p></div>
                  <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >1</p></div>
                </div>
                <div className="row  m-0 mt-3">
                  <div className="col-2 "><p className='fs-5  m-0 py-2'>Total Received order</p></div>
                  <div className="col-7  rounded rounded-2 fw-bold text-secondary" style={{ backgroundColor: 'rgb(231, 236, 242)' }}><p className=' m-0 py-2' >0</p></div>
                </div>
              </div> */}
            </>}
          </div>

        </div>
      </div >
      <Footer />
    </>
  )
}
