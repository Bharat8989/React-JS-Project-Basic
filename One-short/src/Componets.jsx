import React, { useState } from 'react'

const Componets = ({age ,data}) => {
  const [value ,setValue]=useState(false)
  return (
    <>
  
    <div>Componets</div>
    <h1>{age}</h1>
     <h4 className={`${value==false ? "text-red-600" : 'text-blue-600'}`}>{value=== false ? "suraj" : 'hey'}</h4>

     <button onClick={()=>setValue(!value)}>change</button>
    <h2>{data.age}</h2>
    <h2>{data.name}</h2>
    </>
  )
}

export default Componets