import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaCircle } from 'react-icons/fa'

function Header() {
  return (
    <div className='w-screen bg-white sm:h-20 flex justify-between items-center px-8 text-black border-b border-gray-300 py-4 shadow'>
        <div className='flex justify-center items-center gap-2'>
          <FaCircle className='text-2xl text-orange-600' />
          <h1 className='font-bold text-xl tracking-widest'>WHATBYTES</h1>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <input className='border sm:w-96 border-gray-300 shadow  rounded-md px-4 py-2' placeholder="Search for products" />
            <CiShoppingCart className='bg-[#18181B] text-white rounded-full text-5xl p-2 cursor-pointer' />
        </div>
    </div>
  )
}

export default Header