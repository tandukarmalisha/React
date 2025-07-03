import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState(""); // input value
  const [todos, setTodos] = useState([]); // list of tasks (objects with text and done)

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    // Add a new object with text and done = false
    setTodos([...todos, { text: task, done: false }]);
    setTask(""); // clear input
  };

  // Delete task by index
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Toggle done status of a task
  const toggleDone = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h2>📝 To-Do List</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: "10px", width: "70%", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>
          Add
        </button>
      </form>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              background: "#f4f4f4",
              margin: "10px 0",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "5px",
            }}
          >
            <label style={{ flex: 1, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(index)}
                style={{ marginRight: "10px" }}
              />
              <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                {todo.text}
              </span>
            </label>

            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                padding: "5px 10px",
                borderRadius: "3px",
                marginLeft: "10px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
