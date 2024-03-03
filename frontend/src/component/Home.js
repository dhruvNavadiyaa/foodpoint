import React from 'react';
import Footer from './Footer';
import '../css/Home.css'; // Make sure to create and import the CSS file
const Home = () => {
  return (
    <div className="home-page container-fluid">
      <nav className=''>
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Search</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>

      <div className='header'>
        <header className='heading justify-content-center'>
          <h1 className=''>Food point</h1>
          <h2>Discover the best Food & Driks</h2>
        </header>
      </div>

      {/* RESTAURENT */}
      <div className='restaurent mt-5' >
        <h2 className='orenge'>RESTAURANT</h2>
        <div className="container cards">
          <div className='restaurents'>
            <div className="row">

              <div className="col col-md-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col col-md-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col-md-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col-md-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col-md-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col-md-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col-md-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              {/* <div className="col col-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col col-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col col-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div>
              <div className="col col-3 card px-4 py-2">
                <div className='card-content d-flex align-items-end justify-content-center'>
                  <h3 className='name mb-3'>Dominoz</h3>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
