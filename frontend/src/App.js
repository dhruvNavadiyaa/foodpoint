import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { setUserDetails } from './redux/features/userSlice';
import axios from 'axios'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Home from './component/Home'
import React from 'react';
import Restaurant from './component/Restaurant';
import Search from './component/Search';
import ContactUs from './component/ContactUs';
import Favourite from './component/Favourite';
import OrderList from './component/OrderList';

function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const login = useSelector(state => state.user.userinfo.login)
  const login = useSelector(state => state.user.login)
  // const login = false

  const refresh = async () => {
    try {
      console.log(localStorage.getItem("isLogin"));
      const response = await axios.post('http://localhost:5000/api/user/refresh',{},{ withCredentials: true});

      console.log(response)
      if (response.data.login === true) {
        // console.log(response.data)
        dispatch(setUserDetails(response.data))
        // navigate('/Home')
      }
      // else {
      //   navigate('/')
      // }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  useEffect(() => {
    refresh()
     console.log(login)
  }, [])
  return (
    <>
      <Routes>
        {!login ?
          <>
            <Route path='/' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
          </>
          :
          <>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Restaurant' element={<Restaurant />} />
            <Route path='/Search' element={<Search />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Favourite' element={<Favourite />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/OrderList' element={<OrderList />} />
            <Route path='/Restaurant' element={<Restaurant />} />
          </>
        }
      </Routes>   
    </>
  );
}

export default App;
