import React from "react";
import style from "../../styles/ResetPassword.module.css";
import ResetPasswordPageImage from "../../images/ResetPasswordPage.png";
import logo from "../../images/Logo.png";

const ResetPassword = () => {
  return (
    <div className={style.resetPasswordContainer}>
      <div className={style.signInHeader}>
        <img src={logo} alt="error:)" />
        <div className={style.signInSearchBox}>
          <input
            type="text"
            placeholder="Search"
            className={style.signInSearch}
          />
        </div>
        <select id="language-select" className={style.signInSelect}>
          <option value="en">English (United States)</option>
          <option value="es">Español (España)</option>
          <option value="fr">Français (France)</option>
          <option value="de">Deutsch (Germany)</option>
          <option value="ru">Русский (Russia)</option>
        </select>
        <button className={style.logInBtn}>Login</button>
        <button className={style.signUpBtn}>Sign Up</button>
      </div>

      <div className={style.resetPasswordMainContentBlock}>
        <div className={style.resetPasswordImageBlock}>
          <img
            src={ResetPasswordPageImage}
            alt="error:)"
            className={style.resetPasswordImage}
          />
        </div>
        <div className={style.resetPasswordLeftBlock}>
          <div className={style.resetPasswordTitleBlock}>
            <h1 className={style.resetPasswordMainTitle}>Reset Password</h1>

            <p className={style.resetPasswordMainTitleP}>
              Enter your email and we'll send you a link to reset your password.
            </p>
            <p className={style.resetPasswordMainTitleP}>Please check it.</p>
          </div>
          <div className={style.resetPasswordEmailInputBlock}>
            <p className={style.resetPasswordEmailInputBlockP}>Email</p>
            <input type="email" className={style.resetPasswordEmailInput} />
          </div>

          <div className={style.resetPasswordButtonBlock}>
            <button className={style.resetPasswordButton}>Send</button>
            <p>
              Back to
              <a href={"/login"}> Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
