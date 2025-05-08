import React from 'react'

const AdminDashboard = ({setUser}) => {
    
    const showAddTaskForm = () =>{
        
        console.log("Add Task")
        if (document.querySelector("#AddTaskForm").style.display ==  "flex"){
            document.querySelector("#AddTaskForm").style.display =  "none"
        }
        else{
            document.querySelector("#AddTaskForm").style.display =  "flex" 
        }
    }
    const showAddMemberForm = () =>{
        console.log("Add Member")
    }
    const changeBg = () => {
        document.querySelector("#addTaskBtn").addEventListener("mouseover",()=>{
            document.querySelector("#addTaskBtn").style.backgroundColor = "rgb(187 77 0)"
        })
        
        document.querySelector("#addTaskBtn").addEventListener("mouseleave",()=>{
            document.querySelector("#addTaskBtn").style.backgroundColor = ""
        })
    }
  return (
    <div className='w-full flex  flex-col justify-center'>
        <div className='mb-8 mt-10'>
            <h1 className='text-white text-6xl text-center'>Welocome to Admin Dashboard</h1>
        </div>
        <div className='w-full h-24 bg-white mb-8 flex justify-center items-center gap-16 text-xl'>
            <button id='addTaskBtn' className='px-4 py-3 border-amber-700 border-1 rounded-xl cursor-pointer' onClick={
                () => {
                    showAddTaskForm();
                }
            } onMouseMove={() => {
                changeBg()
            }}>Add Task</button>
            <button className='px-4 py-3 border-amber-700 border-1 rounded-xl cursor-pointer' onClick={
                () => {
                    showAddMemberForm();
                }
            }>Add Member</button>
            <button className='px-4 py-3 border-amber-700 border-1 rounded-xl cursor-pointer' onClick={
                () => {
                    setUser("");
                }
            }>Logout</button>
        </div>
        <div id='AddTaskForm' className='hidden absolute left-1/2 top-[63%] tranform -translate-x-1/2 -translate-y-1/2  items-center justify-center bg-zinc-700 rounded-xl w-[50%]'>
            <form className='p-3  flex-col gap-3 w-[120%] flex'>
                <h1 className='text-white text-2xl'>Create Task</h1>
                <h2 className='text-white'>Task Title</h2>
                <input type="text" name="tasktitle" id="title" placeholder='Eg, Make an UI Design' />
                <h2 className='text-white'>Description</h2>
                <textarea name="description" id="description" ></textarea>
                <h2 className='text-white'>Date</h2>
                <input type="date" name="date" id="date" />
                <h2 className='text-white'>Assign To</h2>
                <input type="text" name="assign" id="assign" />
                <h2 className='text-white'>Category</h2>
                <input type="text" name="category" id="category" />
                <input type="submit" value="Create Task" />
            </form>
        </div>
        <div className='hidden'></div>
    </div>
  )
}

export default AdminDashboard
