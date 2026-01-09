"use client"
import React from 'react'
import { CiShoppingCart, CiUser } from 'react-icons/ci'
import { FaCircle } from 'react-icons/fa'
import Searchbar from '../filters/Searchbar'

type HeaderProps = {
  searchText: string;
  setSearchText: (value: string) => void;
};

function Header({ searchText, setSearchText }: HeaderProps) {
  
  return (
    <div className='w-screen bg-white sm:h-18 flex justify-between items-center px-8 text-black border-b border-gray-300 py-4 shadow'>
        <div className='flex justify-center items-center gap-2'>
          <FaCircle className='text-2xl text-orange-600' />
          <h1 className='font-bold text-xl tracking-widest'>WHATBYTES</h1>
        </div>
        <Searchbar value={searchText} onChange={setSearchText} />
        <div className='flex justify-center items-center gap-2'>
            <CiShoppingCart className='border rounded-full text-5xl p-2 cursor-pointer' />
            <CiUser className='bg-[#18181B] text-white rounded-full text-5xl p-2 cursor-pointer' />
        </div>
    </div>
  )
}

export default Header