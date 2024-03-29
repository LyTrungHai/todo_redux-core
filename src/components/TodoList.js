import React, { useRef } from "react";
import {
  deleteTodo,
  isComplete,
  editTodo,
  updateTodo,
} from "../redux/action/todoAction";
import { useDispatch, useSelector } from "react-redux";
// import { set } from "react-hook-form";

export default function TodoList({ setError }) {
  const getTodo = useSelector((state) => state.todoReducer);
  console.log(getTodo);
  const dispatch = useDispatch();
  const saveRef = useRef({});

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const checkComplete = (todo) => {
    dispatch(isComplete(todo));
  };

  const handleEdit = (todo) => {
    dispatch(editTodo(todo));
  };

  const handleUpdate = (todo) => {
    const newTextUpdate = saveRef.current[todo.id].value;
    if (newTextUpdate.trim() === "") {
      setError("task can't be empty!");
      return;
    }
    dispatch(updateTodo(todo, newTextUpdate));
    setError("");
  };

  return (
    <ul className="text-center">
      {getTodo.map((todo) => (
        <div key={todo.id} className="position-relative Item">
          <>
            {/* TODO ITEM  */}
            {!todo.edit && (
              <li className={todo.complete ? "todo_item strike" : "todo_item"}>
                <span className="todo_text">{todo.text}</span>
                <i
                  title="Edit Todo"
                  onClick={() => handleEdit(todo)}
                  className="todo-edit_btn fa-solid fa-pen"
                ></i>
              </li>
            )}
            {todo.edit && (
              <li className={todo.complete ? "todo_item strike" : "todo_item"}>
                <input
                  autoFocus={true}
                  type="text"
                  defaultValue={todo.text}
                  ref={(e) => (saveRef.current[todo.id] = e)}
                  className="input-rename"
                />
                <i
                  className="todo-edit_btn fa-solid fa-bookmark"
                  onClick={() => {
                    handleUpdate(todo);
                  }}
                ></i>
              </li>
            )}
            {/* CHECKBOX COMPLETE  */}
            <label
              className="custom-checkbox"
              tab-index="0"
              aria-label="Checkbox Label"
            >
              <input
                checked={todo.complete}
                type="checkbox"
                onChange={() => checkComplete(todo)}
              />
              <span className="checkmark"></span>
            </label>
            {/* DELETE ICON  */}
            <i
              title="Delete Todo"
              className="todo-delete_btn fa-solid fa-trash"
              onClick={() => handleDeleteTodo(todo)}
            ></i>
          </>
        </div>
      ))}
    </ul>
  );
}

{
  /* <li className={todo.complete ? "todo_item strike" : "todo_item"}>
            <span>{todo.text}</span>
            <i
              onClick={() => handleEdit(todo)}
              className="todo-edit_btn fa-solid fa-pen"
            >
              edit
            </i>
            <i
              className="todo-delete_btn fa-solid fa-trash"
              onClick={() => handleDeleteTodo(todo)}
            ></i>

           
            <label
              className="custom-checkbox"
              tab-index="0"
              aria-label="Checkbox Label"
            >
              <input
                checked={todo.complete}
                type="checkbox"
                onChange={() => checkComplete(todo)}
              />
              <span className="checkmark"></span>
            </label>
          </li> */
}
