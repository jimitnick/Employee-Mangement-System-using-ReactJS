import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Auth/Login'
import EMployeeDashboard from './components/Dashboard/EMployeeDashboard'
const App = () => {
  return (
    <>
    <div className='w-screen h-screen bg-zinc-950'>
      {/* <Navbar /> */}
      {/* <Login /> */}
      <EMployeeDashboard />
    </div>
    </>
  )
}

export default App
