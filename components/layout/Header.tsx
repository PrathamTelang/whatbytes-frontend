"use client"
import React from 'react'
import { CiShoppingCart, CiUser } from 'react-icons/ci'
import { FaCircle } from 'react-icons/fa'
import Searchbar from '../filters/Searchbar'
import { useSearch } from '@/context/SearchContext'
import { useCart } from '@/context/CartContext'



function Header() {
  
const { searchText, setSearchText } = useSearch();
const { cartItems } = useCart();

const cartCount = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);



  return (
    <div className='w-screen bg-white sm:h-18 flex justify-between items-center sm:px-8 px-2 text-black border-b border-gray-300 py-4 shadow'>
        <div className='sm:flex justify-center items-center gap-2 hidden'>
          <FaCircle className='text-2xl text-orange-600' />
          <h1 className='font-bold text-xl tracking-widest '>WHATBYTES</h1>
        </div>
        <Searchbar value={searchText} onChange={setSearchText} />
        <div className='flex justify-center items-center gap-2'>
            <div className="relative cursor-pointer">
  <CiShoppingCart onClick={() => (window.location.href = '/cart')} className="border rounded-full text-5xl p-2" />
    
  {cartCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartCount}
    </span>
  )}
</div>

            <CiUser className='bg-[#18181B] text-white rounded-full text-5xl p-2 cursor-pointer' />
        </div>
    </div>
  )
}

export default Header