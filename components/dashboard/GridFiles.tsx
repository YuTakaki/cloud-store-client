import React from 'react'
import { fileType } from '../../types/types';
import AudioCard from '../Cards/AudioCard';
import ImageCard from '../Cards/ImageCard';
import TextFileCard from '../Cards/TextFileCard';
import VideoCard from '../Cards/VideoCard';

interface GridFilesProps {
  files : []
}
const GridFiles = ({ files } : GridFilesProps) => {
  return (
    <div className='grid gap-5 m-4' style={{
      gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))'
    }}>
      {files.map((_file : fileType, i) => (
        <>
          {_file.contentType.includes('image') && (
            <ImageCard key={i} file={_file} />
          )}
          {_file.contentType.includes('text') && (
            <TextFileCard key={i} file={_file} />
          )}
          {_file.contentType.includes('audio') && (
            <AudioCard key={i} file={_file} />
          )}
          {_file.contentType.includes('video') && (
            <VideoCard key={i} file={_file} />
          )}
        </>
      ))}
    </div>
  )
}

export default GridFiles