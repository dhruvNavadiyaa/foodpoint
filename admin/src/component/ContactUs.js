import React, { useEffect, useState } from 'react'
import '../css/Util.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Category() {

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

    const adminName = useSelector(state => state.admin.adminInfo.name)
    const [details, seDetails] = useState([])

    const contactUsDetails = async () => {
        const response = await axios.get('http://localhost:5000/api/contactus/all')
        seDetails(response.data.all)
    }
    useEffect(() => {
        contactUsDetails()
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

                            <div className='container-fluid px-3 py-2 me-5  '>
                                <h2 className='pageName py-3 ps-3'>Contact Us</h2>

                                <div className="orders border mt-4 p-3 box-shadow rounded" >

                                    <div className="row">
                                        <div className="col">
                                            <p className='fs-5 fw-medium '>User Requests</p>
                                            <table className="table table-hover mt-3">
                                                <thead className=''>
                                                    <tr className='fs-6'>
                                                        <th scope="col">NO.</th>
                                                        <th scope="col">NAME</th>
                                                        <th scope="col">EMAIL</th>
                                                        <th scope="col">MESSAGE</th>
                                                        <th scope="col">ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        details.map((item) => {
                                                            if(item.from=="user"){
                                                            return (
                                                                <tr>
                                                                    <td >1</td>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.email}</td>
                                                                    <td>{item.message}</td>
                                                                    <td className='d-flex'>
                                                                        <button className='btn btn-outline-success btn-sm me-2'>Response</button>
                                                                        <button className='btn btn-outline-danger btn-sm'>Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                            }
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="orders border mt-4 p-3 box-shadow rounded" >

                                    <div className="row">
                                        <div className="col">
                                            <p className='fs-5 fw-medium '>Restaurent Requests</p>
                                            <table className="table table-hover mt-3">
                                                <thead>
                                                    <tr className='table-active'>
                                                        <th scope="col">NO.</th>
                                                        <th scope="col">NAME</th>
                                                        <th scope="col">EMAIL</th>
                                                        <th scope="col">MESSAGE</th>
                                                        <th scope="col">ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                        details.map((item) => {
                                                            if(item.from=="restaurant"){
                                                            return (
                                                                <tr>
                                                                    <td >1</td>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.email}</td>
                                                                    <td>{item.message}</td>
                                                                    <td className='d-flex'>
                                                                        <button className='btn btn-outline-success btn-sm me-2'>Response</button>
                                                                        <button className='btn btn-outline-danger btn-sm'>Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                            }
                                                        })
                                                    }
                                                </tbody>
                                            </table>
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
