
import React from 'react'
import AddressCard from '../components/AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors' 
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div>
            <h1 className='font-bold text-xl py-5'>Delivery Address</h1>
            <AddressCard />
            <div className='py-20'>
                <OrderTracker   activeStep={3}/>
            </div>

            <Grid className="space-y-5" container> 
           {[1,1,1,1,1].map((item)=>  <Grid item container className='shadow-xl rounded-md p-5'
            sx={{alignItems:"center", justifyContent:"space-between"}} >
              <Grid item xs={6}> 

                 <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top ml-5' src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/v/k/xxl-frml-st2-vebnor-original-imah89h9ayzfwpxu.jpeg?q=70&crop=false" alt="" />
                 <div className='space-y-1 ml-5'>
                    <p className='font font-semibold'>Men Regular Fit Solid Button Down Collar Formal Shirt</p>  
                    <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color: Dark Red</span> <span>Size: M</span></p> 
                    <p>Seller: Linaria</p>
                    <p>₹299</p>
                 </div>
                 </div> 
              </Grid>

              <Grid>
                <Box sx={{color:deepPurple[500]}}>  

                    <StarBorderIcon  sx={{fontSize:"2rem"}} className='px-2'/>
                    <span> Rate & Review Product </span>
                       
                </Box>
              </Grid>
            </Grid> )}     
           

            </Grid>
        </div>
    )
}

export default OrderDetails