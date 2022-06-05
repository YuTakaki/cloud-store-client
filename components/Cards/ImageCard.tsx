import Image from 'next/image'
import React from 'react'
import { MdImage } from 'react-icons/md'
import { CardProps } from '../../types/interfaces'
import { fileType } from '../../types/types'
import { get } from '../../utils/requests'

const ImageCard = ( {file} : CardProps) => {
  return (
    <div
      className="card"
    >
      <figure className='w-full h-36 relative'>
        <Image
          className='object-cover'
          layout='fill'
          src={`${process.env.NEXT_PUBLIC_SERVER}/api/upload/${file.filename}`}
          alt=""
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