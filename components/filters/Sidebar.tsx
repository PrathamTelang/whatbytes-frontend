import React from 'react'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'

function Sidebar() {
  return (
    <div className="w-96 h-auto bg-[#FAFAFA] p-4">
          <CategoryFilter />
          <PriceFilter />
        </div>
  )
}

export default Sidebar