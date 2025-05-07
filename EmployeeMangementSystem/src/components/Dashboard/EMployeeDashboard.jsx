import React from 'react'
import Card from './card'
const EMployeeDashboard = () => {
  return (
    <>
        <div className='flex w-full h-12 bg-purple-900 p-4 items-center justify-between'>
            <div>
                <h1 className='text-white flex justify-center gap-2 items-center'>Hi <span>Employee</span> 👋</h1>
            </div>
            <div className='flex items-center justify-center text-white gap-16'>
                <a href="">Home</a>
                <a href="">Logout</a>
            </div>
        </div><hr className='text-white'/>
        <div className='flex w-full h-96 bg-purple-900 items-center justify-between p-4'>
            <div className='flex w-1/4 h-3/4 justify-center items-center bg-amber-50 rounded-xl'>
                <img src="" alt="" />
            </div>
            <div className='flex-col  text-white justify-between items-center'>
                <h2>Name : <span></span></h2>
                <h2>EMP Id : <span></span></h2>
                <h2>Address : <span></span></h2>
                <h2>Phone : <span></span></h2>
                <h2>Email : <span></span></h2>
            </div>
        </div>
        <div className='flex w-full bg-amber-50 p-4'>
            <Card />
        </div>
        
    </>
    
  )
}

export default EMployeeDashboard
