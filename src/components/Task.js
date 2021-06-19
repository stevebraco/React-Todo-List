import React from 'react'


const Task = ({task, handleDelete}) => {
   

    return (
        <li  style={{ background : task.color }}   > <button className='delete' onClick={() => handleDelete(task.id)} ><i className='bx bx-x'></i></button> {task.name}  </li>
    )
}

export default Task
