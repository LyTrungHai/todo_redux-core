import React, { useState } from "react";

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("LOGIN_USER")) {
    return JSON.parse(localStorage.getItem("LOGIN_USER"));
  } else {
    return false;
  }
};
export const logout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("LOGIN_USER");
    next();
  }
};
