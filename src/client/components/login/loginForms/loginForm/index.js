import { useState } from "react";
import validator from "validator";
import { StatusCodes } from "http-status-codes";
import TextInput from "../../../../common/input/textInput";
import { LOGIN_FORM as LOGIN_FORM_CONTENT } from "../../../../content/form";
import CONSTANTS from "../../../../constants/index";
import api from "../../../../api/loginApi";
import "../../../login/modalContent/index.css";

const SigninForm = ({
  handleOnLogin,
  setSignUpVisible,
  setForgotPasswordVisible,
}) => {
  const [email, setEmail] = useState({
    value: "",
    errorMessage: "",
  });

  const [password, setPassword] = useState({
    value: "",
    errorMessage: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Return emtpy stirng if there is no error
  const validateEmailFEAndSetErrorMessage = () => {
    let errorMessage = "";
    if (!validator.isEmail(email.value)) {
      errorMessage = LOGIN_FORM_CONTENT.EMAIL.ERROR_MESSAGE;
    }
    setEmail({
      ...email,
      errorMessage,
    });
    return errorMessage;
  };

  const validatePasswordFEAndSetErrorMessage = () => {
    let errorMessage = "";

    if (password.value.length === 0) {
      errorMessage = "Password cannot be empty!";
    }
    setPassword({
      ...password,
      errorMessage,
    });
    return errorMessage;
  };
  console.log();
  const handleSubmit = () => {
    const emailError = validateEmailFEAndSetErrorMessage();
    const passwordError = validatePasswordFEAndSetErrorMessage();
    if (!emailError && !passwordError) {
      const response = api.anthorizeAccount({
        email: email.value,
        password: password.value,
      });

      if (response) {
        handleOnLogin();
      }
    }
  };

  const openSignUp = () => {
    email.errorMessage = "";
    setSignUpVisible(true);
  };
  const openForgotPassword = () => {
    setForgotPasswordVisible(true);
  };

  return (
    <>
      <TextInput
        type={"text"}
        value={email.value}
        label={LOGIN_FORM_CONTENT.EMAIL.LABEL}
        placeholder={LOGIN_FORM_CONTENT.EMAIL.PLACE_HOLDER}
        infoMessage={LOGIN_FORM_CONTENT.EMAIL.INFO_MESSAGE}
        errorMessage={email.errorMessage}
        onChange={(e) => setEmail({ ...email, value: e.target.value })}
      />
      <div>
        <TextInput
          type={showPassword ? "text" : "password"}
          value={password.value}
          label={LOGIN_FORM_CONTENT.PASSWORD.LABEL}
          infoMessage={LOGIN_FORM_CONTENT.PASSWORD.INFO_MESSAGE}
          errorMessage={password.errorMessage}
          onChange={(e) => setPassword({ ...password, value: e.target.value })}
        />

        <span
          className="show-password"
          onClick={() => {
            setShowPassword(true);
          }}
        >
          Show
        </span>
      </div>

      <button className="sign-in-button" onClick={handleSubmit}>
        Sign In
      </button>

      <div className="footer-description">
        Don't have an account?
        <a
          className="footer-button1"
          onClick={() => {
            openSignUp();
          }}
        >
          Sign Up
        </a>
        <a
          className="footer-button2"
          onClick={() => {
            openForgotPassword();
          }}
        >
          Forgot Password?
        </a>
      </div>
    </>
  );
};
export default SigninForm;
