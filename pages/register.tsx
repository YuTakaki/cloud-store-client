import Link from 'next/link';
import React, { FormEvent } from 'react'

const Register = () => {

  const RegisterSubmit = (e : FormEvent) => {
    e.preventDefault();
  }
  return (
    <main className='w-full h-full flex justify-center mt-6'>
      <form 
        onSubmit={RegisterSubmit}
        className='w-full max-w-sm card p-3 flex flex-col m-2'
      >
        <h1 className=' text-center text-3xl m-2'>Register</h1>
        <div className='flex flex-col xs:flex-row'>
          <input
            type="text"
            className='input xs:w-1/2'
            placeholder='first name'
          />
          <input
            type="text"
            className='input xs:w-1/2'
            placeholder='last name'
          />

        </div>
        <input
          type="text"
          className='input'
          placeholder='username'
        />
        <input
          type="text"
          className='input'
          placeholder='email'
        />
        <input
          type="password"
          className='input'
          placeholder='password'
        />
        <input
          type="password"
          className='input'
          placeholder='retry password'
        />
        <p className='text-center'>or</p>
        <button className='btn bg-red-400 text-white'>Google</button>
        <button className='btn bg-blue-700 text-white'>Facebook</button>

        <span className='text-center mt-4'>
          Already have an account?
          <Link href="/login">
            <a className='text-teal-600 ml-2'>Login</a>
          </Link>
        </span>
      </form>
    </main>
  )
}

export default Register