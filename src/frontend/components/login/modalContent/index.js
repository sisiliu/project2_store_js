import "./index.css";
import SigninForm from "../loginForms/loginForm";
import SignupForm from "../loginForms/signupForm";
import ForgotPasswordForm from "../loginForms/forgotpasswordForm";

const ModalContent = ({
  handleOnLogin,
  signUpVisible,
  forgotPasswordVisible,
  setSignUpVisible,
  setForgotPasswordVisible,
}) => {
  return (
    <>
      {signUpVisible ? (
        <SignupForm setSignUpVisible={setSignUpVisible} />
      ) : forgotPasswordVisible ? (
        <>
          <ForgotPasswordForm
            setForgotPasswordVisible={setForgotPasswordVisible}
          />
        </>
      ) : (
        <SigninForm
          handleOnLogin={handleOnLogin}
          setSignUpVisible={setSignUpVisible}
          setForgotPasswordVisible={setForgotPasswordVisible}
        />
      )}
    </>
  );
};
export default ModalContent;
