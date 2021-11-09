import React, { useState } from "react";
import axios from "axios";

function Register() {
  const url = "http://localhost:8080/user/register";
  const urlProgress = "http://localhost:8080/progress/init";

  const [userData, setUserData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const newData = { ...userData };
    newData[e.target.id] = e.target.value;
    setUserData(newData);
  };

  const handleSummit = async () => {
    try {
      // const reqData = JSON.stringify(userData);
      const res = await axios.post(`${url}`, userData);
      await axios.post(`${urlProgress}`, { userId: res.data.id });
      alert("You are all set!");
    } catch {
      alert("something when wrong");
    }
  };

  return (
    <div className="container-xl flex justify-center bg-gradient-to-b from-red-400 to-red-300">
      <div className="flex flex-col justify-center border border-dark rounded-3 my-32">
        <h1 className="mx-auto font-bold text-2xl">Register</h1>
        <div className="p-2">
          <input
            type="text"
            name="Fname"
            id="Fname"
            placeholder="Firstname"
            className="bg-light border border-dark"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            name="Lname"
            id="Lname"
            placeholder="Lastname"
            className="bg-light border border-dark"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            className="bg-light border border-dark"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="bg-light border border-dark"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="bg-light border border-dark"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2">
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm your Password"
            className="bg-light border border-dark"
          />
        </div>
        <div className="d-flex justify-content-center p-2 mx-auto">
          <button
            onClick={handleSummit}
            className="bg-green-700 rounded-lg p-2 text-white font-bold"
          >
            Register
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Register;
