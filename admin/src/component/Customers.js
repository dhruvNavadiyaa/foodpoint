import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/Util.css'
import '../css/Modal.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'

export default function Customer() {

  const adminName = useSelector(state => state.admin.adminInfo.name)

  //SIDEBAR AND MAINCOMPONENT MOVEMENT FUNCTIONS IN SCREEN WISE
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

  const [customers, setCustomers] = useState([])
  const getCustomers = async () => {
    const response = await axios.get('http://localhost:5000/api/user/all')
    // console.log(response.data.User)
    setCustomers(response.data.User)
    // console.log(customers)
  }

  useEffect(() => {
    getCustomers()
  }, [])

  const [showModal, setShowModal] = useState(true)
  const [currentId, setCurrentId] = useState('')

  const deleteUser = async () => {
    const User_id = currentId
    const response = await axios.post('http://localhost:5000/api/user/delete', {User_id})
    // console.log(response.data)
    // console.log(User_id)
    setShowModal(true)
    getCustomers()
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
                <h2 className='pageName py-3 ps-3'>Customers</h2>

                <div className="orders border mt-4 p-3 box-shadow rounded" >

                  <div className="row">
                    <div className="col d-flex">
                      {/* <select name="" id="" className='btn btn-outline-dark'>
                        <option value="">Order</option>
                        <option value="">Rupee</option>
                      </select> */}
                      {/* <input type="text"
                        placeholder='Search for User!'
                        className='btn btn-light d-inline border ms-auto ' /> */}
                    </div>

                  </div>
                  <div className="row">
                    <div className="col">
                      <table className="table table-hover mt-3" >
                        <thead className='table-active'>
                          <tr className='fs-6'>
                            <th scope="col ">NAME</th>
                            <th scope="col">ORDERS</th>
                            <th scope="col">NUMBER</th>
                            <th scope="col">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            customers.map((item) => {
                              return (
                                <tr key={item._id} className=''>
                                  <td className='fw-bold d-flex'>
                                    <div>
                                      <i className="bi bi-person-circle text-logo fs-2 me-2"></i>
                                    </div>
                                    <div>
                                      {item.name} <br />
                                      <small className='font-light-thick'>{item.email}</small>
                                    </div>
                                  </td>
                                  <td>{item.order.length}</td>
                                  <td>{item.number}</td>
                                  <td className='align-items-center'>
                                    <button className='d-inline btn btn-outline-danger btn-sm me-2' onClick={() => { setShowModal(false); setCurrentId(`${item._id}`) }}>Delete</button>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>

                      {/* MODAL */}
                      <div className="modal-overlay" hidden={showModal}>
                        <div className="modal-content bg-light p-4 box-shadow">
                          <div className='text-center'>
                            <img src="https://www.svgrepo.com/show/527338/question-circle.svg" alt="" className='w-25' />
                            <p className='fs-3 fw-bold mt-2'>Are you sure?</p>
                            <p className='font-light-thick'>You want to delete this User?</p>
                          </div>
                          <div className="modal-actions d-flex ms-auto mt-auto">
                            <button className='btn btn-secondary me-2 px-3' onClick={() => setShowModal(true)}>Cancel</button>
                            <button className='btn btn-danger px-3' onClick={deleteUser}>Ok</button>
                          </div>
                        </div>
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
