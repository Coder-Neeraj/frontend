import { Grid } from '@mui/material'
import React from 'react' 
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => { 

    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}> 
            <Grid item xs={6}>
                 <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[10rem] object-cover object-top ' src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/f/j/q/36-wtd-05-wanted-original-imah4ccxzghhb4cm.jpeg?q=70" alt="" /> 
               
               
                <div className='ml-5 space-y-2'>
          <p>Men Loose Fit Mid Rise Dark Blue Jeans</p> 
          <p className='opacity-50 text-xs font-semibold'>Size: L</p> 
          <p className='opacity-50 text-xs font-semibold'> Color: Blue</p>
                </div>
                 </div>
            </Grid> 
            <Grid item xs={2}>
             <p>₹649</p>
            </Grid> 

            <Grid item xs={4}>
    { true &&  <div> 
    <p> 
        <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2
        text-sm'/>
        <span>
            Delivered on March 03
        </span> 
        </p>  
        <p className='text-xs '>Your Item Has Been Delivered</p>
  </div>}
    { false && <p>
        <span>
            Expected  Delivery on March 03
        </span>
        </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard