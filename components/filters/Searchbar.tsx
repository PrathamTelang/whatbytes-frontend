import React from 'react'

type SearchbarProps = {
  value: string;
  onChange: (value: string) => void;
};


function Searchbar({ value, onChange }: SearchbarProps) {
  return (
    <div className='w-full sm:px-40'>
              <input 
              className='border w-full border-gray-300 shadow  rounded-md px-4 py-2 focus:outline-none focus:shadow-lg' placeholder="Search for products" 
              value={value} 
              onChange={(e) => onChange(e.target.value)} />
            </div>
  )
}

export default Searchbar