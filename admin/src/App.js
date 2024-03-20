import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setAdminDetails } from './redux/features/AdminSlice'
import axios from 'axios'
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

function App() {

  // let status = ''  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const login = useSelector(state => state.admin.login)

  const refresh = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/admin/refresh', {}, { withCredentials: true });
        if (response.data.login === true) {
          // console.log(response)
          // console.log(response.data)
          dispatch(setAdminDetails(response.data))
          // navigate('/Dashboard')
        }
        else{
          navigate('/')
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
          {!login ? (<Route path='/' element={<Login />} />) : (<>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Orders' element={<Orders />} />
            <Route path='/Orderdetails' element={<Orderdetails />} />
            <Route path='/Customers' element={<Customers />} />
            <Route path='/DeliveryPartner' element={<DeliveryPartner />} />
            <Route path='/Category' element={<Category />} />
            <Route path='/Request' element={<Request />} />
            <Route path='/Restaurant' element={<Restaurant />} />
            <Route path='/Restaurantdetails/:restroId' element={<Restaurantdetails />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Createadmin' element={<Createadmin />} />
            <Route path='/Login' element={<Login />} />
          </>)
          }
        </Routes>
    </>
  );
}
export default App;
