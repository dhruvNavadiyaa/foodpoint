import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Home from './component/Home'
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Orders' element={<Orders/>}/>
          <Route path='/Orderdetails' element={<Orderdetails/>}/>
          <Route path='/Customers' element={<Customers/>}/>
          <Route path='/DeliveryPartner' element={<DeliveryPartner/>}/>
          <Route path='/Category' element={<Category/>}/>
          <Route path='/Request' element={<Request/>}/>
          <Route path='/Restaurant' element={<Restaurant/>}/>
          <Route path='/Restaurantdetails' element={<Restaurantdetails/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
