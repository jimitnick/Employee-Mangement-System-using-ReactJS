import React from 'react'
import Card from './card'
import Tasklists from '../TaskList/Tasklists'
import Login from '../Auth/Login'
const EMployeeDashboard = ({setUser}) => {
  return (
    <>
        <div className='flex w-full h-20 bg-zinc-800 p-4 items-center justify-between'>
            <div>
                <h1 className='text-white text-3xl flex justify-center gap-2 items-center'>Hi <span>Employee</span> 👋</h1>
            </div>
            <div className='flex items-center justify-center text-white gap-16 text-xl'>
                <a href="">Home</a>
                <button className='bg-amber-700 p-4 w-36 rounded-xl' onClick={
                    () =>{
                        setUser("");
                        console.log("Hi logged out");
                        
                    }
                }>Logout</button>
            </div>
        </div><hr className='text-white'/>
        <div className='flex flex-col w-full p-4 gap-8 h-80 justify-center items-center bg-zinc-950'>
            <div className='flex w-full justify-center gap-8'>
                <Card Number = {0} TaskValue = {"New"} bg = {"bg-red-500"}/>
                <Card Number = {3} TaskValue = {"Completed"} bg = {"bg-blue-500"}/>
                <Card Number = {0} TaskValue = {"Accepted"} bg = {"bg-green-500"}/>
                <Card Number = {1} TaskValue = {"Failed"} bg = {"bg-yellow-500"}/>
            </div>
        </div>
        
        <div id="tasklist" className='flex gap-5 p-4 w-full h-[35%] overflow-x-auto items-center justify-center flex-nowrap'>
            <Tasklists priority={"High"} deadline = {"20 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"Low"} deadline = {"8 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"Medium"} deadline = {"20 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"Low"} deadline = {"8 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"High"} deadline = {"20 Mar 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"Medium"} deadline = {"8 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"High"} deadline = {"30 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"Medium"} deadline = {"8 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"High"} deadline = {"20 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
            <Tasklists priority={"Low"} deadline = {"8 Feb 2024"} heading = {"Ek aur task"} description = {"Task has to be completed in the stipulated time on time and by the time"}/>
        </div>
    </>
    
  )
}

export default EMployeeDashboard
