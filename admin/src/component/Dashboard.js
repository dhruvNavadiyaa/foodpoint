import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../css/MainContent.css'
import '../css/Dashboard.css'
import '../css/Util.css'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

    // const adminName = useSelector(state => state.admin.adminInfo.name)
    const navigate = useNavigate()
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
    
    const [details,setDetails] = useState({})

    const dashboardDetails = async()=> {
        const response = await axios.get('http://localhost:5000/api/admin/dashboard')
        setDetails(response.data)
        // console.log(response.data)
    }
    const adminName = useSelector(state => state.admin.adminInfo.name);
    // const checkAdmin = async()=>{
    //     if(!adminName){
    //         navigate('/login')
    //     }
    //     else{
    //         dashboardDetails()
    //     }
    // }
    useEffect(() => {
        dashboardDetails()
    },[]) 

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
                        <div className="container-fluid mt-5 m-0 p-0 ">

                            <div className='container-fluid mt-4 px-3 py-3 m-auto cards'>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/521200/people.svg" className='img-logo mt-4 ms-3' alt="" />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ExistsUser}</p>
                                    <p className='ms-4 font-light-thick'>Customers</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/413888/eat.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(254, 201, 15)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ExistsResturant}</p>
                                    <p className='ms-4 font-light-thick'>Restaurants</p>
                                </div>
                                
                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/156232/restaurant-table-and-chairs.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(59 130 246 / 0.5)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ExistsResturant}</p>
                                    <p className='ms-4 font-light-thick'>Active Restaurants</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/156232/restaurant-table-and-chairs.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(252, 228, 236)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.InActiveResturant}</p>
                                    <p className='ms-4 font-light-thick'>Inctive Restaurants</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/529189/scooter.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(232, 234, 246)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ExistsDeliveryBoy}</p>
                                    <p className='ms-4 font-light-thick'>Delevery partner</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/521010/truck-speed.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(252, 228, 236)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ActiveDeliveryBoy}</p>
                                    <p className='ms-4 font-light-thick'>Active Delevery partner</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/490442/truck-ban.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(222 220 221)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.InActiveDeliveryBoy}</p>
                                    <p className='ms-4 font-light-thick'>Inctive Delevery partner</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/497852/category.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(237, 235, 255)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ExistsCategory}</p>
                                    <p className='ms-4 font-light-thick'>Categories</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/451289/select-category.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(255, 252, 224)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ActiveCategory}</p>
                                    <p className='ms-4 font-light-thick'>Active Categories</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/496037/category-2.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(235, 250, 242)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.InActiveCategory}</p>
                                    <p className='ms-4 font-light-thick'>Inctive Categories</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/422038/product.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(234, 242, 254)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ExistsProduct}</p>
                                    <p className='ms-4 font-light-thick'>Total Products</p>
                                </div>

                                <div className='card text-start'>
                                    <img src="https://www.svgrepo.com/show/433697/product-so.svg" className='img-logo mt-4 ms-3' alt="" style={{ backgroundColor: 'rgb(222 220 221)' }} />
                                    <p className='mt-3 ms-4 fw-bold'>{details.ActiveProduct}</p>
                                    <p className='ms-4 font-light-thick'>Deactive Products</p>
                                </div>
                                
                            </div>

                            <div className='customers w-50 border ms-4 p-4 mt-4 mb-5 rounded box-shadow'>
                                <div className="row">
                                    <h4>Latest Customers</h4>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-person logo" ></i>
                                    </div>
                                    <div className="col-10">
                                        <p>xebec</p>
                                        <p>xebecd99@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-person logo" ></i>
                                    </div>
                                    <div className="col-10">
                                        <p>dhruv</p>
                                        <p>dhruv09@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-person logo" ></i>
                                    </div>
                                    <div className="col-10">
                                        <p>dhruv</p>
                                        <p>dhruv09@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-person logo" ></i>
                                    </div>
                                    <div className="col-10">
                                        <p>dhruv</p>
                                        <p>dhruv09@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-person logo" ></i>
                                    </div>
                                    <div className="col-10">
                                        <p>dhruv</p>
                                        <p>dhruv09@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div > */}
        </>
    )
}
