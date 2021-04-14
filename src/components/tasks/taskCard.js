import React, { useState } from "react"
import "./task.css"
import { Link } from "react-router-dom";

export const TaskCard = ({ task, handleDeleteTask }) => {
  const [checked, setChecked] = useState(false);
  // const [isCompleted, setIsCompleted] = useState((task.completed) === true)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-taskName">{task.name}</span></h3>
        <p>Deadline: {task.date}</p>
        <div><label>Complete: <input name="complete" type="checkbox" checked={checked} onChange={handleChange} 
        />
            </label></div>  
        <Link to={`/tasks/${task.id}/edit`}>
          <button>Edit</button>
          </Link>      
        <button type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

// disabled={isCompleted ? false : true}