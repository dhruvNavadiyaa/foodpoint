import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../css/Util.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'

export default function Orders() {

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
  const [orderId,setOrderId] = useState('642fc2cb9486d312d9e1f5ae')
  const navigate = useNavigate();
  const passdata=()=>{
    navigate('/Orderdetails',{state:orderId})
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
                <h2 className='pageName py-3 ps-3'>Orders</h2>

                <div className="orders border mt-4 p-3 box-shadow">
                  <div className="row">
                    <div className="col">
                      <select name="" id="" className='btn btn-outline-dark'>
                        <option value="">Order</option>
                        <option value="">Rupee</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <table className="table table-hover mt-3">
                        <thead className='rounded'>
                          <tr className='table-active fs-6'>
                            <th scope='col'>USER</th>
                            <th scope="col ">ORDER ID</th>
                            <th scope="col ">RUPEES</th>
                            <th scope="col ">ORDER STATUS</th>
                            <th scope="col ">ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"><i className="bi bi-person-circle text-logo fs-2 me-2"></i></th>
                            <td>642fc2cb9486d312d9e1f5ae</td>
                            <td>450</td>
                            <td>@mdo</td>
                            <td onClick={()=>passdata()}><button className='btn btn-outline-dark btn-sm px-3'>view</button></td>
                          </tr>
                        </tbody>
                      </table>
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
