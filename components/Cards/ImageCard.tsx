import Image from 'next/image'
import React from 'react'
import { MdImage } from 'react-icons/md'
import { CardProps } from '../../types/interfaces'

const ImageCard = ( {file} : CardProps) => {
  return (
    <div
      className="card"
    >
      <figure className='w-full h-36 relative'>
        <Image
          layout='fill'
          src={`${process.env.NEXT_PUBLIC_SERVER}/api/upload/${file.filename}`}
          alt=""
          // unoptimized={true}
        />
      </figure>
      <div className='flex gap-2 p-2 items-center'>
        <MdImage size={20} />
        <p className=' truncate'>{file.filename}</p>
      </div>
    </div>
  )
}

export default ImageCard