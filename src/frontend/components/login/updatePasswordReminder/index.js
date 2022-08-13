import Logo from "./updatePasswordLogo.png";
import MyModal from "../../../common/modal";
import "./index.css";
const UpdatePasswordReminder = ({
  updatePassword,
  setUpdatePassword,
  setForgotPasswordVisible,
}) => {
  const close = () => {
    setUpdatePassword(false);
    setForgotPasswordVisible(false);
  };

  return (
    <>
      <MyModal width={393} visible={updatePassword} cancel={close}>
        <img src={Logo} className="email-password-logo" alt="" />
        <div className="email-password-reminder">
          We have sent the update password link to your email,please check that!
        </div>
      </MyModal>
    </>
  );
};
export default UpdatePasswordReminder;
