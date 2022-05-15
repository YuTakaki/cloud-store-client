import React, { useRef } from 'react'
import {
  MdArrowUpward
} from 'react-icons/md'

const BasicSort = () => {
  const menuRef = useRef<HTMLMenuElement>(null)
  return (
    <div id="basic-filter" className="flex mt-12 mx-4 justify-end">
      <div className='flex gap-5 items-center'>
        <div className='relative'>
          <button
            id='btn-menu-basic-sort'
            className=' hover:bg-gray-200 px-4 py-2 rounded font-semibold text-lg'
            onClick={() => menuRef.current?.classList.toggle("hidden")}
          >Date</button>
          <menu
            ref={menuRef}
            id="menu-basic-sort"
            className='absolute z-10 bg-white card w-28 mt-2 p-2 -left-10 hidden duration-500'
          >
            <li>sdsd</li>
            <li>sdsd</li>
            <li>sdsd</li>
            <li>sdsd</li>
          </menu>
        </div>
        <MdArrowUpward size={30} role="button" className=' hover:bg-gray-200 rounded-full'/>
      </div>
    </div>

  )
}

export default BasicSort