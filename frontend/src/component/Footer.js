import React from 'react'

export default function Footer() {
    return (
        <div style={{backgroundColor:" rgba(255, 166, 0, 0.100)"}}>
            <div className="">
                <div className="container">

                    <div className="row align-content-center" style={{ height: "300px" }}>
                        <div className="col-4">
                            <h5 className="mb-3">Contact Us</h5>
                            <small>Lorem ipsum dolor sit amet consectetur </small>
                            <div className="mt-4">
                                <i className="bi bi-geo-alt-fill"> </i>
                                <small>41°24'12.2"N 2°10'26.5"E</small>
                            </div>
                            <div>
                                <i className="bi bi-telephone-fill"> </i>
                                <small>+91 810 999 888</small>
                            </div>
                            <div>
                                <i className="bi bi-envelope"> </i>
                                <small>foodpoint01@gmail.com</small>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <h5 className="mb-3">Usefull Links</h5>
                            <small>Lorem ipsum dolor</small><br />
                            <small>Lorem ipsum dolor</small><br />
                        </div>
                        <div className="col-4 d-flex align-items-center">
                           <img src="https://www.svgrepo.com/show/251521/food-pin.svg" className='img-fluid w-50' alt="" />
                           <p className='fw-bold fs-3'>Food Point</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <strong>Follow Us</strong>
                            <div className='mt-1 mb-5'>
                                <i className="bi bi-instagram mx-1 fs-4"></i>
                                <i className="bi bi-facebook mx-1 fs-4"></i>
                                <i className="bi bi-twitter mx-1 fs-4"></i>
                                <i className="bi bi-linkedin mx-1 fs-4"></i>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    {/* <hr /> */}
                    <div className="row"></div>
                </div>
            </div>
        </div>
    )
}
