import { MdTextSnippet,  } from 'react-icons/md'
import { CardProps } from '../../types/interfaces'

const TextFileCard = ({file} : CardProps) => {
  return (
    <div
      className="card"
    >
      <figure className='w-full h-36 relative overflow-hidden flex justify-center items-center' id='text_file'>
        <MdTextSnippet size={100} />  
      </figure>
      <div className='flex gap-2 p-2 items-center'>
        <MdTextSnippet size={20} />
        <p className=' truncate'>{file.filename}</p>
      </div>
    </div>
  )
}

export default TextFileCard