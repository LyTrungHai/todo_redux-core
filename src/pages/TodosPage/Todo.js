import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../auth/index";
import Header from "../../components/Header";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

export default function Todo() {
  return (
    <>
      <Header />
      <div className="container-todo">
        <div className="inner">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </>
  );
}
