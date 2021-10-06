import { Link, useHistory } from "react-router-dom";
import { auth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithGoogle, userAuthenticated} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import "./login.css";
import cometname from "./components/class_comet_name_logo.png";
function Login() {
    let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

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
      <h1 class="login-title">Login</h1>
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
          className="login__btn"
          onClick={() => {signInWithEmailAndPassword(email, password); if(userAuthenticated(email)){history.push('/makequiz')}}}
    
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
    <div className="bottom-nav">
	</div>
    </>
  );
}
export default Login;