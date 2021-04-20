import React, { useState, useEffect } from "react";
import { updateTask, getTaskById} from "../../modules/TaskManager";
import { useParams, useHistory} from "react-router-dom";

export const TaskEditForm = () => {
  const [task, setTask] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { taskId } = useParams();
  const history = useHistory();

  const handleFieldChange = (event) => {
    const stateToChange = { ...task };
    let editedVal = event.target.value;

    if (event.target.id.includes("Id")) {
      editedVal = parseInt(editedVal);
    }

    stateToChange[event.target.id] = editedVal;
    setTask(stateToChange);
  };

  const updateExistingTask = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedTask = {
      id: taskId,
      userId: task.userId,
      name: task.name,
      date: task.date,
      completed: task.completed
    };

    updateTask(editedTask)
    .then(() => history.push("/tasks"));
  };

  useEffect(() => {
    getTaskById(taskId)
    .then((task) => {
      setTask(task);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Task name:</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="name"
                value={task.name}
              />

            <label htmlFor="date">Deadline:</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="date"
                value={task.date}
              />

          </div>

          <div className="button">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingTask}
              className="button"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};