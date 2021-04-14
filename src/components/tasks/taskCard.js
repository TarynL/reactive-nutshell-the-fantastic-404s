import React from "react"
import "./task.css"
import { Link } from "react-router-dom";


export const TaskCard = ({ task, handleDeleteTask, handleCompleteTask}) => {
  
  return (
    <div className="card" hidden={task.completed}>
      <div className="card-content">
        <h3>Name: <span className="card-taskName">{task.name}</span></h3>
        <p>Deadline: {task.date}</p>
        <label>Complete: <input name="complete" type="checkbox" onChange={() => handleCompleteTask(task)} />
            </label>        
        <Link to={`/tasks/${task.id}/edit`}>
          <button>Edit</button>
          </Link>
        <button type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}