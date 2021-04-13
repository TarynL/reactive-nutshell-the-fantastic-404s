import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addTask } from '../../modules/taskManager';

export const TaskForm = () => {

	const [task, setTask] = useState({
		name: "",
		date: "",
		location: ""
	});

	const history = useHistory();

	const handleControlledInputChange = (event) => {
		const newTask = { ...task }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newTask[event.target.id] = selectedVal
		setTask(newTask)
	}

	const handleClickSaveTask = (event) => {
		event.preventDefault() 

		if (task.name === 0) {
			window.alert("Please enter task name")
		} else {
			addTask(task)
				.then(() => history.push("/tasks"))
		}
	}

	return (
		<form className="taskForm">
			<h2 className="taskForm__title">Add New Task</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Task name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task name" value={task.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="date">Task deadline:</label>
					<input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task date" value={task.date} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveTask}>
				Save Task
          </button>
		</form>
	)
};