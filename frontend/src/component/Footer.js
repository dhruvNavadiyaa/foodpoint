import React from 'react';

const Footer = () => {
  return (
    <footer className="" style={{ backgroundColor: " rgba(255, 166, 0, 0.100)" }}>
      <div className="container py-4">
        <div className="row text-center mt-3">

          <div className="col-md-4 col-6 mb-3 ">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li><p className="mb-1">123 Food Street, Flavor Town</p></li>
              <li><p className=" mb-1">Email: food.point@gmail.com</p></li>
              <li><p className=" mb-0">Phone: (123) 456-7890</p></li>
            </ul>

            <button className='btn btn-outline-danger w-50'>Log Out</button>

          </div>

          <div className="col-md-4 col-6 mb-3 ">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-evenly">
              <i className="bi bi-facebook fs-2"></i>
              <i className="bi bi-twitter-x fs-2"></i>
              <i className="bi bi-instagram fs-2"></i>
              <i className="bi bi-threads fs-2"></i>
            </ul>
          </div>

          <div className="col-md-4 col-6 mb-3 " >
            <ul className="list-unstyled d-flex align-items-center">
              <img src="https://www.svgrepo.com/show/251613/food-location.svg" alt="" className='w-50' />
              <p className='fs-1 fw-bold' style={{ color: 'rgb(253, 117, 85)' }}>Food Point</p>
            </ul>
          </div>

        </div>

        <div className="text-center border-top pt-3">
          <p className="mb-0">© 2024 Food Delivery, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
