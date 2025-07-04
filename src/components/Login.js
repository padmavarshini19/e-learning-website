import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const url = isSignUp
      ? "http://localhost:5000/api/signup"
      : "http://localhost:5000/api/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        if (isSignUp) {
          setIsSignUp(false);
          setError("Sign-up successful! You can now log in.");
        } else {
          setUser(data.user);
          navigate("/");
        }
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container" id="form-login">
      <h2 id="header-login">{isSignUp ? "Sign Up" : "Login"}</h2>
      {error && <p className="error-message" id="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          id="input-login-username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="input-login-password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" id="button-login">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>
      <p id="text-signup-switch">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          id="button-toggle-signup"
          className="toggle-button"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError("");
          }}
        >
          {isSignUp ? "Log In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default Login;
