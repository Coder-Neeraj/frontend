import React from 'react'
import{ Route, Routes} from 'react-router-dom'
import Product from '../customer/components/Product/Product'
import Cart from '../customer/components/Cart/Cart'
import HomePage from '../customer/pages/HomePage/HomePage' 
import Navigation from '../customer/components/navigation/Navigation'
import ProductDetails from '../customer/components/ProductDeails/ProductDetails'
import CheckOut from '../customer/components/CheckOut/CheckOut'
import Order from '../customer/Order/Order'
import OrderDetails from '../customer/Order/OrderDetails'
const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div> 

   <Routes> 

      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/Cart' element={<Cart/>} ></Route> 
      <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>} ></Route> 
      <Route path='/product/:productId' element={<ProductDetails/>} ></Route> 
      <Route path='/checkout' element={<CheckOut/>} ></Route> 
      <Route path='/account/order' element={<Order/>} ></Route> 
      <Route path='/account/order/:orderId' element={<OrderDetails/>} ></Route> 




              {/* <HomePage/> */}
        {/* <Product/>  */}
        {/* <ProductDetails/>  */}
        {/* <Cart/>  */}
        {/* <CheckOut/> */}
        {/* <Order/>  */}
        {/* <OrderDetails/>  */}
   
    </Routes>  
        
    </div>
  )
}

export default CustomerRoutes