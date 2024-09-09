import React from 'react'

const PWhome = () => {
  return (
    <>
      {/* nav bar start */}
      <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 items-center'>
        <div className='text-2xl text-zinc-950 font-bold'>
          PW Skills
        </div>
        <ul className='hidden md:flex font-semibold'>
          <li className='mx-4 cursor-pointer'>Home</li>
          <li className='mx-4 cursor-pointer'>About Us</li>
          <li className='mx-4 cursor-pointer'>Contact Us</li>
        </ul>
        <div className='hidden md:block text-xl text-zinc-950 font-bold px-4 py-2 bg-red-700 rounded-md cursor-pointer hover:bg-green-600'>
          Login
        </div>
        <div className='md:hidden'>
          <a className='text-4xl' href="#">&#8801;</a>
        </div>
      </nav>
      {/* nav bar end */}

      {/* hero section */}
      <header className='w-full'>
        <img className='w-full hidden md:block' src="https://th.bing.com/th/id/OIP.xORGXp2jMTW3uoCcfKpOdAHaCz?rs=1&pid=ImgDetMain" alt="Hero Image" />
        <img className='w-full md:hidden' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="Mobile Hero Image" />
      </header>
      {/* hero section end */}

      {/* our student section */}
      <section className='w-full flex flex-col items-center text-center p-10 bg-gray-100'>
        <div className='w-full flex flex-col items-center mb-12'>
          <p className='text-indigo-800 font-bold text-3xl md:text-4xl'>"Pure HardWork, No Shortcuts!"</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4'></div>
        </div>
        <div className='w-full flex flex-wrap justify-evenly'>
          {Array(6).fill().map((_, index) => (
            <div key={index} className='w-1/2 sm:w-1/3 lg:w-1/6 flex flex-col items-center mb-12'>
              <img className='w-44 h-44 bg-white mb-2' src="https://icon-library.com/images/career-icon-png/career-icon-png-7.jpg" alt="Course Icon" />
              <p className='text-3xl font-bold text-white'>600+</p>
              <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
            </div>
          ))}
        </div>
      </section>
      {/* our student section end */}

      {/* product section */}
      <section className='w-full flex flex-col items-center text-center p-10 bg-gray-200'>
        <div className='w-full flex flex-col items-center mb-12'>
          <p className='text-indigo-800 font-bold text-3xl md:text-4xl'>Our Product</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4'></div>
        </div>
        <div className='w-full flex flex-wrap justify-evenly'>
          {Array(5).fill().map((_, index) => (
            <div key={index} className='w-1/2 sm:w-1/3 lg:w-1/6 flex flex-col items-center mb-12'>
              <img className='w-44 h-44 bg-white mb-2' src="https://icon-library.com/images/career-icon-png/career-icon-png-7.jpg" alt="Product Icon" />
              <p className='text-3xl font-bold text-white'>600+</p>
              <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
            </div>
          ))}
        </div>
      </section>
      {/* product section end */}

      {/* footer section */}
      <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row justify-between md:px-12">
        <div className='mb-8'>
          <img className='w-40 h-16 mb-4' src="" alt="Footer Logo" />
          <p className='mb-4'>Email us: Lorem ipsum dolor sit.</p>
          <img className='w-32 h-32' src="" alt="Footer Image" />
        </div>
        <div className='mb-8'>
          <h2 className='font-bold text-xl mb-2'>PW Skills</h2>
          <div className='border-b-2 border-yellow-500 pb-2'>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className='mb-8'>
          <h2 className='font-bold text-xl mb-2'>PW Skills</h2>
          <div className='border-b-2 border-yellow-500 pb-2'>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className='mb-8'>
          <h2 className='font-bold text-xl mb-2'>PW Skills</h2>
          <div className='border-b-2 border-yellow-500 pb-2'>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
      {/* footer section end */}
    </>
  )
}

export default PWhome
