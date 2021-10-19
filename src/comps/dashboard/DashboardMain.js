import React from "react";

import "./DB.css";

function DashboardMain() {
  return (
    <div className="mainContainer d-flex justify-content-center">
      <div className="container-lg m-3 p-2">
        <div className="welcome p-2 mt-3 rounded-3">
          <h1>Welcome back, username</h1>
        </div>
        <h2 className="myCourse">My course</h2>
        <div className="boxOne p-2 rounded-3">
          <div className="row">
            <div className="col">
              <h4>Show current progress</h4>
              <img src="https://picsum.photos/100/100" alt="" />
              <button className="p-2">Continue</button>
            </div>
            <div className="col">
              <h4>Daily streak</h4>
              <h5>number days in streak!! Keep it going!!</h5>
            </div>
          </div>
          <div>
            <div className="row mt-3">
              <div className="col">
                <h4>Word Games</h4>
                <h5>Keep practicing Hiragana with Word Game</h5>
                <img src="https://picsum.photos/100/100" alt="" />
                <button>Go to Word Game</button>
              </div>
              <div className="col">
                <h4>Ranking Board</h4>
                <h5>ranking table here</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain;
