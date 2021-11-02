import axios from "axios";
import React, { useState } from "react";
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
      const res = await axios.post(`${url}`, logIn);
      setIsLogIn(true);
      localStorage.setItem("auth-key", res.data.token);
    } catch (error) {
      console.dir(error.response.data.msg);
    }
  };

  return (
    <div className="container-xl flex justify-center bg-gradient-to-b from-red-400 to-red-300">
      <div className="flex flex-col justify-center border border-dark rounded-3 my-32">
        <h1 className="text-2xl font-bold mx-auto">Login</h1>
        <div className="py-2 flex justify-center">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="border-2 border-solid border-gray-500"
            onChange={handleInput}
          />
        </div>
        <div className="py-2 flex justify-center">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="border-2 border-solid border-gray-500"
            onChange={handleInput}
          />
        </div>
        <div className="py-2 flex justify-center">
          <button
            className="bg-green-700 rounded-lg p-2 text-white font-bold"
            type="submit"
            value="Login"
            onClick={handleLogIn}
          >
            LogIn
          </button>
        </div>
        {/* error msg pop up here */}
        {error && (
          <div className="d-flex justify-content-center">
            <h2>Incorrect username or password</h2>
          </div>
        )}
        {isLogIn && (
          <div className="flex flex-col">
            <br />
            <div className="flex justify-center">
              <h2 className="text-xl font-bold">
                Welcome back, {logIn.username}
              </h2>
            </div>
            <div className="flex justify-center m-2 items-center">
              <Link to="/dashboard">
                <button className="m-2 bg-green-700 rounded-lg p-2 text-white font-bold">
                  Go to DashBoard
                </button>
              </Link>
              <Link to="/">
                <button className="m-2 font-bold text-white">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
