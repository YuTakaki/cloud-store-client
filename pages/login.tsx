import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import * as yup from 'yup';
import React, { FormEvent } from 'react'
import InputField from '../components/Formik/InputField';
import { post } from '../utils/requests';
import { useRouter } from 'next/router';
import axios from 'axios';

type loginFieldsType = {
  usernameOrEmail: string,
  password: string
}
const Login = () => {

  const router = useRouter()

  const loginFields = {
    usernameOrEmail: '',
    password: ''
  }

  const validationSchema = yup.object({
    usernameOrEmail : yup.string().required('Input username'),
    password : yup.string().required('Input password')
  })

  const loginSubmit = async(value : loginFieldsType, {setErrors} : FormikHelpers<loginFieldsType>) => {
    try {
      await post('/api/auth/login', value);
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response!.data) {
        setErrors(error.response!.data)
      }
    }
  }
  return (
    <main className='w-full h-full flex justify-center mt-6'>
      <Formik
        initialValues={loginFields}
        validationSchema={validationSchema}
        onSubmit={loginSubmit}
      >
        <Form
          className='w-full max-w-sm card p-3 flex flex-col m-2'
        >
          <h1 className=' text-center text-3xl m-2'>Login</h1>
          <InputField type='text' className='input' name='usernameOrEmail' placeholder="username or email"/>
          <InputField type='password' className='input' name='password' placeholder='password'/>
          <input type='submit' className='btn bg-gray-800 text-white cursor-pointer' value='login' />
          <p className='text-center'>or</p>
          <button type='button' className='btn bg-red-400 text-white'>Google</button>
          <button type='button' className='btn bg-blue-700 text-white'>Facebook</button>

          <span className='text-center mt-4'>
            Dont have an account yet?
            <Link href="/register">
              <a className='text-teal-600 ml-2'>Register</a>
            </Link>
          </span>
        </Form>
      </Formik>
    </main>
  )
}

export default Login