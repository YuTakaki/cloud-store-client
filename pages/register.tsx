import { Form, Formik } from 'formik';
import Link from 'next/link';
import React, { FormEvent } from 'react'
import * as yup from 'yup';
import InputField from '../components/Formik/InputField';

const Register = () => {

  const initialValues = {
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    retry_password: ''
  }

  const validationSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().test((val) => {
      if (val && val.length < 8) return false
      return true
    }),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
  })

  const RegisterSubmit = () => {
    
  }
  return (
    <main className='w-full h-full flex justify-center mt-6'>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={RegisterSubmit}
      >
        <Form className='w-full max-w-sm card p-3 flex flex-col m-2'>
          <h1 className=' text-center text-3xl m-2'>Register</h1>
          <div className='flex flex-col xs:flex-row'>
            <InputField type='text' className='input xs:w-1/2' name='first_name' placeholder='first name'/>
            <InputField type='text' className='input xs:w-1/2' name='last_name' placeholder='last name'/>
          </div>
          <InputField type='text' className='input' name='username' placeholder='username'/>
          <InputField type='text' className='input' name='email' placeholder='email'/>
          <InputField type='text' className='input' name='password' placeholder='password'/>
          <p className='text-center'>or</p>
          <button className='btn bg-red-400 text-white'>Google</button>
          <button className='btn bg-blue-700 text-white'>Facebook</button>

          <span className='text-center mt-4'>
            Already have an account?
            <Link href="/login">
              <a className='text-teal-600 ml-2'>Login</a>
            </Link>
          </span>
        </Form>
      </Formik>
    </main>
  )
}

export default Register