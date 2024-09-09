import React from 'react'
// import About from '../About/About'
// import Link from 'next/Link'
const Routing = () => {
  return (
    <>
    <div className='px-5'>
        <h1>This is Home Page</h1>
        <a className='px-1' href="/About">About</a>
        <a className='px-1' href="/Product">Product</a>
        <a className='px-1' href="/Contact">Contact</a>
    </div>
    </>
  )
}

export default Routing