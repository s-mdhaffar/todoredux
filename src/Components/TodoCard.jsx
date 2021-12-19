import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { comp, del } from '../Redux/Actions';
import EditTask from './EditTask';

const TodoCard = ({task}) => {
    const dispatch = useDispatch();
    return (
        <div >
            <h1 className={task.isDone?"Complete":""}>{task.action}</h1>
            <Button variant='danger' onClick={()=>dispatch(del(task.id))} >Delete</Button>
            <Button variant='success' onClick={()=>dispatch(comp(task.id)) }>{task.isDone?"Undo":"Complete"}</Button>
            <EditTask task={task}/>
        </div>
    )
}

export default TodoCard
