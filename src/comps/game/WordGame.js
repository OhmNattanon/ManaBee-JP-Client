import React, { useState, useEffect } from "react";
import SideNav from "../course/SideNav";
import letters from "./letter";
import answer from "./answer";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

function WordGame() {
  //state
  const [ansIdx, setansIdx] = useState([]);
  const [score, setScore] = useState(0);
  const [pickLetters, setPickLetters] = useState("");
  const [allAnswer, setAllAnswer] = useState(answer);
  const [username, setUsername] = useState();
  const [user, setUser] = useState([]);

  //useEffect to get user
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

  //style and letters
  const letterBox = letters;
  const tableStyle =
    "border border-black border-solid border-collapse px-8 hover:bg-green-700 hover:text-white";
  const textStyle = "p-5 text-3xl font-bold";

  //button functions
  const handleClick = (item, idx) => {
    if (pickLetters.length <= 2) {
      const newStr = pickLetters.concat(item);
      const newArr = [...ansIdx];
      newArr.push(idx);
      setPickLetters(newStr);
      setansIdx(newArr);
    }
  };

  const handleReset = () => {
    setansIdx([]);
    setScore(0);
    setPickLetters("");
    setAllAnswer(answer);
  };

  const checkAns = (ans, allAns) => {
    const idx = allAns.indexOf(ans);
    if (allAns.includes(ans)) {
      alert("Congrats! You're right!");
      allAns.splice(idx, 1);
      setAllAnswer(allAns);
      setPickLetters("");
      setScore((cur) => cur + 1);
    } else {
      alert("Too bad, try again");
      setPickLetters("");
      const remove = [...ansIdx];
      remove.splice(remove.length - 3, 3);
      setansIdx(remove);
    }
  };

  const { id } = user;

  const submitScore = async () => {
    const res = await axios.patch("http://localhost:8080/progress/game", {
      score: score,
      id: id,
    });
  };

  return (
    <div className="grid grid-cols-10 my-10">
      <div className="col-span-2 ml-1">
        <SideNav />
      </div>
      <div className="col-span-6">
        <div className="ml-32">
          <h1 className="font-bold text-xl my-2">
            Find 10 hidden word in here, it can be both vertical and horizontal!
          </h1>
          <h1 className="font-bold text-xl my-2">
            Click the letters and hit "Check" button to see if you got it right!
          </h1>
          <h1 className="font-bold text-green-600 text-xl mb-5">
            more hint! it's all "イ形容詞"
          </h1>
          <div className="flex flex-col">
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx <= 4) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 4 && idx <= 9) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 9 && idx <= 14) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 14 && idx <= 19) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 19 && idx <= 24)
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                return null;
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 24 && idx <= 29) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 29 && idx <= 34) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 34 && idx <= 39) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 39 && idx <= 44) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 44 && idx <= 49) {
                  return (
                    <div
                      className={`${tableStyle} ${
                        ansIdx.includes(idx) ? "bg-green-700 text-white" : ""
                      }`}
                      key={idx}
                    >
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="sticky inset-1/3 border-solid border-4 border-purple-700 p-2 mr-4">
          <div className="border-4 border-solid border-black mb-4 mr-4">
            <h1 className="text-black font-bold text-5xl h-14">
              {pickLetters}
            </h1>
          </div>
          <div className="flex justify-items-start space-x-4">
            <button
              className="font-bold text-white bg-red-400 rounded-lg p-2"
              onClick={() => checkAns(pickLetters, allAnswer)}
            >
              Check
            </button>
            <button className="text-red-900 font-bold" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-2xl">Your Score : {score} / 10</h1>
          </div>
          <button
            className="font-bold text-white bg-green-700 rounded-lg p-2 my-5"
            onClick={submitScore}
          >
            <Link to={`/dashboard/${localStorage.getItem("userId")}`}>
              Sensei, I give up..
            </Link>
          </button>
          {score === 10 ? (
            <div>
              <h1 className="text-red-700 font-bold">
                Congratulations! you complete the game!
              </h1>
              <button
                className="font-bold text-white bg-red-400 rounded-lg p-2 my-5"
                onClick={submitScore}
              >
                <Link to={`/dashboard/${localStorage.getItem("userId")}`}>
                  Back to Dashboard
                </Link>
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WordGame;
