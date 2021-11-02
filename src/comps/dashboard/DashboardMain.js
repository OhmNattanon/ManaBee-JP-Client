import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import "./DB.css";
import axios from "axios";

function DashboardMain() {
  const [username, setUsername] = useState();
  const [user, setUser] = useState([]);
  const [progress, setProgress] = useState([]);

  const { id } = user;
  const { score, courseId } = progress;

  useEffect(() => {
    const token = localStorage.getItem("auth-key");
    const decode = jwtDecode(token);
    setUsername(decode.username);
  }, []);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const res = await axios.post("http://localhost:8080/user/by-username", {
          username: username,
        });
        setUser(res.data);
      };
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, [username]);

  useEffect(() => {
    try {
      const fetchProgress = async () => {
        const res = await axios.post("http://localhost:8080/progress/by-id", {
          id: id,
        });
        setProgress(res.data);
      };
      fetchProgress();
    } catch (error) {}
  }, [id]);

  const percentProgress = Math.floor((courseId / 6) * 100);

  return (
    <div className="mainContainer">
      <div className="container-lg m-3 p-2 w-10/12 mx-auto">
        <div className="bg-white rounded-xl inline-block p-4 mt-4">
          <h1 className="font-bold text-2xl text-red-500">
            Welcome back, {username}
          </h1>
        </div>
        <h2 className="font-bold text-2xl text-white my-5">My course</h2>
        <div className="bg-white p-8 rounded-xl">
          <div className="row">
            <h4 className="font-bold text-xl mb-4">
              ManaBee Fundamental : Nihongo 101
            </h4>
            <div className="flex justify-start items-center">
              <img
                src="https://picsum.photos/100/100"
                alt=""
                className="rounded-full"
              />
              <h1 className="font-bold text-2xl mx-5">
                Current progress : {percentProgress}%
              </h1>
              <Link to="/course">
                <button className="p-2 bg-green-700 font-bold text-white rounded-xl mx-10">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-2xl text-white my-3">My Game</h2>
        <div className="bg-white p-8 rounded-xl mt-5">
          <div className="row mt-3">
            <div className="col">
              <h4 className="font-bold text-xl mb-4">Word Games</h4>
              <h5 className="font-bold text-xl mb-4">
                Keep practicing Hiragana with Word Game
              </h5>
              <div className="flex justify-start items-center">
                <img
                  src="https://picsum.photos/100/100"
                  alt=""
                  className="rounded-full"
                />
                <h1 className="font-bold text-2xl mx-5">
                  Best score : {score}
                </h1>
                <Link to="/game">
                  <button className="p-2 bg-purple-500 font-bold text-white rounded-xl mx-10">
                    Go to Word Game
                  </button>
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
