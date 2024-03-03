import React, { useState } from 'react'
import axios from 'axios'
import '../css/Util.css'
import SideBar from './SideBar'

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

    const [category, setCategory] = useState([])

    const allCategory = async () => {
        const response = await axios.get('http://localhost:5000/api/category/featch')
        setCategory(response.data)
        console.log(category)
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

                            <div className='container-fluid px-3 py-2 me-5  '>
                                <h2 className='pageName py-3 ps-3 d-flex'>Category
                                    <div className='ms-auto me-4'>
                                        <div className="col d-inline ">
                                            <select name="" id="" className='btn btn-outline-dark me-2'>
                                                <option value="" disabled selected>Restaurants</option>
                                                <option value="">restro 1</option>
                                                <option value="">restro 2</option>
                                                <option value="">restro 3</option>
                                            </select>
                                            <button className='btn btn-outline-dark'>Submit</button>
                                        </div>
                                    </div>
                                </h2>

                                <div className="orders border mt-4 p-3 box-shadow rounded" >

                                    <div className="row">

                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <table className="table table-hover mt-3">
                                                <thead>
                                                    <tr className='table-active'>
                                                        <th scope="col">NO.</th>
                                                        <th scope="col">CATEGORY NAME</th>
                                                        <th scope="col">STATUS</th>
                                                        <th scope="col">DESCRIPTION</th>
                                                        <th scope="col">ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td >1</td>
                                                        <td>Mark</td>
                                                        <td>Active</td>
                                                        <td>@mdo</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td >2</td>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                        <td>@fat</td>
                                                    </tr>
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
