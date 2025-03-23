import React from 'react'

const HomeSectionCard = ({ product }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden mx-3'>

      <div className='h-[14rem] w-full overflow-hidden '>
        <img src= {product.imageUrl} alt="" className={`h-full w-full object-cover `} />
        </div>   

        <div className='p-4' > 
       <h3 className='mt-2 text-lg font-medium text-gray-900' >{product.title}</h3>
       <p className='mt-2 text-sm text-gray-500'>{product.brand} </p>
        </div>
    </div>
  )
}

export default HomeSectionCard