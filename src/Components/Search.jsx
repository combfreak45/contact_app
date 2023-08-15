import React from 'react'
import {FiSearch} from 'react-icons/fi'
const Search = () => {
  return (
    <div className='flex relative items-center flex-grow'>
      <FiSearch className='text-white text-xl absolute ml-1'/>
      <input type="text" className=' border flex-grow bg-transparent border-white rounded-lg h-8 text-white pl-10'/>
    </div>
  )
}

export default Search
