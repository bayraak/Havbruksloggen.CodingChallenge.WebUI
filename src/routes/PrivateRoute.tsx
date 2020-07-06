import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { IAppState } from "../redux/interfaces/IState";

const PrivateRoute = ({ children, ...rest }: any) => {
  const isAuthenticated =
    useSelector((state: IAppState) => !!state.auth.token) ||
    localStorage.getItem("@token");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
