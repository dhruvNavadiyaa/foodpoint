import React, { useState, useEffect } from 'react'
import '../css/Util.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Request() {


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
    const [modalState, setModalState] = useState({
        isVisible: false,
        type: null, // Could be 'approve' or 'reject'
        data: null, // Data you want to pass to the modal
    });
    const [restroDetails, setRestroDetails] = useState([])

    const getAllRestro = async () => {
        const response = await axios.get('http://localhost:5000/api/Restaurant/fetchall')
        // console.log(response.data.Restaurant)
        setRestroDetails(response.data.Restaurant)
    }

    const isApproved = async (id) => {
        const response = await axios.post('http://localhost:5000/api/Restaurant/approve', { Restaurant_id: id })
        console.log(response.data)
        getAllRestro()
    }

    const deleteRestaurant = async (id) => {
        const response = await axios.post('http://localhost:5000/api/Restaurant/delete', { Restaurant_id: id })
        console.log(response.data)
        getAllRestro()
    }

    useEffect(() => {
        getAllRestro()
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
                                <h2 className='pageName py-3 ps-3'>Restaurant Requests</h2>

                                <div className="orders border mt-4 p-3 box-shadow rounded" >

                                    <div className="row">
                                        <div className="col">
                                            <table className="table table-hover mt-3">
                                                <thead>
                                                    <tr className=''>
                                                        <th scope="col">NO.</th>
                                                        <th scope="col">NAME</th>
                                                        <th scope="col">NUMBER</th>
                                                        <th scope="col">STATUS</th>
                                                        <th scope="col">ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        restroDetails.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td >{index + 1}</td>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.number}</td>
                                                                    <td>
                                                                        <small className={`${item.isApproved === 'Pending' ? 'bg-warning' :
                                                                            item.isApproved === 'Approved' ? 'bg-success' :
                                                                                item.isApproved === 'Reject' ? 'bg-danger' : ''
                                                                            } text-light p-1 px-2 rounded rounded-4`}>
                                                                            {item.isApproved}
                                                                        </small>
                                                                    </td>
                                                                    <td>
                                                                        <div className='d-flex'>
                                                                            <button className='btn btn-sm btn-outline-success me-1' onClick={() => setModalState({ isVisible: true, type: 'approve', data: item._id })}>Approve</button>
                                                                            <button className='btn btn-sm btn-outline-danger' onClick={() => setModalState({ isVisible: true, type: 'reject', data: item._id })}>Reject</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
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
                {/* MODAL */}
                <div className="modal-overlay" hidden={!modalState.isVisible}>
                    <div className="modal-content bg-light p-4 box-shadow">
                        <div className='text-center'>
                            <img src="https://www.svgrepo.com/show/527338/question-circle.svg" alt="" className='w-25' />
                            <p className='fs-3 fw-bold mt-2'>Are you sure?</p>
                            <p className='font-light-thick'>You want to {modalState.type} this Restaurant?</p>
                        </div>
                        <div className="modal-actions d-flex ms-auto mt-auto">
                            <button className='btn btn-secondary me-2 px-3' onClick={() => setModalState({ isVisible: false, type: null, data: null })}>Cancel</button>
                            <button className='btn btn-danger px-3'
                                onClick={() => {
                                    if (modalState.type == 'approve') {
                                        isApproved(modalState.data);
                                    } else if (modalState.type == 'reject') {
                                        deleteRestaurant(modalState.data);
                                    };
                                    setModalState({ isVisible: false, type: null, data: null })
                                }}>Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
