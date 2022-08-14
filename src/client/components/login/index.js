import { useState } from "react";
import MyModal from "../../common/modal";
import ModalContent from "./modalContent";
import { Button } from "antd";
import { LOGIN_FORM } from "../../content/form";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Login = ({ handleLogin = () => {} }) => {
  const [visible, setVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        SignIn
      </Button>
      <MyModal
        width={393}
        titleText={
          signUpVisible
            ? LOGIN_FORM.SIGNUP
            : forgotPasswordVisible
            ? LOGIN_FORM.FORGOTPASSWORD
            : LOGIN_FORM.LOGIN
        }
        visible={
          signUpVisible
            ? signUpVisible
            : forgotPasswordVisible
            ? forgotPasswordVisible
            : visible
        }
        cancel={
          signUpVisible
            ? setSignUpVisible
            : forgotPasswordVisible
            ? setForgotPasswordVisible
            : setVisible
        }
      >
        <ModalContent
          handleOnLogin={handleLogin}
          signUpVisible={signUpVisible}
          forgotPasswordVisible={forgotPasswordVisible}
          setSignUpVisible={setSignUpVisible}
          setForgotPasswordVisible={setForgotPasswordVisible}
        />
      </MyModal>
    </>
  );
};

export default Login;
