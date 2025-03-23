import React from 'react'
import Navigation from './customer/components/navigation/Navigation.jsx'
import HomePage from './customer/pages/HomePage/HomePage.jsx'
import Footer from './customer/components/footer/Footer.jsx'
import Product from './customer/components/Product/Product.jsx'
import ProductDetails from './customer/components/ProductDeails/ProductDetails.jsx'
import Cart from './customer/components/Cart/Cart.jsx'
import CheckOut from './customer/components/CheckOut/CheckOut.jsx'
import Order from './customer/Order/Order.jsx'
import OrderDetails from './customer/Order/OrderDetails.jsx'
import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './Routers/CustomerRoutes.jsx'
const App = () => {
  return (
    <div className=''>  

  <Routes>
    <Route path='/*' element={<CustomerRoutes/>}></Route>
  </Routes>


   
      <div>

      </div> 
      <Footer/>
    </div>
  )
}

export default App