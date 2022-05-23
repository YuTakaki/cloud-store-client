import { FieldHookConfig, useField } from 'formik'
import React from 'react'

interface InputFieldProps {
  type : string,
  className: string
}

const InputField = ({type, className, ...props} :InputFieldProps & FieldHookConfig<string>) => {
  const [fields, meta] = useField(props)
  return (
    <div className='flex flex-col'>
      <input
        type={type}
        className={`${className} ${meta.touched && meta.error ? 'border-red-500' : ''}`}
        {...fields}
        placeholder='username or email'
      />
      {meta.touched && meta.error && (
        <p className='text-sm text-red-500 px-3 -mt-2'>{meta.error}</p>
      )}

    </div>
  )
}

export default InputField