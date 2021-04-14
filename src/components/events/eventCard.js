import React from "react"
import "./task.css"
import { Link } from "react-router-dom";

export const TaskCard = ({ task, handleDeleteEvent }) => {

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-taskName">{task.name}</span></h3>
        <p>Deadline: {task.date}</p>
        <Link to={`/tasks/${task.id}/edit`}>
          <button>Edit</button>
          </Link>
        {/* <label>Complete: <input name="complete" type="checkbox" checked={this.isComplete} onChange={this.handleInputChange} />
            </label>         */}
        <button type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}