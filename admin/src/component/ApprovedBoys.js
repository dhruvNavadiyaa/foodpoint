import React, { useEffect, useState } from 'react'
import '../css/Util.css'
import '../css/DeliveryPartner.css'
import '../css/MainContent.css'
import SideBar from './SideBar'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function ApprovedBoys() {

    const adminName = useSelector(state => state.admin.adminInfo.name)
    const [approvedBoys, setApprovedBoys] = useState([])
    const [deleteModal, setDeleteModal] = useState({
        isvisible: false,
        id: null
    })

    const allDeliveryBoy = async () => {
        const response = await axios.get('http://localhost:5000/api/delivery/allfetch')
        // console.log(response.data.pending)
        setApprovedBoys(response.data.approved)
    }

    const deleteDeliveryBoy = async (id) => {
        const data = {
            DeliveryBoy_id: id
        }
        const response = await axios.post('http://localhost:5000/api/delivery/delete', data)
        // allDeliveryBoy()
    }

    useEffect(() => {
        allDeliveryBoy()
    }, [])

    return (
        <>
            {
                approvedBoys.map((item, index) => {
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
                                {/* <button className='btn btn-sm btn-outline-success me-2 bg-light' onClick={() => approveDeliveryBoy(item._id)}><i className="bi bi-check-circle" ></i></button> */}
                                <button className='btn btn-sm btn-outline-danger me-3 bg-light' onClick={() => setDeleteModal({isvisible: true, id: item._id })}><i className="bi bi-trash"></i></button>
                            </div>
                        </div>
                    )
                })
            }
            <h1>approved</h1>
            {/* DELETE MODAL */}
            <div className="modal-overlay" hidden={!deleteModal.isvisible}>
                <div className="modal-content bg-light p-4 box-shadow">
                    <div className='text-center'>
                        <img src="https://www.svgrepo.com/show/527338/question-circle.svg" alt="" className='w-25' />
                        <p className='fs-3 fw-bold mt-2'>Are you sure?</p>
                        <p className='font-light-thick'>You want to Delete this Delivery Boy ?</p>
                    </div>
                    <div className="modal-actions d-flex ms-auto mt-auto">
                        <button className='btn btn-secondary me-2 px-3' onClick={() => setDeleteModal({ isvisible: false, id: null })}>Cancel</button>
                        <button className='btn btn-danger px-3' onClick={()=>{setDeleteModal({ isvisible: false, id: null })}}>Ok</button>
                    </div>
                </div>
            </div>
        </>
    )
}
