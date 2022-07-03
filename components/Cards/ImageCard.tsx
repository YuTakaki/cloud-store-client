import Image from 'next/image'
import React from 'react'
import { MdImage } from 'react-icons/md'
import { CardProps } from '../../types/interfaces'

const ImageCard = ( {file} : CardProps) => {
  return (
    <div
      className="card break-inside-avoid m-1 order-none"
    >
      <figure className='relative w-full'>
        <img
          // layout='fill'
          className='min-w-full'
          src={`${process.env.NEXT_PUBLIC_SERVER}/api/upload/${file.filename}`}
          alt=""
          // unoptimized={true}
        />
      </figure>
    </div>
  )
}

export default ImageCard