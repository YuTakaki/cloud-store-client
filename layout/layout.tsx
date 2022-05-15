import { useState } from 'react'

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
    <div className='flex h-screen text-gray-600'>
      <nav className='w-1/4 max-w-xs' >
        <ul>
          {nav_options.map(_option => (
            <li
              className='text-2xl'
              key={_option
            }>{_option}</li>
          ))}
        </ul>
      </nav>
      <main className='w-full'>
        {children}
      </main>
    </div>
  )
}

export default Layout