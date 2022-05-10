import React from "react";
import { Route, Navigate, Routes, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "./index";

// export default function PrivateRoute({ component: Component, ...rest }) {
// return (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   ></Route>
// );
// }

export default function PrivateRoute({ children }) {
  const auth = isAuthenticated(); // determine if authorized, from context or however you're doing it
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}
