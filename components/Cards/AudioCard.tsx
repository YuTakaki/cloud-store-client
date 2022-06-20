import Image from 'next/image'
import React from 'react'
import { MdOutlineMusicNote } from 'react-icons/md'
import { CardProps } from '../../types/interfaces'

const AudioCard = ( {file} : CardProps) => {
  return (
    <div
      className="card"
    >
      <figure className='w-full h-36 relative flex justify-center items-center'>
        <MdOutlineMusicNote size={100} />
      </figure>
      <div className='flex gap-2 p-2 items-center'>
        <MdOutlineMusicNote size={20} />
        <p className=' truncate'>{file.filename}</p>
      </div>
    </div>
  )
}

export default AudioCard