import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>📝 My To-Do App</h1>
      <div className="input-area">
        <input
          type="text"
          value={task}
          placeholder="Enter a new task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty">No tasks yet — start adding one!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index} className={t.completed ? "completed" : ""}>
              <span onClick={() => toggleTask(index)}>{t.text}</span>
              <button onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;





