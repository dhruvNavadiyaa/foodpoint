import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { setdeliverDetails } from './redux/features/deliverySlice'
import axios from 'axios'
import Login from './components/Login';
import SignUp from './components/SignUp'
import Home from './components/Home';
import OrderList from './components/OrderList';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';
import OrderHistory from './components/OrderHistory';
import Orderdetails from './components/Orderdetails';
import Sorry from './components/Sorry'

function App() {

  const isApproved = useSelector(state => state?.deliver?.deliverInfo?.deliveryBoyInfo?.isApproved)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(state => state.deliver.login)
  // const isApproved = useSelector(state => state.deliver.isApproved)

  const refresh = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/delivery/refresh', {}, { withCredentials: true });
      if (response.data.login === true) {
        // console.log(response.data)
        dispatch(setdeliverDetails(response.data))
        // navigate('/Home')
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  useEffect(() => {
    refresh()

  }, [])
  return (
    <>
      <Routes>
        {!login ?
          <>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
          </>
          :
          <>{
            isApproved === "pending" ?
              <>
                <Route path='/' element={<Login />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path='/Information' element={<Sorry />} />
              </> : <>
                <Route path='/' element={<Login />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/OrderList' element={<OrderList />} />
                <Route path='/ContactUs' element={<ContactUs />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/OrderHistory' element={<OrderHistory />} />
                <Route path='/Orderdetails/:id' element={<Orderdetails />} />
              </>
          }
          </>
        }
      </Routes>
    </>
  );
}

export default App;
