import React, { useState } from 'react'
import {
  MdSearch,
  MdClose
} from "react-icons/md"



const SearchContainer = () => {

  const [search, setSearch] = useState('');
  
  return (
    <header className='fixed bg-white z-50 p-2 w-full'>
      <div className=' bg-gray-200 flex p-2 px-4 w-full max-w-xs rounded items-center'>
        <MdSearch size={20}/>
        <input
          type='text'
          className=' flex-1 outline-none border-none bg-transparent text-gray-800 mx-2'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <MdClose size={20} role="button" onClick={() => setSearch("")}/>
        )}
      </div>

    </header>
  )
}

export default SearchContainer