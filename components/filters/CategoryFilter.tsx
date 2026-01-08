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
              id="Speakers"
              className="mr-4 scale-150"
            />
            <label htmlFor="Speakers">Speakers</label>
          </div>
          <div className="pb-4 pl-1">
            <input
              type="checkbox"
              id="Headphones"
              className="mr-4 scale-150"
            />
            <label htmlFor="Headphones">Headphones</label>
          </div>
          <div className="pb-4 pl-1">
            <input
              type="checkbox"
              id="Earbuds"
              className="mr-4 scale-150"
            />
            <label htmlFor="Earbuds">Earbuds</label>
          </div>
        </div>
    </div>
    </div>
  )
}

export default CategoryFilter