import React, { useState, useEffect } from "react";
import { getTaskById } from "../../modules/TaskManager";
import './taskSpotlight.css'

export const TaskSpotlight = ({taskId}) => {
  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskById(taskId).then(task => {
      setTask(task);
    });
  }, [taskId]);

  return (
    <div className="task-spotlight">
      <div>
        <h4>{task.name}</h4>
        <p>{task.date}</p>
      </div>
    </div>
  );
};