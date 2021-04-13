import React, { useState, useEffect } from "react";
import { getTaskById } from "../../Modules/taskManager";

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
        <h3>{task.name}</h3>
        <p>{task.date}</p>
      </div>
    </div>
  );
};