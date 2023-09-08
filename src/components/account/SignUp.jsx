import React from "react";
import logo from "../../images/Logo.png";
import signUpImg from "../../images/signUp.png";
import google from "../../icons/Google.svg";
import twitter from "../../icons/twitter.svg";
import style from "../../styles/SignInSignUp.module.css";

const Register = () => {
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
        <img src={signUpImg} alt="error:)" className={style.signInPageImg} />
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

          <div className={style.signUpInputsBox}>
            <div className={style.signUpEmaildBox}>
              <h5 className={style.signUpEmailInputP}>Email Address</h5>
              <input
                type="text"
                className={style.signInEmailInput}
                placeholder="designer@gmail.com"
              />
            </div>

            <div className={style.signUpPasswordBox}>
              <h5 className={style.signUpPasswordInputP}>Password</h5>
              <input type="password" className={style.signInPasswordInput} />
              <p className={style.signUpP}>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>
            <div className={style.signUpCheckBoxes}>
              <label for="myCheckbox">
                <input type="checkbox" />
                Agree to our Terms of use and Privacy Policy
              </label>
              <label for="myCheckbox">
                <input type="checkbox" />
                Subscribe to our monthly newsletter
              </label>
            </div>
          </div>

          <button className={style.signInBtn}>Sign Up</button>

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

export default Register;
