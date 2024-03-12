import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Orders from './component/Orders'
import Orderdetails from './component/Orderdetails'
import Customers from './component/Customers'
import DeliveryPartner from './component/DeliveryPartner'
import Category from './component/Category'
import Request from './component/Request'
import Restaurant from './component/Restaurant'
import Restaurantdetails from './component/Restaurantdetails'
import ContactUs from './component/ContactUs'
import Createadmin from './component/Createadmin'
import { Store } from 'redux'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

function App() {
  // let status = ''
  const refresh = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/admin/refresh', {}, { withCredentials: true });
        if (response.data.login === true) {
          // console.log(response)
          // console.log(response.data)
          dispatch(setRestroDetails(response.data))
          navigate('/Home')
        }
        else{
          navigate('/Login')
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
  }
  const login = useSelector(state => state.admin.login)
  useEffect(() => {
    refresh()
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!login ? (<Route path='/' element={<Login />} />) : (<>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Orders' element={<Orders />} />
            <Route path='/Orderdetails' element={<Orderdetails />} />
            <Route path='/Customers' element={<Customers />} />
            <Route path='/DeliveryPartner' element={<DeliveryPartner />} />
            <Route path='/Category' element={<Category />} />
            <Route path='/Request' element={<Request />} />
            <Route path='/Restaurant' element={<Restaurant />} />
            <Route path='/Restaurantdetails' element={<Restaurantdetails />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Createadmin' element={<Createadmin />} />
          </>)
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
