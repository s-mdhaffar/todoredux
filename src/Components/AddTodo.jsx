import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/Actions'

const AddTodo = () => {

    const [newTask, setNewTask] = useState("")

const handleInput =(e)=>{
setNewTask(e.target.value)
}
const dispatch = useDispatch()

const handleSubmit=(e)=>{
    e.preventDefault();
    newTask.trim()===""?
    alert('insert Text Please'):
    dispatch(add({id:Math.random(),
        action:newTask,
        isDone:false})) 
    setNewTask("")
}

    return (
        <div>
            <h1>ToDO Redux</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTask} onChange={handleInput} />
                <Button variant='dark' type="submit">Add</Button>
            </form>
        </div>
    )
}

export default AddTodo
