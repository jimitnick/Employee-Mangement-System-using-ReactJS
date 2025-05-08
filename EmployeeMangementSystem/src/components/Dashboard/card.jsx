import React from 'react'

const card = (props) => {
  return (
    <div className={`flex flex-col w-[40%] h-40 rounded-xl ${props.bg} justify-center items-center text-white text-center`}>
      <h1 className='text-6xl'>{props.Number}</h1>
      <h2 className='text-2xl text-zinc-900'>{props.TaskValue}</h2>
    </div>
  )
}

export default card
