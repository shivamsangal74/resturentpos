import React from "react";
import "./Button.scss";
import { LoadingOutlined } from "@ant-design/icons";

export const ButtonLabel = ({
  onClick,
  label,
  type = "button",
  disabled = false,
  style = {},
  loader = false
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled || loader}
      className={`button `}
      style={style}
    >
      {loader ? (
          <LoadingOutlined />
      ) : (
        label
      )}
    </button>
  );
};
