import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'

const TodoList = () => {
    const tasks = useSelector(state => state)
    return (
        <div>
                        {tasks.map((el,i)=><TodoCard key={i} task={el} /*del={del} comp={comp}*/ />)}
        </div>
    )
}

export default TodoList
