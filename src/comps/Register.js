import React, { useState } from "react";
import axios from "axios";

function Register() {
  const url = "http://localhost:8080/user/register";

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
      await axios.post(`${url}`, userData);
      alert("You are all set!");
    } catch {
      alert("something when wrong");
    }
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Register</h1>
      <div className="container-sm d-flex justify-content-center border border-dark border-2 rounded-3">
        <form action={url} method="post" className="lg-form">
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
          <div className="d-flex justify-content-center p-2">
            <input type="submit" value="Register" onClick={handleSummit} />
          </div>
        </form>
      </div>
      <br />
    </div>
  );
}

export default Register;
