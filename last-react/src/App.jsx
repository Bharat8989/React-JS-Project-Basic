import React from 'react'
// import Name from './React.Memo/Name'
// import Result  from './React.Memo/Result'
// import Evn from './Evn'

import Name from './UseMemo/Name.jsx'
import Result  from './UseMemo/Result.jsx'

const App = () => {

  return (
    <div className='text-center gap-3 m-6'>

      <Name Name={"suraj"}/>
      <Result result={79} subject={'he'}/>


      {/* <Evn/> */}
    </div>
  )
}

export default App