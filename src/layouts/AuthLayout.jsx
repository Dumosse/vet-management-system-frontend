import React from "react";
import MainNavigation from "../components/layout/MainNavigation";
import { Outlet } from "react-router-dom";
import classes from "../styles/AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
