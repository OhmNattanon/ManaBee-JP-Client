import Footer from "./comps/Footer";
import Header from "./comps/Header";
import Landing from "./comps/landing/LandingMain";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useEffect, useState } from "react";

import Login from "./comps/Login";
import Register from "./comps/Register";
import DashboardMain from "./comps/dashboard/DashboardMain";
import CourseMain from "./comps/course/CourseMain";

function App() {
  // const [isLogIn, setLogIn] = useState(false);
  // useEffect(() => {
  //   const authKey = localStorage["auth-key"];
  //   if (authKey) {
  //     setLogIn(true);
  //   }
  //   return isLogIn;
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/user/register" component={Register} />
          <Route exact path="/user/login" component={Login} />
          <Route path="/dashboard" component={DashboardMain} />
          <Route path="/course" component={CourseMain} />
        </Switch>
        <Footer />
      </BrowserRouter>

      {/* <DashboardMain /> */}

      {/* {users.map((item, index) => {
        return (
          <div>
            <h1>{item.Fname}</h1>
            <p>{item.username}</p>
            <p>{item.email}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
