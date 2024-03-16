import { Link, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import '../css/Util.css'
import '../css/Navbar.css'

export default function Navbar() {

  const location = useLocation()
  const path = location.pathname
  const changeBgColor = () => {
    // console.log(path)
    if (path === '/Home') {
      let cComponent = document.querySelector("#Home")
      cComponent.classList.add('bg-navitem')
    }
    else if (path === '/OrderList') {
      let cComponent = document.querySelector("#OrderList")
      cComponent.classList.add('bg-navitem')
    }
    else if (path === '/ContactUs') {
      let cComponent = document.querySelector("#ContactUs")
      cComponent.classList.add('bg-navitem')
    }
    else if (path === '/Profile') {
      let cComponent = document.querySelector("#Profile")
      cComponent.classList.add('bg-navitem')
    }
  }

  useEffect(() => {
    changeBgColor()
  }, [path])

  return (
    <nav>
      <div className="row p-0 m-0 d-flex align-items-center navbar fw-medium w-100 position-fixed box-shadow" style={{ height: '70px' }}>
        {/* <div className="col"> */}

        {/* <div className='col-2 d-md-none'>
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
        </div> */}

        {/* <div className='col-md-2 col-2 border d-flex justify-content-center'>
        </div> */}

        <div className='col d-flex align-items-center'>
          <div className='me-auto'>
            <p className='m-0 mx-3'>
              <img src="https://www.svgrepo.com/show/251521/food-pin.svg" className='img-fluid main-logo me-2' alt="" />
              <span className='border-bottom border-2 border-secondary'>FoodPoint</span>
            </p>
          </div>
          <div className='d-flex '>
            <Link to='/Home' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3' id='Home' onClick={() => changeBgColor("Home")}>Search</li>
            </Link>
            <Link to='/OrderList' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3' id='OrderList' onClick={() => changeBgColor("OrderList")}>Offers</li>
            </Link>
            <Link to='/OrderList' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3' id='OrderList' onClick={() => changeBgColor("OrderList")}>Help</li>
            </Link>
            <Link to='/ContactUs' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3' id='ContactUs' onClick={changeBgColor}>Sign In</li>
            </Link>
            <Link to='/Profile' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3 mx-3' id='Profile' onClick={changeBgColor}>Cart</li>
            </Link>
          </div>
        </div>

      </div>
      {/* </div> */}
    </nav>
  )
}
