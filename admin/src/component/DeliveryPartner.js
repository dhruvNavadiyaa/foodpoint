import React, { useEffect, useState } from 'react'
import '../css/Util.css'
import '../css/DeliveryPartner.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import axios from 'axios'
import { useSelector } from 'react-redux'
import PendingBoys from './PendingBoys'
import ApprovedBoys from './ApprovedBoys'

export default function DeliveryPartner() {

    //SIDEBAR AND MAINCOMPONENT MOVEMENT FUNCTIONS SCREEN WISE
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

    const [buttonState,setbButtonstate] = useState(true)
    const adminName = useSelector(state => state.admin.adminInfo.name)

    useEffect(() => {
        // allDeliveryBoy()
        // setCurrentData(deliveryBoys.pending)
        // console.log(currentData)
    }, [])

    return (
        <>
            <SideBar />
            <div className="container-fluid m-0 p-0" onClick={hide}>

                <div className='container-fluid main mainDissable' onClick={hide}>

                    <div className="row header">
                        <div className='d-flex' >
                            <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
                            <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , {adminName}</p>
                        </div>
                    </div >

                    <div className="row row2 ">
                        <div className="container-fluid m-0 p-0">

                            <div className='container-fluid px-3 py-2 me-5'>

                                <h2 className='pageName py-3 ps-3 d-flex'>
                                    Delivery Partner
                                    <div className='ms-auto me-4'>
                                        <button className={`mx-2 px-3 btn btn-sm ${buttonState?'btn-outline-dark':'btn-dark'}`} onClick={()=>{setbButtonstate(false)}}>Pending</button>
                                        <button className={`mx-2 px-3 btn btn-sm ${!buttonState?'btn-outline-dark':'btn-dark'}`} onClick={()=>{setbButtonstate(true)}}>Approved</button>
                                    </div>
                                </h2>

                                <div className="orders p-3" >

                                   {!buttonState?<PendingBoys/>:<ApprovedBoys/>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
