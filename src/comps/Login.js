import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const url = "http://localhost:8080/user/login";

  const [logIn, setLogIn] = useState({
    username: "",
    password: "",
  });

  const [isLogIn, setIsLogIn] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    const newData = { ...logIn };
    newData[e.target.id] = e.target.value;
    setLogIn(newData);
    if (error) {
      setError(false);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      console.log(logIn);
      const res = await axios.post(`${url}`, logIn);
      setIsLogIn(true);
      localStorage.setItem("auth-key", res.data.token);
    } catch (error) {
      console.dir(error.response.data.msg);
    }
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Login</h1>
      <div className="container-sm d-flex justify-content-center border border-dark border-2 rounded-3">
        <form action={url} method="post" className="lg-form">
          <div className="p-2">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="bg-light border border-dark"
              onChange={handleInput}
            />
          </div>
          <div className="p-2">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-light border border-dark"
              onChange={handleInput}
            />
          </div>
          <div className="p-2">
            <input
              className="btn btn-primary"
              type="submit"
              value="Login"
              onClick={handleLogIn}
            />
          </div>
        </form>
      </div>
      {error && (
        <div className="d-flex justify-content-center">
          <h2>Incorrect username or password</h2>
        </div>
      )}
      {isLogIn && (
        <>
          <div className="d-flex justify-content-center">
            <h2>Welcome back, {logIn.username}</h2>
          </div>
          <div className="d-flex justify-content-center m-2">
            <Link to="/dashboard">
              <button className="m-2 btn btn-success">Go to DashBoard</button>
            </Link>
            <Link to="/">
              <button className="btn btn-danger">Back to Home</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
