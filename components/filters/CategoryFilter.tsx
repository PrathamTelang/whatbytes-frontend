import React from 'react'

function CategoryFilter() {
  return (
    <div>
        <div>
        <div>
            <h2 className="text-md font-semibold mb-6">Category</h2>
          <div className="pb-4 pl-1">
            <input
              type="checkbox"
              id="All"
              className="mr-4 scale-150"
            />
            <label htmlFor="All">All</label>
          </div>
          <div className="pb-4 pl-1">
            <input
              type="checkbox"
              id="electronics"
              className="mr-4 scale-150"
            />
            <label htmlFor="electronics">Electronics</label>
          </div>
          <div className="pb-4 pl-1">
            <input
              type="checkbox"
              id="footwear"
              className="mr-4 scale-150"
            />
            <label htmlFor="footwear">Footwear</label>
          </div>
          <div className="pb-4 pl-1">
            <input
              type="checkbox"
              id="clothing"
              className="mr-4 scale-150"
            />
            <label htmlFor="clothing">Clothing</label>
          </div>
          <div className="pb-4 pl-1">
            <input
              type="checkbox"
              id="accessories"
              className="mr-4 scale-150"
            />
            <label htmlFor="accessories">Accessories</label>
          </div>
        </div>
    </div>
    </div>
  )
}

export default CategoryFilter