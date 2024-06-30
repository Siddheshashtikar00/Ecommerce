import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5-rem] h-[5-rem] lg:w-[9-rem] lg:h-[9-rem]'>
                <img className='w-full h-full object-cover object-top ' src='https://www.dennislingo.com/cdn/shop/products/DLMTSS23054_OL_OLIVE_10.jpg?v=1679405140&width=800'/>
            </div>
            <div className='ml-5 space-y-1'>

            </div>
        </div>
    </div>
  )
}

export default CartItem