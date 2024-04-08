import React, { useState, useEffect, createRef, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { setRestroDetails } from "../redux/features/RestaurantSlice";

export default function OtpVerification() {

  const navigate = useNavigate()
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const dispatch = useDispatch();
  const inputRefs = useRef(otp.map(() => createRef()));
  const RestaurantId = useSelector(state => state?.restaurant?.RestaurantInfo?._id)
  console.log(RestaurantId)
  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next field if value is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // If all fields are filled
    if (newOtp.every((digit) => digit)) {
      let a = (newOtp.join(''))
    }
  };

  const handleBackspace = (element, index) => {
    const value = element.value;
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handelClick = async() =>{
    let otpSend = otp.join("");
    otpSend=Number(otpSend)
    // console.log(typeof(otpSend))
    const response = await axios.post('http://localhost:5000/api/Restaurant/otpverify' , {
      RestaurantId ,
      otp:otpSend
    })
    dispatch(setRestroDetails(response.data));
    navigate('/RestroDetails')
    console.log(response.data)
  }
  
  const otpGenerate = async() =>{
    const response = await axios.post('http://localhost:5000/api/Restaurant/otpGenerate' ,{RestaurantId})
  }
  
  useEffect(() => {
    otpGenerate()
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav className=''>
        <div className="row p-0 m-0 d-flex align-items-center navbar fw-medium w-100 position-fixed box-shadow " style={{ height: '70px' }}>

          <div className='col d-flex align-items-center'>
            <div className='me-auto'>
              <p className='m-0 mx-3'>
                <img src="https://www.svgrepo.com/show/251521/food-pin.svg" className='img-fluid main-logo me-2' alt="" />
                <span className='border-bottom border-2 border-secondary'>FoodPoint</span>
              </p>
            </div>
          </div>

        </div>
      </nav>

      {/* OTP FORM */}
      <div className="container-fuild  d-flex justify-content-center align-items-center pt-sm-5" >

        <div className='border p-3 py-4 mb-5 rounded box-shadow' style={{ width: '450px', marginTop: '65px' }}>
          <p className='fs-3 mb-3 fw-bold'>OTP verification</p>
          <p className='text-secondary'>Please enter the OTP &#40;One time password&#41; sent to your register Email Id to complete the verification</p>

          <div className="row m-0 ">
            <div className='col text-center mt-4'>
              {otp.map((item, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(e.target, index)}
                  style={{ width: '40px', marginRight: '5px' }}
                  className='text-center py-2 px-2'
                />
              ))}
            </div>
            <div className='d-flex'>
              <small className='ms-auto mt-3' onClick={otpGenerate}>Didn't get code? <span className='text-primary'>Resend</span></small>
            </div>
          </div>

          {/* <p className='mt-3'>{otp}</p> */}
          <button className='btn btn-primary rounded rounded-3 py-2' 
          onClick={()=>{handelClick()}}
          disabled={inputRefs.current[0].value===''||inputRefs.current[1].value===''||inputRefs.current[2].value===''||inputRefs.current[3].value===''}
          >Verify</button>
          <button className='ms-2 btn btn-outline-secondary rounded rounded-3 py-2'>Cancel</button>
        </div>

      </div>
    </>
  )
}
