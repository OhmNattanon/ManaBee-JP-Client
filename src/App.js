import Header from "./comps/Header";
import Landing from "./comps/landing/LandingMain";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./comps/Login";
import Register from "./comps/Register";
import DashboardMain from "./comps/dashboard/DashboardMain";
import CourseMain from "./comps/course/CourseMain";
import WordGame from "./comps/game/WordGame";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(() => {
    const authKey = localStorage["auth-key"];
    if (authKey) {
      setIsLogIn(true);
    }
    return isLogIn;
  }, [isLogIn]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/user/register" component={Register} />
          <Route exact path="/user/login" component={Login} />
          <Route path="/dashboard" component={DashboardMain} />
          {/* <Route path="/course/:courseId" component={CourseMain} /> */}
          <Route path="/course" component={CourseMain} />
          <Route path="/game" component={WordGame} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
