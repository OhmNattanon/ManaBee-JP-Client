import React, { useState } from "react";
import SideNav from "../course/SideNav";
import letters from "./letter";
import answer from "./answer";

function WordGame() {
  const [score, setScore] = useState(0);
  const [pickLetters, setPickLetters] = useState("");
  const letterBox = letters;
  const allAnswer = answer;
  const tableStyle =
    "border border-black border-solid border-collapse px-8 hover:bg-green-700 hover:text-white";
  const textStyle = "p-5 text-3xl font-bold";

  const handleClick = (item) => {
    const newStr = pickLetters.concat(item);
    setPickLetters(newStr);
  };
  console.log(pickLetters);

  const checkAns = (ans, allAns) => {
    const idx = allAns.indexOf(ans);
    if (allAns.includes(ans)) {
      alert("Congrats! You're right!");
      allAns.splice(idx, 1);
      setPickLetters("");
      setScore((cur) => cur + 1);
    }
  };

  console.log(allAnswer);

  return (
    <div className="grid grid-cols-10 my-10">
      <div className="col-span-2 ml-1">
        <SideNav />
      </div>
      <div className="col-span-6">
        <div className="ml-32">
          <div className="flex flex-col">
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx <= 4) {
                  return (
                    <div className={`${tableStyle}`} key={idx}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 4 && idx <= 9) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 9 && idx <= 14) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 14 && idx <= 19) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 19 && idx <= 24) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 24 && idx <= 29) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 29 && idx <= 34) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 34 && idx <= 39) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 39 && idx <= 44) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex justify-items-start">
              {letterBox.map((item, idx) => {
                if (idx > 44 && idx <= 49) {
                  return (
                    <div className={tableStyle}>
                      <h1
                        className={textStyle}
                        onClick={() => handleClick(item, idx)}
                      >
                        {item}
                      </h1>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="sticky inset-20 border-solid border-4 border-purple-700 p-2 mr-4">
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
            <button className="text-red-900 font-bold">Reset</button>
          </div>
          <div className="mt-6">
            <h1 className="font-bold text-2xl">Your Score : {score} / 10</h1>
          </div>
          <button className="font-bold text-white bg-green-700 rounded-lg p-2 my-5">
            Finish Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default WordGame;
