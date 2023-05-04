import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get('/api/tasks')
      .then(res => {setTasks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addTask = e => {
    e.preventDefault();
    axios.post('/api/tasks', { task: newTask })
      .then(res => {
        const updatedTasks = tasks.concat(res.data);
        setTasks(updatedTasks);
        setNewTask('');
      })
      .catch(err => console.log(err));
  }

  const deleteTask = id => {
    axios.delete(`/api/tasks/${id}`)
      .then(res => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.task}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
