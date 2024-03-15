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

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(state => state.deliver.login)
  // const isApproved = useSelector(state => state.deliver.isApproved)

  // const refresh = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/resturant/refresh', {}, { withCredentials: true });
  //     if (response.data.login === true) {
  //       // console.log(response)
  //       // console.log(response.data)
  //       dispatch(setRestroDetails(response.data))
  //       // navigate('/Home')
  //     }
  //     else {
  //       navigate('/Login')
  //     }
  //   } catch (error) {
  //     console.log('Error fetching data:');
  //   }
  // }

  // useEffect(() => {
  //   refresh()
  //   console.log(login)
  //   console.log(isApproved)
  // }, [])
  return (
    <>
      <Routes>
        {/* {!login ? */}
          <>
            <Route path='/' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
          </>
          {/* : */}
          // isApproved === "Pending"
          <>
            {/* <Route path='/' element={<Login />} /> */}
            <Route path='/Home' element={<Home />} />
            <Route path='/OrderList' element={<OrderList />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Profile' element={<Profile />} />
          </>
        {/* } */}
      </Routes>
    </>
  );
}

export default App;
