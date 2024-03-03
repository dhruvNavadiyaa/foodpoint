import React from 'react'
import '../css/Util.css'
import SideBar from './SideBar'

export default function Orders() {

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
  return (
    <>
      <SideBar />
      <div className="container-fluid m-0 p-0" onClick={hide}>

        <div className='container-fluid main mainDissable' onClick={hide}>

          <div className="row header">
            <div className='d-flex' >
              <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
              <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , dhruv</p>
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
                        <thead>
                          <tr className='table-active'>
                            <th scope="col">#</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">Rupees</th>
                            <th scope="col">All</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
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
