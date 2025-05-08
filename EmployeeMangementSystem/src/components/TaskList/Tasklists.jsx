import React from 'react'

const Tasklists = (props) => {
    var Bg = "";
    if(props.priority == "High"){
        Bg = "bg-red-400" 
    }
    else if(props.priority == "Low"){
        Bg = "bg-green-600" 
    }
    else{
        Bg = "bg-blue-600" 
    }
  return (
    <div className={`flex flex-col flex-shrink-0 h-full w-[400px] ${Bg} rounded-xl`}>
        <div className='flex justify-between p-4 items-center'>
            <h2 className='px-3 py-2 rounded-sm bg-amber-700 text-white'>{props.priority}</h2>
            <h2 className='text-white'>{props.deadline}</h2>
        </div>
        <div className='flex flex-col w-full justify-between mt-10 p-4'>
            <h1 className='text-white text-3xl mb-4 font-bold'>{props.heading}</h1>
            <h3 className='text-white'>{props.description}</h3>
        </div>
    </div>
  )
}

export default Tasklists
