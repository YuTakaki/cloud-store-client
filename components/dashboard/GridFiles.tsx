import React, { useEffect, useState } from 'react'
import { fileType } from '../../types/types';
import ApplicationFileCard from '../Cards/ApplicationCard';
import AudioCard from '../Cards/AudioCard';
import ImageCard from '../Cards/ImageCard';
import TextFileCard from '../Cards/TextFileCard';
import VideoCard from '../Cards/VideoCard';
import Masonry from '@mui/lab/Masonry';

interface GridFilesProps {
  files : []
}
const GridFiles = ({ files } : GridFilesProps) => {
  const [column, setColumn] = useState(0);

  const changeColumnInResize = () => {
    const mainWidth = document.querySelector('main')?.offsetWidth;
    if (mainWidth !== undefined) {
      if (mainWidth! < 200) {
        setColumn(1)
      } else {
        setColumn(Math.floor(mainWidth / 200))
      }
    }
  }

  useEffect(() => {
    changeColumnInResize()
    window.addEventListener('resize', changeColumnInResize)
    return () => {
      window.removeEventListener('resize', changeColumnInResize)
    }
  });

  return (
    // <div className='flex flex-wrap'>
    //   {files.map((_file : fileType, i) => (
    //     <>
    //       {_file.contentType.includes('image') ? 
    //         <ImageCard key={i} file={_file} /> :
    //          <VideoCard key={i} file={_file} />}
    //     </>
    //   ))}
    // </div>
    <Masonry
      columns={column}
    >
      {files.map((_file : fileType, i) => (
        <>
          {_file.contentType.includes('image') ? 
            <ImageCard key={i} file={_file} /> :
             <VideoCard key={i} file={_file} />}
        </>
      ))}
    </Masonry>
  )
}

export default GridFiles