import { Link, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../css/Util.css'
import '../css/Navbar.css'

export default function Navbar() {

  const isApproved = useSelector(state => state.restaurant.RestaurantInfo.isApproved)
  const location = useLocation()
  const path = location.pathname

  const changeBgColor = () => {
    // console.log(path)
    if (path === '/Home') {
      let cComponents = document.querySelectorAll(".Home")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem');
      });
    }
    else if (path === '/OrderList') {
      let cComponents = document.querySelectorAll(".OrderList")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem'); // Adds 'bg-navitem' class to each element
      });
    }
    else if (path === '/AddProduct') {
      let cComponents = document.querySelectorAll(".AddProduct")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem'); // Adds 'bg-navitem' class to each element
      });
    }
    else if (path === '/YourProducts') {
      let cComponents = document.querySelectorAll(".YourProducts")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem'); // Adds 'bg-navitem' class to each element
      });
    }
    else if (path === '/ContactUs') {
      let cComponents = document.querySelectorAll(".ContactUs")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem'); // Adds 'bg-navitem' class to each element
      });
    }
    else if (path === '/Profile') {
      let cComponents = document.querySelectorAll(".Profile")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem'); // Adds 'bg-navitem' class to each element
      });
    }
    else if (path === '/Information') {
      let cComponents = document.querySelectorAll(".Information")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem'); // Adds 'bg-navitem' class to each element
      });
    }
  }

  useEffect(() => {
    changeBgColor()
    // console.log(path)
  }, [])

  return (
    <nav>
      <div className="row p-0 m-0 d-flex justify-content-center align-items-center navbar fw-medium w-100 position-fixed box-shadow" style={{ height: '70px' }}>
        {/* <div className="col"> */}

        <div className='col-2 d-md-none'>
          <div className="dropdown d-inline">
            <button className="btn btn-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-list"></i>
            </button>
            <ul className="dropdown-menu">

              <Link to='/Home' className='text-dark text-decoration-none'>
                <li className='p-2 rounded rounded-3 Home' id='' onClick={() => changeBgColor}>Home</li>
              </Link>
              {
                !(isApproved === 'Pending') &&
                <>
                  <Link to='/OrderList' className='text-dark text-decoration-none'>
                    <li className='p-2 rounded rounded-3 OrderList' id='' onClick={() => changeBgColor}>Order List</li>
                  </Link>
                  <Link to='/AddProduct' className='text-dark text-decoration-none'>
                    <li className='p-2 rounded rounded-3 AddProduct' id='' onClick={changeBgColor}>Add Product / Category</li>
                  </Link>
                  <Link to='/YourProducts' className='text-dark text-decoration-none'>
                    <li className='p-2 rounded rounded-3 YourProducts' id='' onClick={changeBgColor}>Menu</li>
                  </Link>
                </>
              }
              <Link to='/ContactUs' className='text-dark text-decoration-none'>
                <li className='p-2 rounded rounded-3 ContactUs' id='' onClick={changeBgColor}>Contact Us</li>
              </Link>
              <Link to='/Profile' className='text-dark text-decoration-none'>
                <li className='p-2 rounded rounded-3 Profile' id='' onClick={changeBgColor}>Profile</li>
              </Link>
              {isApproved === 'Pending' && <Link to='/Information' className='text-dark text-decoration-none'>
                <li className='p-2 rounded rounded-3 Information' id='' onClick={changeBgColor}>Information</li>
              </Link>}
            </ul>
          </div>
        </div>

        <div className='col-md-2 col-3 mx-auto d-flex justify-content-center'>
          <img src="https://www.svgrepo.com/show/251613/food-location.svg" className='img-fluid main-logo me-2' alt="" />
          <p className='m-0'>FoodPoint</p>
        </div>

        <div className='col-8  d-md-block d-none'>
          <div className='d-flex justify-content-evenly'>
            <Link to='/Home' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 Home' id='' onClick={() => changeBgColor()}>Home</li>
            </Link>

            {
              !(isApproved === 'Pending') &&
              <>
                <Link to='/OrderList' className='text-dark text-decoration-none'>
                  <li className='p-2 rounded rounded-3 OrderList' id='' onClick={() => changeBgColor}>Order List</li>
                </Link>
                <Link to='/AddProduct' className='text-dark text-decoration-none'>
                  <li className='p-2 rounded rounded-3 AddProduct' id='' onClick={changeBgColor}>Add Product / Category</li>
                </Link>
                <Link to='/YourProducts' className='text-dark text-decoration-none'>
                  <li className='p-2 rounded rounded-3 YourProducts' id='' onClick={changeBgColor}>Menu</li>
                </Link>
              </>
            }

            <Link to='/ContactUs' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 ContactUs' id='' onClick={changeBgColor}>Contact Us</li>
            </Link>
            <Link to='/Profile' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 Profile' id='' onClick={changeBgColor}>Profile</li>
            </Link>
            {isApproved === 'Pending' && <Link to='/Information' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 Information' id='' onClick={changeBgColor}>Information</li>
            </Link>}
          </div>
        </div>

        <div className='col-2  d-flex justify-content-center'>
          <div className="dropdown d-inline">
            <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person px-1 fs-3 text-dark rounded rounded-circle" style={{ backgroundColor: 'rgb(255, 241, 107)' }}></i>
            </button>
            <ul className="dropdown-menu">
              {/* <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li> */}
            </ul>
          </div>
        </div>

      </div>
      {/* </div> */}
    </nav>
  )
}
