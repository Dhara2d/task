import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      navigate("/userRecords");
    } else {
      alert("Invalid login");
    }
  };
  return (
    <div>
      <div className="login-form-container">
        <form id="login-form" className="login-form" onSubmit={handleLogin}>
          <h2 className="login-heading">Login</h2>
          <input
            type="text"
            id="login-username"
            placeholder="Username"
            className="login-username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="login-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
