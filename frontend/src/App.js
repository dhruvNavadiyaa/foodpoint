import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { setUserDetails } from "./redux/features/userSlice";
import axios from "axios";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import React from "react";
import Restaurant from "./component/Restaurant";
import Search from "./component/Search";
import ContactUs from "./component/ContactUs";
import Favourite from "./component/Favourite";
import OrderList from "./component/OrderList";
import PlaceOrder from "./component/PlaceOrder";
import OtpVerification from "./component/OtpVerification";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state?.user?.login);
  const userInfo = useSelector((state) => state?.user?.userInfo?.userInfo?.isVerified);
  console.log(userInfo)
  const refresh = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/refresh",
        {},
        { withCredentials: true }
      );

      if (response.data.login === true) {
       dispatch(setUserDetails(response.data));
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    refresh();
  }, []);
  return (
    <>
      <Routes>
        {!login ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/OtpVerification" element={<OtpVerification />} />
          </>
        ) : (
          <>
            {!userInfo ? (
              <Route path="*" element={<OtpVerification />} />
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Restaurant" element={<Restaurant />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/Favourite" element={<Favourite />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/OrderList" element={<OrderList />} />
                <Route path="/Restaurant/:restroId" element={<Restaurant />} />
                <Route path="/PlaceOrder/:productId" element={<PlaceOrder />} />
              </>
            )}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
