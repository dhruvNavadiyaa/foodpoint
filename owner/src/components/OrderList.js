import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../css/Util.css'
import Footer from './Footer';
import axios from 'axios'
import { useSelector } from 'react-redux';
import CurrentOrder from './CurrentOrder';
import PastOrders from './PastOrders';

export default function OrderList() {

    const [changeTables, setChangeTables] = useState(true)

    return (
        <>
            <Navbar />
            <div className='row m-0 p-3 ' style={{width:'fit-content'}}>

                <div className="row m-0 p-0" >
                    <div className="col p-0" style={{ marginTop: '80px' }}>
                        <button className={`btn  ${!changeTables ? 'btn-outline-dark' : 'btn-dark'} me-2`} onClick={() => setChangeTables(true)}>Current Orders</button>
                        <button className={`btn ${changeTables ? 'btn-outline-dark' : 'btn-dark'}`} onClick={() => setChangeTables(false)}>Past Orders</button>
                    </div>
                </div>

                {
                    changeTables ? <CurrentOrder /> : <PastOrders />
                }

            </div >
            <Footer/>
        </>
    )
}
