import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
function Login() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const HandleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((auth) => history.push("/"))
      .catch((err) => alert(err.message));
  };

  const HandleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="\">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="login not allowed"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>Email (phone for mobile accounts)</h5>
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signIn"
            type="Submit"
            onClick={HandleSignIn}
          >
            Sign In
          </button>
        </form>
        <span>
          <p>
            By continuing, you agree to Amazon's{" "}
            <Link className="login__container__link" to="\">
              Conditions of Use{" "}
            </Link>{" "}
            and{" "}
            <Link className="login__container__link" to="\">
              Privacy Notice
            </Link>{" "}
            .
          </p>
        </span>

        <button className="login__registerbutton" onClick={HandleRegister}>
          <span className="login__registerButtonSpan">
            Create Amazon account
          </span>
        </button>
      </div>
    </div>
  );
}

export default Login;
