import React from "react";
import "antd/dist/antd.css";
import "./index.css";

import { Input } from "antd";

const TextInput = ({
  label = "",
  value = "",
  placeholder = "",
  errorMessage = "",
  infoMessage = "",
  maxLength = 30,
  disabled = false,
  onChange = () => {},
  type,
}) => {
  return (
    <div className="text-input-container">
      {label ? <div className={"input-label"}>{label}</div> : null}
      <Input
        maxLength={maxLength}
        className={errorMessage ? "text-input-error" : "text-input"}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {!errorMessage && infoMessage ? (
        <div className={"text-input-info-message"}>{infoMessage}</div>
      ) : null}
      {errorMessage ? (
        <div className={"text-input-error-message"}>{errorMessage}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
