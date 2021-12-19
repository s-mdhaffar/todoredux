import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { edit } from '../Redux/Actions'

const EditTask = ({task}) => {

    const [editedTask, setEditedTask] = useState(task.action)

const handleInput =(e)=>{
setEditedTask(e.target.value)
}
const dispatch = useDispatch()

const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(edit({id:task.id,
        action:editedTask,
        isDone:task.isDone})); 
    handleClose()
}

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" value={editedTask} onChange={handleInput} />
                <button type="submit">Edit</button>
            </form> */}
<>
<Button variant="primary" onClick={handleShow}>
  Edit
</Button>

<Modal  show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Task</Modal.Title>
  </Modal.Header>
  <Form onSubmit={handleSubmit}>
      <Modal.Body >
          <input type="text" value={editedTask} onChange={handleInput} />
        </Modal.Body></Form>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button  type="submit" variant="primary" onClick={handleSubmit}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
</>
        </div>
    )
}


export default EditTask
