import React, { useState, useEffect } from "react";
import { TaskSpotlight } from "../components/tasks/taskSpotlight"
import { getTaskId } from "../modules/taskManager"
import "./home.css"

export const Dashboard = () => {
  const [taskSpotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightTask = () => {
    getTaskId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightTask();
  }, []);

  return (
    <>
        <div className="title"><h1>Welcome to the 404</h1></div>
        <div className="Highlight">
             <h3 className="taskHighlight">Upcoming Task</h3>
            {taskSpotlightId && <TaskSpotlight taskId={taskSpotlightId} />}
            <button onClick={refreshSpotlightTask}>Next</button>
        </div>
    </>
  );
};