import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";
import {IoClose} from 'react-icons/io5'
import { motion } from "framer-motion"



const Card = ({data}) => {
    // , reference
    // console.log("hello world")
  return (
    // 
    <motion.div drag dragConstraints  className='relative w-60 h-72 rounded-[50px] bg-zinc-200/10 text-white px-8 py-10 overflow-hidden' >
      <GiNotebook/>
      <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc1}</p>
      <div className='footer absolute bottom-0  w-full  left-0'>
        <div className='flex items-center px-8 py-3 justify-between  mb-3'>
            <h5>{data.fileSize}</h5>
            <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'>
                {data.close ? <IoClose size='.6rem' color='#000'/> : <FaArrowDown size='.7rem' color='#000'/> }
                </span>
        </div>
        {
            data.tag.isOpen ? (
                <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            ) : null
        }
       
      </div>
    </motion.div>

    
  )
}

export default Card