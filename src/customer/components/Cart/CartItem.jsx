import React from 'react'
import { Button, IconButton } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg  rounded-md'>
      <div className='flex items-center'>
        <div className='w--[5rem] h-[10rem] lg:w-[9rem] lg:h[9rem]'>
          <img className='w-full h-full object-cover object-top' src='https://rukminim2.flixcart.com/image/612/612/xif0q/jean/x/u/i/13-14-years-blkboybaggy-mmt-original-imah3bjh3hggvmr6.jpeg?q=70'
            alt='' />
        </div>
        <div className='ml-5 space-y-1'>
          <p className='font-semibold'>Boys Regular High Rise Black Jeans</p>
          <p className='opacity-70'>Size: XL,Black </p>
          <p className='opacity-70'>Seller: MMT</p>

          <div className='flex items-center space-x-3  pt-6'>
            <p className='opacity-60 line-through' >₹999</p>
            <p className='font-semibold'>₹493</p>
            <p className='text-green-500'>50% off</p>
          </div>

        </div>

      </div>

      <div className='lg-flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
          <IconButton >

            <RemoveCircleIcon />
          </IconButton>
          <span className='py-1 px-7  rounded-sm'>1</span>
            <IconButton sx={{color:"RGB(145 85 253)"}}>

              <AddCircleIcon />
            </IconButton>
        
          <div className=''>
            <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem