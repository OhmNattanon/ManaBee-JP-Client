import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({ isLogIn, setIsLogIn }) {
  const handleLogOut = () => {
    localStorage.clear();
    setIsLogIn(false);
    return isLogIn;
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>
          <Link to="/" class="text-decoration-none">
            ManaBee
          </Link>
        </h2>
      </div>
      <div>
        <ul className="navbar">
          <li>
            <a>What we do</a>
          </li>
          <li>
            <a>Course</a>
          </li>
          <li>
            <a>Article</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          {isLogIn ? (
            <>
              <li className="signup">
                <Link to="/dashboard">Go to Dashboard</Link>
              </li>
              <li className="login">
                <Link to="/" onClick={handleLogOut}>
                  Log out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="signup">
                <Link to="/user/register">Sign up</Link>
              </li>
              <li className="login">
                <Link to="/user/login">Log in</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
