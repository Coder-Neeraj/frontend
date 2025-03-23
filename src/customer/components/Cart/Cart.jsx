import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => { 


 const navigate = useNavigate();
 const handleCheckout=()=>{
     navigate("/Checkout?step=2")
 }

  return (
    <div> 

     <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
        {[1,1,1].map((item)=> <CartItem/>)}
        </div>
 <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
    <div className='p-5 shadow-lg  rounded-md'>
      <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p> 
      <hr/> 
      <div className='space-y-3 font-semibold mb-5'> 
        <div className='flex justify-between pt-3 text-black'>
   <span className='opacity-60'>Price(3item)</span>
   <span >₹4932</span>
        </div>
        <div className='flex justify-between pt-3 text-black'>
   <span className='opacity-60'>Discount</span>
   <span className='text-green-500'>-₹2932</span>
        </div>
        <div className='flex justify-between pt-3 text-black'>
   <span className='opacity-60'>Delivery Charge</span>
   <span className='text-green-500'>Free</span>
        </div> 
        <hr />
        <div className='flex justify-between pt-3 text-black'>
   <span className='font-semibold'>Total Amount</span>
   <span className='text-green-500'>₹2000</span>
        </div> 
        

      </div> 
       
          <Button onClick={handleCheckout} variant='contained' className='w-full '  sx={{px:"2.5rem",py:"7 rem", bgcolor:"#9155fd"}} >CHECKOUT</Button>
        
    </div> 

     </div>
     </div>

    </div>
  )
}

export default Cart