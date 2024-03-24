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
    const [deleteModal, setDeleteModal] = useState({
        isvisible: false,
        id: null,
        data: {}
    })
    const [sendEmailMsg,setSendEmailMsg] = useState("")
    const [responseModal, setResponseModal] = useState({
        isvisible: false,
        id: null
    })
    const [details, seDetails] = useState([])

    const contactUsDetails = async () => {
        const response = await axios.get('http://localhost:5000/api/contactus/all')
        seDetails(response.data.all)
    }

    const deleteMsg = async (id) => {
        const response = await axios.post('http://localhost:5000/api/contactus/delete',{id})
        console.log(response.data)
        contactUsDetails()
    }

    const sendEmail = async (email)=>{
        setSendEmailMsg("")
        const response = await axios.post('http://localhost:5000/api/contactus/email',{email,msg:sendEmailMsg})
        console.log(response.data)
        setSendEmailMsg("")
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
                                                        details.map((item, index) => {
                                                            if (item.from == "user") {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td >{index}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.email}</td>
                                                                        <td>{item.message}</td>
                                                                        <td className=''>
                                                                            <div className='d-flex'>
                                                                                <button className='btn btn-outline-success btn-sm me-2' onClick={() => setResponseModal({ isvisible: true, id: item._id, data: { email: item.email, msg: item.message } })}>Response</button>
                                                                                <button className='btn btn-outline-danger btn-sm' onClick={() => setDeleteModal({ isvisible: true, id: item._id })}>Delete</button>
                                                                            </div>
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
                                                        details.map((item, index) => {
                                                            if (item.from == "restaurant") {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td >{index}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.email}</td>
                                                                        <td>{item.message}</td>
                                                                        <td className=''>
                                                                            <div className='d-flex'>
                                                                                <button className='btn btn-outline-success btn-sm me-2' onClick={() => setResponseModal({ isvisible: true, id: item._id, data: { email: item.email, msg: item.message } })}>Response</button>
                                                                                <button className='btn btn-outline-danger btn-sm' onClick={() => setDeleteModal({ isvisible: true, id: item._id })}>Delete</button>
                                                                            </div>
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
                                            <p className='fs-5 fw-medium '>Delivery Boy Requests</p>
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
                                                        details.map((item, index) => {
                                                            if (item.from == "delivery") {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td >{index + 1}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.email}</td>
                                                                        <td>{item.message}</td>
                                                                        <td className=''>
                                                                            <div className="d-flex">
                                                                                <button className='btn btn-outline-success btn-sm me-2' onClick={() => setResponseModal({ isvisible: true, id: item._id, data: { email: item.email, msg: item.message } })}>Response</button>
                                                                                <button className='btn btn-outline-danger btn-sm' onClick={() => setDeleteModal({ isvisible: true, id: item._id })}>Delete</button>
                                                                            </div>
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
            {/* DELETE MODAL */}
            <div className="modal-overlay" hidden={!deleteModal.isvisible}>
                <div className="modal-content bg-light p-4 box-shadow">
                    <div className='text-center'>
                        <img src="https://www.svgrepo.com/show/527338/question-circle.svg" alt="" className='w-25' />
                        <p className='fs-3 fw-bold mt-2'>Are you sure?</p>
                        <p className='font-light-thick'>You want to delete this Massage?</p>
                    </div>
                    <div className="modal-actions d-flex ms-auto mt-auto">
                        <button className='btn btn-secondary me-2 px-3' onClick={() => setDeleteModal({ isvisible: false, id: null })}>Cancel</button>
                        <button className='btn btn-danger px-3' onClick={()=>{deleteMsg(deleteModal.id);setDeleteModal({ isvisible: false, id: null })}}>Ok</button>
                    </div>
                </div>
            </div>
            {/* RESPONSE MODAL */}
            <div className="modal-overlay" hidden={!responseModal.isvisible}>
                <div className="model-content-edit bg-light px-4 py-3 box-shadow rounded">
                    <p className='fs-5 fw-bold d-flex border-bottom border-2 pb-2 align-items-center'>Respond to Message <button className='ms-auto btn btn-light' onClick={() => setResponseModal({ isvisible: false, id: null, data: null })}><i className="bi bi-x-lg " ></i></button></p>
                    <div className='mt-2'>
                        <p className='mb-0 fw-medium'>Email</p>
                        <input type="text" className='w-100 border py-1 px-3 rounded' placeholder={responseModal?.data?.email} disabled />
                        <p className='mb-0 mt-2 fw-medium'>Message</p>
                        <textarea className='w-100 py-1 px-3 border rounded ' placeholder={responseModal?.data?.msg} disabled></textarea>
                        <p className='mb-0 mt-0 fw-medium'>Your Response</p>
                        <textarea value={sendEmailMsg} onChange={(e)=>setSendEmailMsg(e.target.value)} className='w-100 py-1 px-3 border rounded ' placeholder='Write the product description here!'></textarea>
                    </div>
                    <div className='mt-3 text-center'>
                        <button className='btn btn-dark px-4' onClick={()=>{sendEmail(responseModal?.data?.email);setResponseModal({ isvisible: false, id: null, data: null })}}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}
