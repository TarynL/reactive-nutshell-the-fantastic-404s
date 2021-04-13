import React, { useState, useEffect } from 'react';
//import the components we will need
import { TaskCard } from './taskCard';
import { getAllTasks, deleteTask } from '../../Modules/taskManager';
import { useHistory } from "react-router-dom"

export const TaskList = () => {
  const [tasks, setTask] = useState([]);
  const history = useHistory();


  const getTasks = () => {
    return getAllTasks().then(tasksFromAPI => {
      setTask(tasksFromAPI)
    });
  };

  const handleDeleteTask = id => {
    deleteTask(id)
    .then(() => getTasks());
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
    <section className="section-content">
      <button type="button"
      className="btn"
      onClick={() => {history.push("/tasks/create")}}>
      Add Task
     </button>
    </section>

    <div className="container-cards">
      {tasks.map(task => 
      
      <TaskCard 
            key={task.id} 
            task={task} 
            handleDeleteTask={handleDeleteTask}
            />)}
    </div>
    </>
  );
};