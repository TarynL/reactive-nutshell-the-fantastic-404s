const remoteURL = "http://localhost:8088"

  export const getTaskById = (id) => {
   return fetch(`${remoteURL}/tasks/${id}`)
    .then(response => response.json())
  }

  export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks`)
    .then(response => response.json())
  }

  export const deleteTask = (id) => {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  }

  export const addTask = (newTask) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(response => response.json())
  }

  export const updateTask = (editedTask) => {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTask),
    }).then((data) => data.json());
  };

  export const getTaskId = () => {
    return fetch(`${remoteURL}/tasks`)
      .then(result => result.json())
      .then(tasks => {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        const randomTask = tasks[randomIndex];
        return randomTask.id;
    });
  }

//   export const getTaskDate = (date) => {
//     return fetch(`${remoteURL}/tasks/${task.date}`)
//       .then(result => result.json())
//       .then(tasks => {
//         const sortDate = tasks.sort((a, b) => a - b)
//         return task.date(a)
//     });
//   }