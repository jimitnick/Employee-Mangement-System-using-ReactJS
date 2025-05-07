import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full h-20 p-4 text-white'>
        <div className='flex items-center justify-center'>
            <h1>Employee Management System</h1>
        </div>
        <div className='flex items-center justify-center gap-3 p-4'>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#">About Us</a>
        </div>
    </div>
  )
}

export default Navbar
