import React from 'react';
import { GiNotebook } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";
import { MdOutlineAdsClick } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div 
      drag 
      dragConstraints={reference}  
      className='relative w-60 h-[350px] rounded-[50px] bg-zinc-200/10 text-white px-8 py-10 overflow-hidden mb-6' /* Add margin-bottom for spacing between cards */
    >
      <GiNotebook />
      <p className='text-sm leading-tight mt-5 font-semibold'>
        <h1 className='flex justify-center text-xl font-bold'>{data.h1Tag}</h1>
        <ol>
          <li>1 {data.desc1.one}</li>
          <li>2 {data.desc1.two}</li>
          <li>3 {data.desc1.three}</li>
          <li>4 {data.desc1.four}</li>
          <li>5 {data.desc1.five}</li>
        </ol>
      </p>

      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center px-8 py-3 justify-between mb-3'>
          <a href="https://www.w3schools.com/html/">
            <h5>
              {data.fileSize}
              <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'>
                <MdOutlineAdsClick color='black'/>
              </span>
            </h5>
          </a>
        </div>

        {data.tag.isOpen && (
          <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
