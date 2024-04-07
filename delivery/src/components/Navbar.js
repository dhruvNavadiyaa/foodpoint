import { Link, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../css/Util.css'
import '../css/Navbar.css'

export default function Navbar() {

  const isApproved = useSelector(state => state.deliver.deliverInfo.deliveryBoyInfo.isApproved)
  const location = useLocation()
  const path = location.pathname
  // const [path,setPath] = (location.pathname)

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
        cComponent.classList.add('bg-navitem');
      });
    }
    else if (path === '/OrderHistory') {
      let cComponents = document.querySelectorAll(".OrderHistory")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem');
      });
    }
    else if (path === '/ContactUs') {
      let cComponents = document.querySelectorAll(".ContactUs")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem');
      });
    }
    else if (path === '/Profile') {
      let cComponents = document.querySelectorAll(".Profile")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem');
      });
    }
    else if (path === '/Information') {
      let cComponents = document.querySelectorAll(".Information")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem');
      });
    }
  }

  useEffect(() => {
    changeBgColor()
    // console.log(isApproved) 
    console.log(path)
  }, [path])

  return (
    <nav>
      <div className="row p-0 m-0 d-flex justify-content-center align-items-center navbar fw-medium w-100 position-fixed box-shadow" style={{ height: '70px' }}>
        {/* <div className="col"> */}

        <div className='col-2 d-md-none'>
          <div className="dropdown d-inline">
            <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-list"></i>
            </button>
            <ul className="dropdown-menu">
            <Link to='/Home' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 Home' id='Home' onClick={() => changeBgColor("Home")}>Home</li>
            </Link>
            {(isApproved !== 'pending') && <>
              <Link to='/OrderList' className='text-dark text-decoration-none'>
                <li className='p-2 rounded rounded-3 mx-3 OrderList' id='OrderList' onClick={() => changeBgColor("OrderList")}>Order List</li>
              </Link>
              <Link to='/OrderHistory' className='text-dark text-decoration-none'>
                <li className='p-2 rounded rounded-3 mx-3 OrderHistory' id='OrderHistory' onClick={() => changeBgColor("OrderHistory")}>Order History</li>
              </Link>
            </>}
            {isApproved==='pending' && <Link to='/Information' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 Information' id='Information' onClick={changeBgColor}>Information</li>
            </Link>}
            <Link to='/ContactUs' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 ContactUs' id='ContactUs' onClick={changeBgColor}>Contact Us</li>
            </Link>
            <Link to='/Profile' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 Profile' id='Profile' onClick={changeBgColor}>Profile</li>
            </Link>
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
          <div className='d-flex justify-content-center'>
            <Link to='/Home' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 Home' id='Home' onClick={() => changeBgColor()}>Home</li>
            </Link>
            {(isApproved !== 'pending') && <>
              <Link to='/OrderList' className='text-dark text-decoration-none'>
                <li className='p-2 rounded rounded-3 mx-3 OrderList' id='OrderList' onClick={() => changeBgColor()}>Order List</li>
              </Link>
              <Link to='/OrderHistory' className='text-dark text-decoration-none'>
                <li className='p-2 rounded rounded-3 mx-3 OrderHistory' id='OrderHistory' onClick={() => changeBgColor()}>Order History</li>
              </Link>
            </>}
            {isApproved==='pending' && <Link to='/Information' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 Information' id='Information' onClick={changeBgColor}>Information</li>
            </Link>}
            <Link to='/ContactUs' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 ContactUs' id='ContactUs' onClick={changeBgColor}>Contact Us</li>
            </Link>
            <Link to='/Profile' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 Profile' id='Profile' onClick={changeBgColor}>Profile</li>
            </Link>
          </div>
        </div>

        <div className='col-2  d-flex justify-content-center'>
          {/* <div className="dropdown d-inline"> */}
            {/* <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
              <Link to='/Profile'><i className="bi bi-person px-1 fs-3 text-dark rounded rounded-circle" style={{ backgroundColor: 'rgb(255, 241, 107)' }}></i></Link>
            {/* </button> */}
            {/* <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul> */}
          {/* </div> */}
        </div>

      </div>
      {/* </div> */}
    </nav>
  )
}
