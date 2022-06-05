import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdImage } from 'react-icons/md'
import { CardProps } from '../../types/interfaces'
import { get } from '../../utils/requests'

const TextFileCard = ({file} : CardProps) => {
  const [fileContent, setFileContent] = useState('');
  useEffect(() => {
    (async()=> {
      try {
        const getFileContent = await get(`/api/upload/${file.filename}`);
        console.log(getFileContent)
        setFileContent(getFileContent.data)

      } catch (error) {
        console.log(error);
        
      }
    })()
  }, [file])
  return (
    <div
      className="card"
    >
      <object className='w-full h-36 relative overflow-hidden' id='text_file' data="http://localhost:4000/api/upload/1654438673477Yu_Takaki_Resume_11-03-2022-10-16-55.pdf">
        {/* {fileContent} */}
      </object>
      <div className='flex gap-2 p-2 items-center'>
        <MdImage size={20} />
        <p className=' truncate'>{file.filename}</p>
      </div>
    </div>
  )
}

export default TextFileCard