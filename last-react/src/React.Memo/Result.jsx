import React from 'react'


const Result = ({result}) => {
    console.log("inside result")
  return (
    <div>
      <h2>Result is:{result}</h2>
    </div>
  )
}

export default React.memo(Result)
