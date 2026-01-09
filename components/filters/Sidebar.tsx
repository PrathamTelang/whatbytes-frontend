import React from 'react'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'

function Sidebar() {
  return (
    <div className="md:w-48 lg:w-96  w-28 h-auto bg-[#FAFAFA] p-4">
          <CategoryFilter />
          <PriceFilter />
        </div>
  )
}

export default Sidebar