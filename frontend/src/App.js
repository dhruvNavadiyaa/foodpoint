import Login from './component/Login'
import SignUp from './component/SignUp'
import Home from './component/Home'
import React from 'react';
import Restaurant from './component/Restaurant';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Restaurant' element={<Restaurant />} />

          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
