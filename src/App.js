// import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./pages/LoginPage/LoginForm";
import Todo from "./pages/TodosPage/Todo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* <Route exact path="/todo" element={<PrivateRoute />}> */}
          {/* </Route> */}
          <Route
            path="/todo"
            exact
            element={
              <PrivateRoute>
                <Todo />
              </PrivateRoute>
            }
          />
          <Route exact path="/" element={<LoginForm />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
