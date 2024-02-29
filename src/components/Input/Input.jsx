import React from "react";
import "./Input.scss";
import { UserOutlined } from "@ant-design/icons";
export const Input = ({ type, value, placeholder, onChange, name, style }) => {
  return (
    <div className="input-container">
      <UserOutlined className="icon" />
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={style}
        name={name}
        className="input"
        placeholder={placeholder}
      />
    </div>
  );
};
