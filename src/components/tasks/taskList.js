import React, { useState, useEffect } from 'react';
import { TaskCard } from './taskCard';
import { getTaskByUserId, deleteTask, completeTask } from '../../modules/TaskManager';
import { useHistory } from "react-router-dom"

export const TaskList = () => {
  const [tasks, setTask] = useState([]);
  const history = useHistory();


  // const getTasks = () => {
  //   return getAllTasks().then(tasksFromAPI => {
  //     setTask(tasksFromAPI)
  //   });
  // };

  const loggedInUser = sessionStorage.getItem("nutshell_user")
    const getLoggedInTasks = () => {
    return getTaskByUserId(loggedInUser)
    .then(tasks => {
        setTask(tasks)
    })
}

  const handleDeleteTask = id => {
    deleteTask(id)
    .then(() => getLoggedInTasks());
  };

  const handleCompleteTask = id => {
    completeTask(id)
    .then(() => getLoggedInTasks());
  };

  useEffect(() => {
    getLoggedInTasks();
  }, []);


  return (
    <>
    <section className="section-content">
      <button type="button"
      className="button"
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
            handleCompleteTask={handleCompleteTask}
            />)}
    </div>
    </>
  );
};