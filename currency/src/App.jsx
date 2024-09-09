import React from 'react'
// import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

const App = () => {
  return (
    <UserContextProvider>
      {/* <h1 className='bg-rose-500'>hello world</h1> */}
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App