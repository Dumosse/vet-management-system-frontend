import React from "react";
import classes from "../styles/SignUp.module.css";
import { Radio, Form, Input, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className={classes.SignUp}>
      <div className={classes.message}>
        <h1>Getting Started</h1>
        <p>Create an account to continue and connect with the naegas.</p>
      </div>
      <div className={classes.FormContainer}>
        <div className={classes.header}>
          <GoogleOutlined />
          <p>Sign Up with Google</p>
        </div>
        <h3>OR</h3>
        <Form layout="vertical" className={classes.form}>
          <Form.Item label="Email">
            <Input size="large" placeholder="Email" />
          </Form.Item>
          <Form.Item label="Full Name">
            <Input size="large" placeholder="Full Name" />
          </Form.Item>
          <Form.Item label="Password">
            <Input size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input size="large" placeholder="Confirm Password" />
          </Form.Item>
          <div className={classes.Row}>
            <Form.Item label="Date of Birth" style={{ width: "100%" }}>
              <Input size="large" placeholder="Date of Birth" />
            </Form.Item>
            <Form.Item label="Gender" style={{ width: "100%" }}>
              <Radio.Group>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" size="large">
              Submit
            </Button>
          </Form.Item>
          <p>
            Already have an account?{" "}
            <Link to="/signin">
              <span>Sign In</span>
            </Link>
          </p>
        </Form>
      </div>
    </section>
  );
};

export default SignUp;
