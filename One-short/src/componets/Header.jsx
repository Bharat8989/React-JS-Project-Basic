'use clint'
import React from 'react'

const Header = (props) => {
  return (
    <>
      <div className='h-16 px-5   bg-slate-500 flex items-center justify-between'> 
      <h2>{props.data}</h2>
      <div className='flex gap-8'>
        <h4>{props.data1}</h4>
        <h4>Career</h4>

        <h4>Blog</h4>
        <h4>Account</h4>
        
      </div>
      </div>
    </>
  )
}

export default Header
