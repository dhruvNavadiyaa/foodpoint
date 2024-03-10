import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white " style={{ background: 'linear-gradient(45deg,black,rgb(210, 219, 249),black'}}>
      <div className="container py-4">
        <div className="row text-center mt-3">

          <div className="col-md-4 col-6 mb-3 " >
            <ul className="list-unstyled d-flex align-items-center">
              <img src="https://www.svgrepo.com/show/251613/food-location.svg" alt="" className='w-50'/>
              <p className='fs-1 fw-bold' style={{color:'rgb(253, 117, 85)'}}>Food Point</p>
            </ul>
          </div>

          <div className="col-md-4 col-6 mb-3 ">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-evenly">
              <i class="bi bi-facebook fs-2"></i>
              <i class="bi bi-twitter-x fs-2"></i>
              <i class="bi bi-instagram fs-2"></i>
              <i class="bi bi-threads fs-2"></i>
            </ul>
          </div>

          <div className="col-md-4 col-6 mb-3 ">
            <h5 className="text-uppercase mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li><p className="text-white mb-1">123 Food Street, Flavor Town</p></li>
              <li><p className="text-white mb-1">Email: food.point@gmail.com</p></li>
              <li><p className="text-white mb-0">Phone: (123) 456-7890</p></li>
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
