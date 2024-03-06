import React from 'react'
import '../css/Util.css'
import '../css/Restaurantdetails.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import foodLogo from '../assets/images/foodLogo.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Restaurantdetails() {

    const navigate = useNavigate()
    const adminName = useSelector(state => state.admin.adminInfo.name)
    const hide = () => {
        if (window.innerWidth <= 750) {
            let sidebar, slide, main, title
            sidebar = document.querySelector(".sidebar")
            sidebar.classList.toggle("hide")

            slide = document.querySelector(".slide")
            slide.classList.toggle("moveSlide")

            main = document.querySelector(".main")
            main.classList.toggle("mainMove")
            main.classList.toggle("mainDissable")

            title = document.querySelector(".header")
            title.classList.toggle("headerMove")
        }
    }
    //SIDEBAR AND MAINCOMPONENT MOVEMENT FUNCTIONS
    const hideS = () => {
        let sidebar, slide, main, title
        sidebar = document.querySelector(".sidebar")
        sidebar.classList.toggle("hide")

        slide = document.querySelector(".slide")
        slide.classList.toggle("moveSlide")

        main = document.querySelector(".main")
        main.classList.toggle("mainMove")
        main.classList.toggle("mainDissable")

        title = document.querySelector(".header")
        title.classList.toggle("headerMove")
    }
    return (
        <>
            <SideBar />
            <div className="container-fluid m-0 p-0" onClick={hide}>

                <div className='container-fluid main mainDissable' onClick={hide}>

                    <div className="row header">
                        <div className='d-flex' >
                            <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
                            <i className="bi bi-backspace rounded-circle slide box-shadow" onClick={()=>{navigate('/Restaurant')}}></i>
                            <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , {adminName}</p>
                        </div>
                    </div >

                    <div className="row row2 mt-3 rounded rounded-5"  style={{ background: 'linear-gradient(45deg, rgb(95, 230, 211),rgb(138, 95, 246))' }}>
                        <div className="container-fluid m-0 p-0">

                            <div className='row mb-4  restroheader p-5' >

                                {/* <img src={wallpaper} alt="not found" className='restroPhoto' /> */}
                                <div className='restroName border p-5 rounded rounded-3 box-shadow bg-purple' >
                                    <h1 className='restroTitle fw-bold' >Malhar Dhosa</h1>
                                    <p className='fs-3 fw-bolder'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, ea?</p>
                                </div>

                            </div>

                            <div className="row px-3 mb-5 ps-5">
                                <h2 className='bg-heading py-2 w-25  rounded'>Category</h2>
                                <div className="row mt-5 px-5">

                                    <div className="col-2 p-0">
                                        <div className='border px-2 py-4 mx-3 border box-shadow rounded rounded-3  text-center bg-purple'>
                                            <img src={foodLogo} alt="" className='img-fluid w-50 box-shadow p-2 rounded rounded-4' />
                                            <p className='mt-4'>Street Food</p>
                                        </div>
                                    </div>
                                    <div className="col-2 p-0">
                                        <div className='border px-2 py-4 mx-3 border box-shadow rounded rounded-3  text-center bg-purple'>
                                            <img src={foodLogo} alt="" className='img-fluid w-50 box-shadow p-2 rounded rounded-4' />
                                            <p className='mt-4'>Street Food</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row ps-5 mb-5 rounded rounded-4" >

                            <h2 className='bg-heading py-2 w-25 rounded'>Products</h2>

                                <div className="row mb-4 mt-2 px-5 py-5 d-flex justify-content-center" >

                                    <div className="col-4 p-0">
                                        <div className='border mx-3 pb-3 border box-shadow rounded rounded-3  text-center bg-light'>
                                            <img src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" className='img-fluid w-100 box-shadow rounded rounded-3' />
                                            <div className='px-2'>
                                                <p className='mt-4 fs-4 fw-bold'>Street Food</p>
                                                <p className='mt-1 fs-6 fw-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptates, consequuntur quidem reiciendis in at?</p>
                                            </div>
                                            <div className='row mt-3 fs-5 fw-bold px-3'>
                                                <div className="col">Price</div>
                                                <div className="col">Status</div>
                                            </div>
                                            <div className="row px-3">
                                                <div className="col">400 INR</div>
                                                <div className="col">Status</div>
                                            </div>
                                            <button className='mt-3 btn btn-dark w-50 py-1'>Deative</button>
                                        </div>
                                    </div>
                                    <div className="col-4 p-0">
                                        <div className='border mx-3 pb-3 border box-shadow rounded rounded-3  text-center bg-light'>
                                            <img src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" className='img-fluid w-100 box-shadow rounded rounded-3' />
                                            <div className='px-2'>
                                                <p className='mt-4 fs-4 fw-bold'>Street Food</p>
                                                <p className='mt-1 fs-6 fw-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptates, consequuntur quidem reiciendis in at?</p>
                                            </div>
                                            <div className='row mt-3 fs-5 fw-bold px-3'>
                                                <div className="col">Price</div>
                                                <div className="col">Status</div>
                                            </div>
                                            <div className="row px-3">
                                                <div className="col">400 INR</div>
                                                <div className="col">Status</div>
                                            </div>
                                            <button className='mt-3 btn btn-dark w-50 py-1'>Deative</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
