import React, { useState } from 'react'
import randomColor from "randomcolor";


const Form = (props) => {
    const [newTask, setNewTask] = useState("");
    const [error, setError] = useState(false);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let color = randomColor({
            format: 'rgba',
   alpha: .3
         });
        if(newTask.trim() === '') {
           setError(true)
            return false
        }
        setError(false)
    
        const id = new Date().getTime();
        const name = newTask;
    
        const task = { id, name, color };

        props.onTaskAdd(task)
    
        setNewTask("");
      };

    return (
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          autoFocus
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='submit' type="submit">OK !</button>
        <div>
        {error && <small> Veuillez entrer une tache. </small>}
        </div>
      </form>
    )
}

export default Form
