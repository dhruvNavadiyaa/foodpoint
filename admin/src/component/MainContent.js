import { useEffect, useState, useContext } from 'react'
import '../css/MainContent.css'

const MainContent = () => {

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
    const [currentComponent, setCurrentComponent] = useState('Dashboard')
    return (
        <>

            <div className="container-fluid m-0 p-0" onClick={hide}>

                <div className='container-fluid main mainDissable' onClick={hide}>

                    <div className="row header">
                        <div className='d-flex' >
                            <i className="bi bi-list rounded-circle slide box-shadow" onClick={hideS}></i>
                            <p className='fs-5 d-inline w-auto ms-auto me-2 font-light-thick me-3'>Hi! , dhruv</p>
                        </div>
                    </div >

                    <div className="row row2  ">
                            <h2 className='text-center font-light-thick mt-5'>Welcom to Admin panel</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainContent