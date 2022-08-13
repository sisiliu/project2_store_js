import React from "react";
import { Button } from "antd";
import { StatusCodes } from "http-status-codes";
import api from "../../api/loginApi";
import { LOGIN_FORM } from "../../content/form";
import "antd/dist/antd.css";

const LogoutButton = ({ handleLogout = () => {} }) => {
  return (
    <Button type="primary" onClick={handleLogout}>
      {LOGIN_FORM.LOGOUT}
    </Button>
  );
};

export default LogoutButton;
