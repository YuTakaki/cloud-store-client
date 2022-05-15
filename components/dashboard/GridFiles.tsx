import React from 'react'
import Image from 'next/image';
//icons
import {
  MdImage
} from "react-icons/md"

const GridFiles = () => {
  return (
    <div className='grid gap-5 m-4' style={{
      gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))'
    }}>
      {[...new Array(53)].map((_file, i) => (
        <div
          key={i}
          className="card"
        >
          <figure className='w-full h-36 relative'>
            <Image
              className='object-cover'
              layout='fill'
              src="/images/sample.jpg"
              alt=""
            />
          </figure>
          <div className='flex gap-2 p-2 items-center'>
            <MdImage size={20} />
            <p>sample.jpg</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridFiles