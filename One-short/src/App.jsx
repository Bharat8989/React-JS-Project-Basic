import React from 'react'
import { useState } from 'react'
import Componets from './Componets.jsx';

const App = () => {
var [value,setValue]=  useState(0);
  return (
    <div>
      <h1>hello world</h1>
      <h4>{value}</h4>

      <button onClick={()=>(setValue(value+1))} className='px-3 py-1 bg-green-500 rounded-md text-xs'>click</button>
      <Componets age={value} data={{age:23,name:'Bharat'}}/>
    </div>
  )
}

export default App