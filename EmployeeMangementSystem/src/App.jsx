import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Auth/Login'
import EMployeeDashboard from './components/Dashboard/EMployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {
  const [user,setUser] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);
  const [loggedInUser , setLoggedInUser] = useState([]);
  console.log(userData);
  
  const loginHandler = (email,passwd) =>{
    if(userData && userData.employees.find((e) => email == e.email && passwd == e.password)){
      const employee = userData.employees.find((e) => e.email == email && e.password  == passwd)
      setLoggedInUser(employee)
      setUser("Employee")
    }
    else if (email == "admin@gmail.com" && passwd == "123"){
      const admin = userData.admin.find((e) => e.email == email && e.password  == passwd)
      setLoggedInUser(admin)
      setUser("Admin")
    }
    else{
      alert("Invalid Credentials")
      setUser(null);
    }
  }
  
  
  
  
  return (
    <>
    <div className='w-screen h-screen bg-zinc-950'>
      {user ? <Navbar /> : ''}
      {!user ? <Login loginHandler = {loginHandler}/> : ""}
      {user == "Admin" && <AdminDashboard setUser = {setUser} adminName = {loggedInUser}/>}
      {user == "Employee" && <EMployeeDashboard setUser = {setUser} employeeName = {loggedInUser.Name}/>}
    </div>
    </>
  )
}

export default App
