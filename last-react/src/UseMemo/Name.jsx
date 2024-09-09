import React from 'react'

const Name = ({Name}) => {
    console.log("name is")
  return (
    <div>
        <h2>Name is:{Name}</h2>
    </div>
  )
}

export default React.memo(Name)