  import React from 'react';
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import AddProduct from './components/AddProduct';
  import Home from './components/Home';
  import OrderList from './components/OrderList';
  import YourProducts from './components/YourProducts';
  import ContactUs from './components/ContactUs';
  import Profile from './components/Profile';

  function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<Login />} /> */}
            <Route path='/Home' element={<Home />} />
            <Route path='/OrderList' element={<OrderList />} />
            <Route path='/AddProduct' element={<AddProduct />} />
            <Route path='/YourProducts' element={<YourProducts />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default App;
