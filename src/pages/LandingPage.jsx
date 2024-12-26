import React from "react";
import classes from "../styles/LandingPage.module.css";
import { Button } from "antd";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={classes.landingPage}>
      <h1>Welcome to the Vet Management System!</h1>
      <p>The best place to manage your veterinary needs efficiently.</p>
      <div className={classes.buttons}>
        <Link to="/signin">
          <Button type="primary">Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
