import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";
// import axios from "axios";
// import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/action/loginAction";
import { useNavigate } from "react-router-dom";
// import { object } from "yup";
import { ErrorMessage } from "@hookform/error-message";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [userInfo, setUserInfo] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const PATTERN_VALID_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = (userData) => {
    console.log(userData);
    dispatch(loginAction(userData, handleLoginSucces));
    console.log(dispatch);
  };
  const handleLoginSucces = () => {
    navigate("/todo");
  };

  return (
    <div className="bodyLogin">
      <form
        className="box"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="form-inner">
          <h2 className="title">Login</h2>
          {/* ACCOUNT LOGIN  */}
          <pre className="text-light">
            {"email: trunghai@gmail.com ; password: 123123q"}
          </pre>
          {/* // */}
          <div className="form">
            <div className="form-group">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: "This field is required " })}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <span style={{ color: "#ec5990" }}>{message}</span>
                )}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "This field is required ",
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <span style={{ color: "#ec5990" }}>{message}</span>
                )}
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
