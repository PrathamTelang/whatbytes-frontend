import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { FaCircle } from 'react-icons/fa'

function Header() {
  return (
    <div className='w-screen bg-red-700 sm:h-16'>
        <div><FaCircle /></div>
        <div>
            <div><CiShoppingCart /></div>
        </div>
    </div>
  )
}

export default Header