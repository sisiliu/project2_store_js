import { useState } from "react";
import validator from "validator";
import { StatusCodes } from "http-status-codes";
import TextInput from "../../../../common/input/textInput";
import { LOGIN_FORM as LOGIN_FORM_CONTENT } from "../../../../content/form";
import UpdatePasswordReminder from "../../updatePasswordReminder";
import CONSTANTS from "../../../../constants/index";
import api from "../../../../api/loginApi";
import "../../../login/modalContent/index.css";

const ForgotPasswordForm = ({ setForgotPasswordVisible }) => {
  const [email, setEmail] = useState({
    value: "",
    errorMessage: "",
  });
  const [updatePassword, setUpdatePassword] = useState(false);

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

  const handleSubmit = () => {
    const emailError = validateEmailFEAndSetErrorMessage();

    if (!emailError) {
      const response = api.resetPassword({
        email: email.value,
      });

      if (response) {
        setUpdatePassword(true);
      }
    }
  };

  return (
    <>
      <div className={"header-description"}>
        Enter your email link, we will send you the recovery link
      </div>
      <TextInput
        type={"text"}
        value={email.value}
        label={LOGIN_FORM_CONTENT.EMAIL.LABEL}
        infoMessage={LOGIN_FORM_CONTENT.EMAIL.INFO_MESSAGE}
        errorMessage={email.errorMessage}
        onChange={(e) => setEmail({ ...email, value: e.target.value })}
      />

      <button className="sign-in-button" onClick={handleSubmit}>
        Update password
      </button>

      {updatePassword ? (
        <UpdatePasswordReminder
          updatePassword={updatePassword}
          setUpdatePassword={setUpdatePassword}
          setForgotPasswordVisible={setForgotPasswordVisible}
        />
      ) : null}
    </>
  );
};
export default ForgotPasswordForm;
