import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent } from 'react'
import * as yup from 'yup';
import InputField from '../components/Formik/InputField';
import { post } from '../utils/requests';

type registerFields = {
  username: string,
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  retry_password: string,
}
const Register = () => {

  const router = useRouter();

  const initialValues : registerFields = {
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
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })

  const RegisterSubmit = async(value: registerFields) => {
    try {
      await post('/api/auth/register', value);
      router.push('/');
    } catch (error) {
      console.log(error);
      
    }
    
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
          <div className='flex flex-col xs:flex-row gap-1'>
            <div>
              <InputField type='text' className='input w-full !m-0' name='firstName' placeholder='first name'/>
            </div>
            <div>
            <InputField type='text' className='input w-full !m-0' name='lastName' placeholder='last name'/>

            </div>
          </div>
          <InputField type='text' className='input' name='username' placeholder='username'/>
          <InputField type='text' className='input' name='email' placeholder='email'/>
          <InputField type='text' className='input' name='password' placeholder='password'/>
          <input type='submit' className='btn bg-gray-800 text-white cursor-pointer' value='register' />
          <p className='text-center'>or</p>
          <button type='button' className='btn bg-red-400 text-white'>Google</button>
          <button type='button' className='btn bg-blue-700 text-white'>Facebook</button>

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