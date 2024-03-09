import React from 'react'
import '../css/Util.css'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="row p-0 m-0 d-flex justify-content-center align-items-center navbar fw-medium"  style={{ height: '70px' }}>
        {/* <div className="col"> */}

          <div className='col-2 d-md-none'>
            <div className="dropdown d-inline">
              <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-list"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </div>
          </div>

          <div className='col-md-2 col-3 mx-auto d-flex justify-content-center'>
            <p className='m-0'>
              <img src="https://www.svgrepo.com/show/251613/food-location.svg" className='img-fluid main-logo me-2' alt="" />
              FoodPoint
            </p>
          </div>

          <div className='col-8  d-md-block d-none'>
            <div className='d-flex justify-content-evenly'>
              <li>Home</li>
              <li>Search</li>
              <li>Order List</li>
              <li>Add Product</li>
              <li>Add Product</li>
              <li>Your Product</li>
              <li>Contact Us</li>
              <li>Profile</li>
            </div>
          </div>

          <div className='col-2  d-flex justify-content-center'>
            <div className="dropdown d-inline">
              <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person px-1 fs-3 text-dark rounded rounded-circle" style={{backgroundColor:'rgb(255, 241, 107)'}}></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </div>
          </div>

        </div>
      {/* </div> */}
    </nav>
  )
}
