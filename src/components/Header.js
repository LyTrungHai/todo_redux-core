import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../auth/index";

export default function Header() {
  const person = useSelector((state) => state.loginReducer.userLogin);
  let { name } = person.user;
  const [redirect, setRedirect] = useState(false);

  const redirectToLogin = () => {
    if (redirect) {
      return <Navigate to="/" />;
    }
  };
  const handleLogout = (event) => {
    event.preventDefault();
    logout(() => {
      setRedirect(true);
    });
  };
  return (
    <div>
      {redirectToLogin()}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <h1 className="navbar-brand" href="#">
          TODOS LIST by <span> {name} </span>
        </h1>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
        <button className="btn btn-danger" onClick={handleLogout}>
          Log out
        </button>
      </nav>
    </div>
  );
}
