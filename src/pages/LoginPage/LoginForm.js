import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";
import axios from "axios";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/action/loginAction";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    errors,
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const PATTERN_VALID_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = (userData) => {
    console.log(userData);
    dispatch(loginAction(userData, handleLoginSucces));
  };
  const handleLoginSucces = () => {
    console.log("hello");
    history("/todo");
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
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
