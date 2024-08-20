import React, { useState } from 'react'
import { IoIosSwitch } from "react-icons/io";
import './ToggleSwitch.css'
const ToggleSwitch = () => {


    const [isOn ,setIsOn]=useState(true)
    const handleToggleSwitch=()=>{
        setIsOn(!isOn);
    }
    const checkIsOn=isOn ? "on" : "off"
       const toggleBGColor={background: isOn ? '#4caf50' : "#f44335"}
  return (
    <>
    <h1 style={{color:'#000', textAlign:'center'}}>ToggleSwitch <IoIosSwitch/></h1>
    <div className='toggle-switch' style={toggleBGColor} onClick={handleToggleSwitch}>
        
        <div className={`switch ${checkIsOn}`}>
            <span className='switch-state'>{checkIsOn}</span>
        </div>
     
    </div>
    </>
  )
}

export default ToggleSwitch