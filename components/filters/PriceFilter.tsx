import React from 'react'

function PriceFilter() {
  return (
    <div>
          <h2 className="text-md font-semibold mt-8">Price Range</h2>
          <input
            type="range"
            min="0"
            max="1000"
            className="w-full mt-6 cursor-pointer"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>$0</span>
            <span>$1000</span>
          </div>
    </div>
  )
}

export default PriceFilter