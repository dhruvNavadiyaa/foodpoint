import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/Util.css'
import '../css/Modal.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'

export default function Createadmin() {

  const adminName = useSelector(state => state.admin.adminInfo.name)

  const hide = () => {
    if (window.innerWidth <= 750) {
      let sidebar, slide, main, title
      sidebar = document.querySelector(".sidebar")
      sidebar.classList.toggle("hide")

      slide = document.querySelector(".slide")
      slide.classList.toggle("moveSlide")

      main = document.querySelector(".main")
      main.classList.toggle("mainMove")
      main.classList.toggle("mainDissable")

      title = document.querySelector(".header")
      title.classList.toggle("headerMove")
    }
  }
  //SIDEBAR AND MAINCOMPONENT MOVEMENT FUNCTIONS
  const hideS = () => {
    let sidebar, slide, main, title
    sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("hide")

    slide = document.querySelector(".slide")
    slide.classList.toggle("moveSlide")

    main = document.querySelector(".main")
    main.classList.toggle("mainMove")
    main.classList.toggle("mainDissable")

    title = document.querySelector(".header")
    title.classList.toggle("headerMove")
  }

  const mobileNumberRegex = /^\d{10}$/;
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    emailExist: "",
    number: "",
    password: ""
  });

  const sendData = async () => {

    try {
      const data = {
        name: name,
        number: number,
        email: email,
        password: password
      }
      const response = await axios.post('http://localhost:5000/api/admin/signup', data);
      console.log(response.data)
    } catch (error) {
      console.log('Error fetching data:');
    }
    // console.log(data)
  }

  // VALIDATION OF FORM
  const validateForm = () => {
    let newErrors = {};

    if (!mobileNumberRegex.test(number)) {
      newErrors.number = "Please enter valid Number!";
    }
    if (password.length < 3) {
      newErrors.password = "Password must be More than 3 Characters!";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isvalid = validateForm();
    if (isvalid) {
      setShowModal(true)
    }
    else {
      console.log("form validation failed!")
    }
  }
  const CreateAdmin = () => {
    sendData()
    setName('')
    setNumber('')
    setEmail('')
    setPassword('')
  }


  return (
    <>
      <SideBar />
      <div className="container-fluid m-0 p-0" onClick={hide}>

        <div className='container-fluid main mainDissable' onClick={hide}>

          <div className="row header">
            <div className='d-flex' >
              <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
              <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , {adminName}</p>
            </div>
          </div >

          <div className="row row2 ">
            <div className="container-fluid m-0 p-0">

              <div className='container-fluid px-3 py-2 me-5  '>
                <h2 className='pageName py-3 ps-3'>Create Admin</h2>

                <div className="mt-4 p-3 rounded d-flex justify-content-center" >

                  <div className="row w-75">
                    <div className="col border rounded-4 bg-light box-shadow p-3"  >
                      <form onSubmit={handleSubmit}>
                        <div className="row mt-3">
                          <div className="col-3 ps-4  fs-5 d-flex align-items-center">Name</div>
                          <div className="col-8 border bg-order d-flex align-items-center rounded  bg-order p-0">
                            <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className='addAdminForm w-100 p-2'
                            />
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Mobile No.</div>
                          <div className="col-8 border bg-order d-flex align-items-center rounded p-0">
                            <input
                              type="text"
                              maxLength={10}
                              id="number"
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                              className='addAdminForm w-100 p-2'
                            />
                          </div>
                          <div className='d-flex'>
                            <p className='text-danger ms-auto me-5'>{error.number}</p>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Email</div>
                          <div className="col-8 border bg-order d-flex align-items-center rounded p-0">
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className='addAdminForm w-100 p-2'
                            />
                          </div>
                        </div>
                        <div className="row mt-2 mb-3">
                          <div className="col-3 ps-4  fs-5 d-flex align-items-center overflow-visible">Password</div>
                          <div className="col-8 border bg-order d-flex align-items-center rounded p-0">
                            <input
                              type="password"
                              id="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className='addAdminForm w-100 p-2'
                            />
                          </div>
                          <div className="d-flex">
                            <p className='text-danger ms-auto me-5'>{error.password}</p>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                          <button type="submit" className='w-25 mt-2 py-2 btn btn-outline-success'
                            disabled={name === '' || number === '' || email === '' || password === ''}>
                            Create Admin
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>


                  {/* MODAL */}
                  <div className="modal-overlay" hidden={!showModal}>
                    <div className="modal-content bg-light p-4 box-shadow">
                      <div className='text-center'>
                        <img src="https://www.svgrepo.com/show/527338/question-circle.svg" alt="" className='w-25' />
                        <p className='fs-3 fw-bold mt-2'>Are you sure?</p>
                        <p className='font-light-thick'>You want to add new Admin ?</p>
                      </div>
                      <div className="modal-actions d-flex ms-auto mt-auto">
                        <button className='btn btn-secondary me-2 px-3' onClick={() => {setShowModal(false);setName('');setNumber('');setEmail('');setPassword('')}}>Cancel</button>
                        <button className='btn btn-danger px-3' onClick={CreateAdmin}>Ok</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
