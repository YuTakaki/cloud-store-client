import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import SearchContainer from '../components/layout/SearchContainer';

interface LayoutProps {
  children : any
}

const Layout = ({children} : LayoutProps) => {

  const [currentOption, setCurrentOption] = useState("All");

  const nav_options = [
    'All',
    'Images',
    'Videos',
    'Music',
    'Documents',
  ]

  return (
    <div className='min-h-screen flex text-slate-400'>
      <nav className='w-full max-w-xs hidden md:block relative' id="nav" >
        {/* <div className=''> */}
          <div className='fixed w-full max-w-xs bg-slate-800 h-screen'>
            <figure className='flex justify-center m-3'>
              <Image
                src="/images/sample.jpg"
                className='rounded-full object-cover'
                alt="user"
                width={100}
                height={100}
              />
            </figure>
            <div className='flex flex-col'>
              <h1 className='text-center text-3xl mb-2'>Hello Yu</h1>
              <button className='bg-yellow-100 p-2 rounded-md w-3/4 m-auto text-slate-800 font-semibold'>Upload</button>
            </div>
            <ul className='mt-3'>
              {nav_options.map(_option => (
                <Link href={`/${_option}`} key={_option}>
                  <a>
                    <li
                      className='text-2xl'
                    >
                      <button 
                        className='hover:bg-slate-400 hover:text-slate-800 w-full text-left p-2 pl-8'
                      >
                        {_option}
                      </button>
                    </li>
                  </a>
                </Link>
                
              ))}
            </ul>
          </div>
        {/* </div> */}
      </nav>
      <div className='w-full h-screen relative'>
        <SearchContainer />
        
        <main className='p-2'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout