import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <div className='grid grid-cols-3 gap-4 p-8 border-t border-gray-300 '>
        <div>
            <h3 className='font-bold mb-4'>Filters</h3>
            <p className='text-sm'>All</p>
        </div>
        <div>
            <h3 className='font-bold mb-4'>About Us</h3>
            <p className='text-sm mb-2'>About Us</p>
            <p className='text-sm'>Contact</p>
        </div>
        <div>
            <h3 className='font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'><FaFacebookF /><FaTwitter /><FaInstagram /></div>
        </div>
    </div>
    <div className='px-8 text-gray-600 shadow-2xl py-4'>© Copyright 2026, All Rights Reserved</div>
    </div>
  )
}

export default Footer