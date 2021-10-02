import { Link, useHistory } from "react-router-dom";
import { auth, registerWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import "./login.css";
import cometname from "./components/class_comet_name_logo.png";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
    }, [user, loading]);
    return (
        <>
      <div className="navbar"></div>
      <div><img src={cometname}  alt="Class Comet" /></div>
      <div className="login">
        <div className="login__container">
        <div className="register-title">Sign Up</div>
            <input
                type="text"
                className="namebox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="register_btn"
            onClick={() => registerWithEmailAndPassword(name, email, password)}
          >
            Register
          </button>
        </div>
      </div>
      <div className="bottom-nav">
      </div>
      </>
    );
  }
  export default Register;