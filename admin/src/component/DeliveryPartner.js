import React, { useEffect, useState } from 'react'
import '../css/Util.css'
import '../css/DeliveryPartner.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import axios from 'axios'
import { useSelector } from 'react-redux'

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
    const [deliveryBoys, setDeliveryBoys] = useState({})
    const [currentData, setCurrentData] = useState([])


    const allDeliveryBoy = async () => {
        const response = await axios.get('http://localhost:5000/api/delivery/allfetch')
        setDeliveryBoys(response.data)
        setCurrentData(response.data.approved)
        setbButtonstate(true)
        console.log(response.data)
    }
    const approveDeliveryBoy = async (id) => {
        const data ={
            DeliveryBoy_id : id,
            status : "approved"
        }
        const response = await axios.post('http://localhost:5000/api/delivery/approvel',data)
        // setDeliveryBoys(response.data)
        // console.log(response.data)
        allDeliveryBoy()
    }
    const deleteDeliveryBoy = async (id) => {
        const data ={
            DeliveryBoy_id : id
        }
        const response = await axios.post('http://localhost:5000/api/delivery/delete',data)
        // setDeliveryBoys(response.data)
        // console.log(response.data)
        allDeliveryBoy()
    }

    useEffect(() => {
        allDeliveryBoy()
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
                                        <button className={`mx-2 px-3 btn btn-sm ${buttonState?'btn-outline-dark':'btn-dark'}`} onClick={()=>{setCurrentData(deliveryBoys.pending);setbButtonstate(false)}}>Pending</button>
                                        <button className={`mx-2 px-3 btn btn-sm ${!buttonState?'btn-outline-dark':'btn-dark'}`} onClick={()=>{setCurrentData(deliveryBoys.approved);setbButtonstate(true)}}>Approved</button>
                                    </div>
                                </h2>

                                <div className="orders p-3" >
                                    {/* <p className='mb-5 fs-3 fw-bold text-secondary'>&#8226; Approved Delivery Boys</p> */}

                                    {
                                        currentData.map((item, index) => {
                                            return (
                                                <div className='card-delivery text-start mb-5 box-shadow' key={index}>
                                                    <div className='d-flex'>
                                                        <img src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg" className='img-logo-delivery ms-1' alt="" />
                                                        <small className='ms-auto mt-3 me-4'></small>
                                                    </div>
                                                    <p className='ms-3 fw-bold'>{item.name}</p>
                                                    <div className='d-flex px-3 mt-3' style={{ fontSize: '13px' }}>
                                                        <p className='d-inline fw-semibold'>Email</p>
                                                        <p className='ms-auto d-inline font-light-thick'>{item.email}</p>
                                                    </div>
                                                    <div className='d-flex px-3' style={{ fontSize: '13px' }}>
                                                        <p className='d-inline fw-semibold'>Mobile</p>
                                                        <p className='ms-auto d-inline font-light-thick'>{item.number}</p>
                                                    </div>
                                                    <div className='d-flex justify-content-end mt-3'>
                                                        <button className='btn btn-sm btn-outline-success me-2 bg-light' onClick={()=>approveDeliveryBoy(item._id)}><i className="bi bi-check-circle" ></i></button>
                                                        <button className='btn btn-sm btn-outline-danger me-3 bg-light' onClick={()=>deleteDeliveryBoy(item._id)}><i className="bi bi-trash"></i></button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
