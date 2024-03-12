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
function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(state => state.restaurant.login)
  const isApproved = useSelector(state => state.restaurant.isApproved)

  const refresh = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/resturant/refresh', {}, { withCredentials: true });
      if (response.data.login === true) {
        // console.log(response)
        // console.log(response.data)
        dispatch(setRestroDetails(response.data))
        // navigate('/Home')
      }
      else {
        navigate('/Login')
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }

  }
  useEffect(() => {
    refresh()
    console.log(login)
    console.log(isApproved)
  }, [])
  return (
    <>
      <Routes>
        {!login ? (
          <Route path='/' element={<Login />} />
        ) : (
          isApproved === "Pending" ? (
            <>
              <Route path='/' element={<Login />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/OrderList' element={<Sorry />} />
              <Route path='/AddProduct' element={<Sorry />} />
              <Route path='/YourProducts' element={<Sorry />} />
              <Route path='/ContactUs' element={<Sorry />} />
              <Route path='/Profile' element={<Sorry />} />
            </>
          ) : isApproved !== "Pending"(<>
            <Route path='/' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/OrderList' element={<OrderList />} />
            <Route path='/AddProduct' element={<AddProduct />} />
            <Route path='/YourProducts' element={<YourProducts />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Profile' element={<Profile />} />
          </>
          )
        )}
      </Routes >
    </>
  );
}

export default App;
