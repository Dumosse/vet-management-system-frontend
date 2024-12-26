import React from "react";
import classes from "../../styles/MainNavigation.module.css";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const MainNavigation = () => {
  const items = [
    {
      label: "English",
      key: "1",
    },
    {
      label: "Tagalog",
      key: "2",
    },
    {
      label: "Japanese",
      key: "3",
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <nav className={classes.MainNavigation}>
      <h1>Vet Management System</h1>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            Language
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </nav>
  );
};

export default MainNavigation;
