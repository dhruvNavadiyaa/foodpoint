import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { setRestroDetails } from './redux/features/RestaurantSlice'
import axios from 'axios'
import Login from './components/Login';
import SignUp from './components/SignUp'
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import OrderList from './components/OrderList';
import YourProducts from './components/YourProducts';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';
import Sorry from './components/Sorry'
import RestroDetails from './components/RestroDetails';
import OtpVerification from './components/OtpVerification';

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(state => state.restaurant.login)
  const isApproved = useSelector(state => state.restaurant.RestaurantInfo.isApproved)
  // console.log(isApproved)
  const isVerified = useSelector(state => state.restaurant?.RestaurantInfo.isVerified)
// console.log(isVerified)
  const refresh = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/Restaurant/refresh', {}, { withCredentials: true });
      if (response.data.login === true) {
        await dispatch(setRestroDetails(response.data))
      }
      else {
        navigate('/')
      }
    } catch (error) {
      console.log('Error fetching data:');
    }

  }
  useEffect(() => {
    refresh()
    // console.log(login)
    // console.log(isApproved)
  }, [])
  return (
    <>
      <Routes>
        {!login ?
          <>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            {/* <Route path='/RestroDetails' element={<RestroDetails />} /> */}

          </> :
          <>
            {
              isVerified ?(
              isApproved === "Pending" ?
                <>
                  {/* <Route path='/' element={<Login />} /> */}
                  {/* <Route path='/SignUp' element={<SignUp />} /> */}
                  <Route path='/Home' element={<Home />} />
                  <Route path='/ContactUs' element={<ContactUs />} />
                  <Route path='/Profile' element={<Profile />} />
                  <Route path='/Information' element={<Sorry />} />
                  <Route path='/RestroDetails' element={<RestroDetails />} />
                </> : <>
                  <Route path='/' element={<Login />} />
                  <Route path='/SignUp' element={<SignUp />} />
                  <Route path='/Home' element={<Home />} />
                  <Route path='/OrderList' element={<OrderList />} />
                  <Route path='/AddProduct' element={<AddProduct />} />
                  <Route path='/YourProducts' element={<YourProducts />} />
                  <Route path='/ContactUs' element={<ContactUs />} />
                  <Route path='/Profile' element={<Profile />} />
                  <Route path='/RestroDetails' element={<RestroDetails />} />
                </>):
                (
            <Route path='*' element={<OtpVerification />} />
                )
            }
          </>
        }
      </Routes>
    </>
  );
}

export default App;
