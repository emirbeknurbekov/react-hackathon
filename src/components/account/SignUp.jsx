import React, { useState } from "react";
import logo from "../../images/Logo.png";
import signUpImg from "../../images/signUp.png";
import google from "../../icons/Google.svg";
import twitter from "../../icons/twitter.svg";
import style from "../../styles/SignInSignUp.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/user/UserActions";

const Register = () => {
  const { user } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleSubmit() {
    if (!username || !password) {
      alert("Fill all fields");
      return;
    }

    dispatch(register({ username, password }));
  }

  if (user) {
    return <Navigate to={"/products"} />;
  }

  return (
    <div className={style.signInContainer}>
      {/* <div className={style.signInHeader}>
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
      </div> */}
      <div className={style.signInMainContent}>
        <img src={signUpImg} alt="error:)" className={style.signInPageImg} />
        <div className={style.signInPageBox}>
          <h2 className={style.signInPageTitle}>Sign Up Page</h2>

          <div className={style.signInInputsBox}>
            <h5 className={style.signInInputsP}>User name or email address</h5>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className={style.signInEmailInput}
            />
            <h5 className={style.signInInputsP}>Password</h5>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className={style.signInPasswordInput}
            />
          </div>

          <button onClick={handleSubmit} className={style.signInBtn}>
            Sign Up
          </button>

          <div className={style.signUpLink}>
            <p>
              Already have an account?
              <Link to="/login"> Sign in</Link>
            </p>
          </div>

          {/* <div className={style.signInLine}>
            <hr className={style.line} /> OR <hr className={style.line} />
          </div> */}

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
        </div>
      </div>
    </div>
  );
};

export default Register;
