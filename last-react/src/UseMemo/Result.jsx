import React,{useMemo} from 'react'


const Result = ({result, subject}) => {
    console.log("inside result")
    const percentage=useMemo(()=>{
        console.log("use memo")
        return (result*100)/100
    },[])
  return (
    <div>
      <h2>Result is:{result}</h2>
      <h2>percentage is:{percentage}%</h2>
      <h2>Subject is:{subject}</h2>
    </div>
  )
}

export default React.memo(Result)
