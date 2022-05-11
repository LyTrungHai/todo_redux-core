import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/todoAction";
import "../../src/App.css";

export default function TodoForm({ error, setError }) {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") {
      setError("task can't be empty!");
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      complete: false,
      edit: false,
    };
    dispatch(addTodo(newTodo));
    setTodo("");
    setError("");
  };

  const handleBlur = () => {
    setError("");
  };

  return (
    <div className="text-center" onBlur={handleBlur}>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          autoFocus
          className="input-text"
          value={todo}
          type="text"
          onChange={handleChange}
          placeholder="Enter todo..."
        />
        <button className="btn-submit" type="submit">
          Add todo
        </button>
      </form>
      {error && <span className="text-danger pl-3">{error}</span>}
    </div>
  );
}
