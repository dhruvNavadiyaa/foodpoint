import Navbar from "./Navbar";
import "../css/Util.css";
import Footer from "./Footer";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

export default function OrderHistory() {
  const DeliveryBoy_id = useSelector((state) => state?.deliver?.deliverInfo?.deliveryBoyInfo?._id);
  const navigate = useNavigate()    
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderAccept, setOrderAccept] = useState([]);

  const acceptedOrder = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/order/acceptedForOrder",
      { DeliveryBoy_id }
    );
    setOrderAccept(response.data.orderInfo);
    // console.log(response.data.orderInfo);
  };
  const orderInfo = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/order/acceptedForOrder",
      { DeliveryBoy_id }
    );
    setOrderHistory(response.data.orderInfo);
    // console.log(response.data.orderInfo);
  };
  const doneOrder = async (id) => {
    const response = await axios.post(
        "http://localhost:5000/api/order/updateOrderStatus",
        { Order_id:id , status: "done" }
      );
      orderInfo()
      // console.log(response.data);
  }
  useEffect(() => {
    orderInfo();
    // acceptedOrder();
  }, []);
  return (
    <>
      <Navbar />
      <div className="row m-0 p-3">
        {/* ACCEPTED ORDERS */}
        <div
          className="col-12 p-3 border box-shadow"
          style={{ marginTop: "100px" }}
        >
          <h3 className="fs-5 fw-bold text-secondary">
            &#x2022; Accepted Order Summary
          </h3>
          <table className="table table-hover">
            <thead>
              <tr className="fs-6">
                <th scope="col">ORDER ID</th>
                <th scope="col">CUSTOMER ID</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">TOTAL PRICE</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((item, index) => {
                if(!(item.status === "done") && !(item.status === "cancel") ){
                return (
                  <tr key={index} className="">
                    <td>{item._id}</td>
                    <td>{item.user}</td>
                    <td>{item?.products?.quantity}</td>
                    <td>{item.total}</td>
                    <td>{item.status}</td>
                    <td>
                      <div className="d-flex">
                        <button onClick={()=> doneOrder(item._id)}  className='btn btn-sm btn-outline-success me-1'>Done</button>
                        <button className='btn btn-sm btn-outline-dark' onClick={()=>navigate(`/Orderdetails/${item._id}`)}>View</button>
                      </div>
                    </td    >
                  </tr>
                );
                }
              })}
            </tbody>
          </table>
        </div>

        {/* ORDER HISTORY */}
        <div
          className="col-12 p-3 border box-shadow mt-5"
          style={{ marginBottom: "50vh" }}
        >
          <h3 className="fs-5 fw-bold text-secondary">
            &#x2022; Order History
          </h3>
          <table className="table table-hover">
            <thead>
              <tr className="fs-6">
                <th scope="col">ORDER ID</th>
                <th scope="col">CUSTOMER ID</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">TOTAL PRICE</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((item, index) => {
                if(item.status === "done" || item.status === "cancel" ){
                return (
                  <tr key={index} className="">
                    <td>{item._id}</td>
                    <td>{item.user}</td>
                    <td>{item.products.quantity}</td>
                    <td>{item.total}</td>
                    <td>{item.status}</td>
                  </tr>
                );}
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
