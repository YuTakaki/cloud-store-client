import Link from 'next/link';
import React, { FormEvent } from 'react'

const Login = () => {

  const loginSubmit = (e : FormEvent) => {
    e.preventDefault();
  }
  return (
    <main className='w-full h-full flex justify-center mt-6'>
      <form 
        onSubmit={loginSubmit}
        className='w-full max-w-sm card p-3 flex flex-col m-2'
      >
        <h1 className=' text-center text-3xl m-2'>Login</h1>
        <input
          type="text"
          className='input'
          placeholder='username or email'
        />
        <input
          type="password"
          className='input'
          placeholder='password'
        />
        <p className='text-center'>or</p>
        <button className='btn bg-red-400 text-white'>Google</button>
        <button className='btn bg-blue-700 text-white'>Facebook</button>

        <span className='text-center mt-4'>
          Dont have an account yet?
          <Link href="/register">
            <a className='text-teal-600 ml-2'>Register</a>
          </Link>
        </span>
      </form>
    </main>
  )
}

export default Login