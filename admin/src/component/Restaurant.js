import React from 'react'
import '../css/Util.css'
import '../css/Restaurant.css'
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom'

export default function Restaurant() {

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
    const navigation = useNavigate()
    const getoRestautantdetails = ()=>{
        navigation('/Restaurantdetails')
    }
    return (
        <>
            <SideBar />
            <div className="container-fluid m-0 p-0" onClick={hide}>

                <div className='container-fluid main mainDissable' onClick={hide}>

                    <div className="row header">
                        <div className='d-flex' >
                            <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
                            <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , dhruv</p>
                        </div>
                    </div >

                    <div className="row row2 ">
                        <div className="container-fluid m-0 p-0">

                            <div className='container-fluid px-3 py-2 me-5'>
                                <h2 className='pageName py-3 ps-3'>Restaurant</h2>

                                <div className="mt-4 p-3" >

                                    <div className='row mb-5'>

                                        {/* RESTAURENT CARDS */}
                                        <div className='restro rounded box-shadow mb-5' onClick={()=>getoRestautantdetails()}>
                                            <div className='restro-detail bg-light rounded box-shadow p-2'>
                                                <small className='bg-success rounded px-2'>NEW</small>
                                                <div className="overflow-hidden mt-1" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} >
                                                    <p className='fs-6 fw-bold text-uppercase'>Malhar aaaaaaaaaaaaaa</p>
                                                </div>
                                                <small className='text-success text-sm'>2/5 ratings</small> <small className='text-sm'>&#40;based on NO. reviews&#41;</small>
                                            </div>
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
