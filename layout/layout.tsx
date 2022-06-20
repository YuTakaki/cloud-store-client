import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'
import SearchContainer from '../components/layout/SearchContainer';
import {
  MdClose,
} from "react-icons/md"
import { closeMenus } from '../utils/closeMenu';
import { useRouter } from 'next/router';

interface LayoutProps {
  children : any
}

const Layout = ({children} : LayoutProps) => {

  const [currentOption, setCurrentOption] = useState("");
  const navRef = useRef<HTMLElement>(null)

  const nav_options = [
    'all',
    'images',
    'video',
    'music',
    'document',
  ]

  const hideNav = () => {
    navRef.current?.classList.add('hidden');
  }


  useEffect(() => {
    window.addEventListener('mouseup', closeMenus);

    return () => {
      window.removeEventListener('mouseup', closeMenus);
    }

  }, []);

  return (
    <div className='min-h-screen flex text-slate-400'>
      <nav className='w-full max-w-xs hidden md:block fixed md:relative z-50' id="nav" ref={navRef} >
        <div className='fixed w-full md:max-w-xs top-0 flex'>
          <div className='w-full max-w-xs bg-slate-800 h-screen relative'>
            <MdClose
              className="block md:hidden absolute top-5 right-5"
              size={30} 
              onClick={hideNav} 
              role="button"/>
            <figure className='flex justify-center p-3'>
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
              <button
                className='bg-yellow-100 p-2 rounded-md w-3/4 m-auto text-slate-800 font-semibold'
              >Upload</button>
            </div>
            <ul className='mt-3'>
              {nav_options.map(_option => (
                <Link href={`/${_option === 'all' ? "" : _option}`} key={_option}>
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
          <div className='md:hidden flex-1 bg-slate-800 opacity-70' onClick={hideNav} />
        </div>
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