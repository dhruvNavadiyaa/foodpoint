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
    else if (path === '/AddProduct') {
      let cComponent = document.querySelector("#AddProduct")
      cComponent.classList.add('bg-navitem')
    }
    else if (path === '/YourProducts') {
      let cComponent = document.querySelector("#YourProducts")
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

  // const changeBgColor = (c) => {
  //   const elements = document.querySelectorAll('.bg-navitem');
  //   elements.forEach(element => {
  //     element.classList.remove('bg-navitem');
  //   });
  //   console.log(c);
  //   const element = document.querySelector(`#${c}`);
  //   if (element) {
  //     element.classList.add('bg-navitem');
  //   } else {
  //     console.error(`Element with ID ${c} not found.`);
  //   }
  // };
  
  useEffect(() => {
    changeBgColor()
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
            <Link to='/Home' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3' id='Home' onClick={() => changeBgColor("Home")}>Home</li>
            </Link>
            {/* <li className='p-2 rounded rounded-3'>Search</li> */}
            <Link to='/OrderList' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3' id='OrderList' onClick={() => changeBgColor("OrderList")}>Order List</li>
            </Link>
            <Link to='/AddProduct' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3' id='AddProduct' onClick={changeBgColor}>Add Product</li>
            </Link>
            <Link to='/YourProducts' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3' id='YourProducts' onClick={changeBgColor}>Your Products</li>
            </Link>
            <Link to='/ContactUs' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3' id='ContactUs' onClick={changeBgColor}>Contact Us</li>
            </Link>
            <Link to='/Profile' className='text-dark text-decoration-none'>
              <li className='p-2 rounded rounded-3' id='Profile' onClick={changeBgColor}>Profile</li>
            </Link>
          </div>
        </div>

        <div className='col-2  d-flex justify-content-center'>
          <div className="dropdown d-inline">
            <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-person px-1 fs-3 text-dark rounded rounded-circle" style={{ backgroundColor: 'rgb(255, 241, 107)' }}></i>
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
