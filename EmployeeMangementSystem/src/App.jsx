import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Auth/Login'
import EMployeeDashboard from './components/Dashboard/EMployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {
  const [user,setUser] = useState(null);
  const loginHandler = (email,passwd) =>{
    if(email == "employee@gmail.com" && passwd == "123"){
      setUser("Employee")
    }
    else if (email == "admin@gmail.com" && passwd == "123"){
      setUser("Admin")
    }
    else{
      alert("Invalid Credentials")
    }
  }
  
  
  return (
    <>
    <div className='w-screen h-screen bg-zinc-950'>
      {/* <Navbar /> */}
      {!user ? <Login loginHandler = {loginHandler}/> : ""}
      {user == "Admin" && <AdminDashboard setUser = {setUser}/>}
      {user == "Employee" && <EMployeeDashboard setUser = {setUser}/>}
    </div>
    </>
  )
}

export default App
