import React from "react";
import logo from "../../images/Logo.png";
import loginPage from "../../images/signIn.png";
import google from "../../icons/Google.svg";
import twitter from "../../icons/twitter.svg";
import style from "../../styles/SignInSignUp.module.css";

const Login = () => {
  return (
    <div className={style.signInContainer}>
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
      <div className={style.signInMainContent}>
        <img src={loginPage} alt="error:)" className={style.signInPageImg} />
        <div className={style.signInPageBox}>
          <h2 className={style.signInPageTitle}>Sign In Page</h2>

          <div className={style.signInPageBtns}>
            <button className={style.signInGoogleBtn}>
              <img src={google} alt={"error:"} />
              <p>Continue With Google</p>
            </button>
            <button className={style.signInTwitterBtn}>
              <img src={twitter} alt={"error:"} />
              <p>Continue With Twitter</p>
            </button>
          </div>

          <div className={style.signInLine}>
            <hr className={style.line} /> OR <hr className={style.line} />
          </div>

          <div className={style.signInInputsBox}>
            <h5 className={style.signInInputsP}>User name or email address</h5>
            <input type="text" className={style.signInEmailInput} />
            <h5 className={style.signInInputsP}>Password</h5>
            <input type="password" className={style.signInPasswordInput} />
            <a href="/forgot-password" className={style.signInForget}>
              Forget your password?
            </a>
          </div>

          <button className={style.signInBtn}>Sign In</button>

          <div className={style.signUpLink}>
            <p>
              Dont have an account?
              <a href="/sign-up"> Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
