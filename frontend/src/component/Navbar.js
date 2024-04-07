import { Link, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import '../css/Util.css'
import '../css/Navbar.css'
import axios from 'axios'

export default function Navbar() {

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
        cComponent.classList.add('bg-navitem');
      });
    }
    else if (path === '/ContactUs') {
      let cComponents = document.querySelectorAll(".ContactUs")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem');
      });
    }
    else if (path === '/Favourite') {
      let cComponents = document.querySelectorAll(".Favourite")
      cComponents.forEach(function(cComponent) {
        cComponent.classList.add('bg-navitem');
      });
    }
    else if (path === '/Search') {
      let cComponents = document.querySelectorAll(".Search")
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
  }
  const logout = async() => {
    const response = await axios.post('http://localhost:5000/api/logout/logout', {},{ withCredentials: true});
    console.log(response.data);
    window.location.reload();
  }

  useEffect(() => {
    changeBgColor()
    // console.log(path)
  }, [path])

  return (
    <nav>
      <div className="row p-0 m-0 d-flex align-items-center navbar fw-medium w-100 position-fixed box-shadow" style={{ height: '70px' }}>

        <div className='col d-flex align-items-center'>
          <div className='me-auto'>
            <p className='m-0 mx-3'>
              <img src="https://www.svgrepo.com/show/251521/food-pin.svg" className='img-fluid main-logo me-2' alt="" />
              <span className='border-bottom border-2 border-secondary'>FoodPoint</span>
            </p>
          </div>
          <div className='d-block d-sm-none'>
            <div className="btn-group dropstart  mb-3">
              <button type="button" className="btn btn-light " data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-list"></i>
              </button>
              <ul className="dropdown-menu">
                <Link to='/Home' className='text-dark text-decoration-none'>
                  <li className='p-2 rounded rounded-3 mx-3 Home' id='Home' onClick={() => changeBgColor()}>Home</li>
                </Link>
                <Link to='/Search' className='text-dark text-decoration-none'>
                  <li className='p-2 rounded rounded-3 mx-3 Search' id='' onClick={() => changeBgColor()}>Search</li>
                </Link>
                <Link to='/OrderList' className='text-dark text-decoration-none'>
                  <li className='p-2 rounded rounded-3 mx-3 OrderList' id='' onClick={changeBgColor}>Order List</li>
                </Link>
                <Link to='/ContactUs' className='text-dark text-decoration-none'>
                  <li className='p-2 rounded rounded-3 mx-3 ContactUs' id='' onClick={() => changeBgColor()}>Help</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className='d-none d-sm-flex'>
            <Link to='/Home' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 Home' id='' onClick={() => changeBgColor()}>Home</li>
            </Link>
            <Link to='/Search' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 Search' id='' onClick={() => changeBgColor()}>Search</li>
            </Link>
            <Link to='/OrderList' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 OrderList' id='' onClick={changeBgColor}>Order List</li>
            </Link>
            <Link to='/ContactUs' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3 ContactUs' id='' onClick={() => changeBgColor()}>Help</li>
            </Link>
              <li className='p-2 rounded rounded-3 mx-3' onClick={logout}>Log Out</li>
          </div>
        </div>

      </div>
      {/* </div> */}
    </nav>
  )
}
