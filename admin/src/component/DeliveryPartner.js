import React, { useEffect, useState } from 'react'
import '../css/Util.css'
import '../css/DeliveryPartner.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function DeliveryPartner() {

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

    const delivers = {
        "approved": [{ name: "yash", no: 8140974832, email:"xyz@gmail.com" }],
        "pending": [{ name: "jaydeep", no: 8140974832, email:"xyz@gmail.com" }, { name: "deep", no: 8122281222, email:"xyz@gmail.com" }],
        "rejected": [{ name: "jaydeep", no: 8140974832, email:"xyz@gmail.com" }, { name: "deep", no: 8122281222, email:"xyz@gmail.com" }, { name: "dhruv asodariya", no: 8122281222, email:"asodariya@gmail.com" }]
    }

    const [deliveryBoys, setDeliveryBoys] = useState({})
    const [currentData, setCurrentData] = useState(delivers.approved)

    const allDeliveryBoy = async () => {
        const response = await axios.get('http://localhost:5000/api/delivery/allfetch')
        setDeliveryBoys(response.data)
        // console.log(deliveryBoys)
    }
    
    useEffect(() => {
        allDeliveryBoy()
        setCurrentData(delivers.approved)
        // console.log(currentData)
    }, [])

    const [state,setState] = useState(false)
    const changeData = (change) => {
        
        if (change === 'pending') {
            // setCurrentData(deliveryBoys.pending)
            setState(true);
            setCurrentData(delivers.pending)
        }
        else if(change === 'rejected') {
            // setCurrentData(deliveryBoys.rejected)
            setState(true)
            setCurrentData(delivers.rejected)
        }
        else{
            // setCurrentData(deliveryBoys.rejected)
            setState(false)
            setCurrentData(delivers.approved)
        }
    };

    const approveBoy = (no) => {
        console.log(no)
        
    }

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
                                        <button className='buttons mx-2' onClick={() => { changeData('approved') }}>Approved &nbsp;
                                            {/* <span className='bg-dark text-light rounded-5 px-2 fs-6'>{deliveryBoys.approved ? deliveryBoys.approved.length : '0'}</span> */}
                                            <span className='bg-dark text-light rounded-5 px-2 fs-6'>{delivers.approved ? delivers.approved.length : '0'}</span>
                                        </button>
                                        <button className='buttons mx-2' onClick={() => { changeData('pending') }}>Pending &nbsp;
                                            {/* <span className='bg-dark text-light rounded-5 px-2 fs-6'>{deliveryBoys.pending ? deliveryBoys.pending.length : '0'}</span> */}
                                            <span className='bg-dark text-light rounded-5 px-2 fs-6'>{delivers.pending ? delivers.pending.length : '0'}</span>
                                        </button>
                                        <button className='buttons mx-2' onClick={() => { changeData('rejected') }}>Rejected &nbsp;
                                            {/* <span className='bg-dark text-light rounded-5 px-2 fs-6'>{deliveryBoys.rejected ? deliveryBoys.rejected.length : '0'}</span> */}
                                            <span className='bg-dark text-light rounded-5 px-2 fs-6'>{delivers.rejected ? delivers.rejected.length : '0'}</span>
                                        </button>
                                    </div>
                                </h2>

                                <div className="orders mt-4 p-3" >
                                    {currentData.map((item,index) => {
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
                                                    <p className='ms-auto d-inline font-light-thick'>{item.no}</p>
                                                </div>
                                                <div className='d-flex justify-content-evenly mt-3'>
                                                    {state && <i className="bi bi-check-circle bg-light rounded-3 px-2 py-1 box-shadow font-success" onClick={()=>{approveBoy(index)}}></i>}
                                                    <i className="bi bi-x-circle bg-light rounded-3 px-2 py-1 box-shadow font-danger"></i>
                                                    <i className="bi bi-trash3 bg-light rounded-3 px-2 py-1 box-shadow font-dark"></i>
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
