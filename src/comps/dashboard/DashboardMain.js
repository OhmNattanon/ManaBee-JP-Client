import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import "./DB.css";

function DashboardMain() {
  const [username, setUsername] = useState();
  useEffect(() => {
    const token = localStorage.getItem("auth-key");
    const decode = jwtDecode(token);
    setUsername(decode.username);
  }, []);

  return (
    <div className="mainContainer d-flex justify-content-center">
      <div className="container-lg m-3 p-2">
        <div className="welcome p-2 mt-3 rounded-3">
          <h1>Welcome back, {username}</h1>
        </div>
        <h2 className="myCourse">My course</h2>
        <div className="boxOne p-2 rounded-3">
          <div className="row">
            <div className="col">
              <h4>Show current progress</h4>
              <img src="https://picsum.photos/100/100" alt="" />
              <Link to="/course">
                <button className="p-2">Continue</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="row mt-3">
              <div className="col">
                <h4>Word Games</h4>
                <h5>Keep practicing Hiragana with Word Game</h5>
                <img src="https://picsum.photos/100/100" alt="" />
                <Link to="/game">
                  <button>Go to Word Game</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
