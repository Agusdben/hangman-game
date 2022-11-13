import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button
      className='border-2 capitalize text-2xl px-2 py-1 text-center rounded-md hover:bg-slate-800 hover:text-white transition-colors cursor-pointer'
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
