import { FieldHookConfig, useField } from 'formik'
import React from 'react'

interface InputFieldProps {
  type : string,
  className: string,
  placeholder: string
}

const InputField = ({type, className,placeholder, ...props} :InputFieldProps & FieldHookConfig<string>) => {
  const [fields, meta] = useField(props)
  return (
    <>
      <input
        type={type}
        className={`${className} ${meta.touched && meta.error ? 'border-red-500' : ''}`}
        {...fields}
        placeholder={placeholder}
      />
      {meta.touched && meta.error && (
        <p className='text-sm text-red-500 px-3 -mt-2'>{meta.error}</p>
      )}

    </>
  )
}

export default InputField