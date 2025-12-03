import { useState, useEffect } from "react";
// import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all | active | completed

  // TODO: load todos from localStorage
  // TODO: save todos to localStorage

  const addTodo = (text) => {
    // TODO: implement
  };

  const toggleTodo = (id) => {
    // TODO: implement
  };

  const deleteTodo = (id) => {
    // TODO: implement
  };

  const filteredTodos = todos; // TODO: implement filtering

  return (
    <div className="app">
      <h1>Todo App</h1>

      {/* TODO: input + button */}
      {/* TODO: filter buttons */}
      {/* TODO: todos list */}
    </div>
  );
}
