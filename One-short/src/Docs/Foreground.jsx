import React from 'react'
import Card from './Card.jsx'

const Foreground = () => {
    // const ref =useRef(null)
    const data=[{
        desc1:"Lorem ipsum dolor sit amet consectetur. ",
        fileSize:'.9mb',
        close:false,
        tag:{isOpen:true ,tagTitle:"Update", tagColor:'green'},
    },
    {
        desc1:"Lorem ipsum dolor sit amet consectetur. ",
        fileSize:'.5mb',
        close:false,
        tag:{isOpen:true ,tagTitle:"Download Now..", tagColor:'green'},
    },
    {
        desc1:"Lorem ipsum dolor sit amet consectetur. ",
        fileSize:'.4mb',
        close:true,
        tag:{isOpen:false ,tagTitle:"Download Now..", tagColor:'green'},
    },
    {
        desc1:"Lorem ipsum dolor sit amet consectetur. ",
        fileSize:'.2mb',
        close:false,
        tag:{isOpen:false ,tagTitle:"Download Now..", tagColor:'green'},
    },
    
]
  return (
    <>
      <div className='fixed z-[3] top-0 left-0 x-[3] w-full h-full bg-sky-800/4 flex gap-5 flex-wrap p-6'>
        {/* <Card/> */}
        {data.map((item, index)=>(
            <Card  data={item} />
            // reference={ref}
        ))}
        </div>
        
    </>
  )
}

export default Foreground