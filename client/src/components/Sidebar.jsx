import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, Typography, Flex, Divider, Avatar, Segmented } from "antd";
import reactLogo from "@/assets/react.svg";
import "./Sidebar.css";

const Sidebar = ({ open, onClose }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "primary"
  );

  const menus = [
    { label: "Random App", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: "Test", path: "/test" },
  ];

  return (
    <div>
      <Drawer
        title={
          <>
            <Typography.Title style={{ cursor: "pointer" }}>
              <img src={reactLogo} alt="Logo" /> Aod Tools
            </Typography.Title>
          </>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Typography.Text type="secondary">MENU</Typography.Text>
        <br />
        <br />
        <Flex gap="middle" vertical={true}>
          {menus.map((item, index) => (
            <NavLink
              className={`menu-item ${theme}`}
              activeClassName="active"
              to={item.path}
              key={index}
              onClick={() => onClose()}
            >
              {item.label}
            </NavLink>
          ))}
        </Flex>
        <Divider />
        <Typography.Text type="secondary">THEME</Typography.Text>
        <br />
        <br />
        <Segmented
          options={[
            {
              value: "primary",
              label: (
                <Avatar className="box primary" shape="square" size={20} />
              ),
            },
            {
              value: "success",
              label: (
                <Avatar className="box success" shape="square" size={20} />
              ),
            },
            {
              value: "danger",
              label: <Avatar className="box danger" shape="square" size={20} />,
            },
            {
              value: "yellow",
              label: <Avatar className="box yellow" shape="square" size={20} />,
            },
            {
              value: "black",
              label: <Avatar className="box black" shape="square" size={20} />,
            },
          ]}
          value={theme}
          onChange={(value) => {
            localStorage.setItem("theme", value);
            setTheme(value);
          }}
        />
      </Drawer>
    </div>
  );
};

export default Sidebar;
