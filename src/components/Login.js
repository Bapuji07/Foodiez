import LoginImage from "./../../assets/login-image.png";
import { useRef, useContext } from "react";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const nameRef = useRef();
  const navigate = useNavigate();

  const handleSignIn = () => {
    const enteredName = nameRef.current.value;
    setUser(enteredName);
    navigate('/');
  };

  return (
    <div id="login">
      <div id="login-left">
        <img src={LoginImage} alt="" />
      </div>
      <div id="login-right">
        <div id="login-box">
          <h1>Login</h1>
          <label>Name</label>
          <input placeholder="Name" ref={nameRef} type="text" />
          <label>Email</label>
          <input placeholder="username@gmail.com" type="email" />
          <label>Password</label>
          <input placeholder="Password" type="password" />
          <button onClick={handleSignIn}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
