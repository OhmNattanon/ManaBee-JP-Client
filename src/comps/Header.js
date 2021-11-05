import React from "react";
import { Link } from "react-router-dom";

function Header({ isLogIn, setIsLogIn }) {
  const handleLogOut = () => {
    localStorage.clear();
    setIsLogIn(false);
    return isLogIn;
  };

  return (
    <header className="flex justify-between bg-white">
      <div className="m-4">
        <h2 className="text-4xl font-extrabold text-white p-5 rounded-lg bg-red-400">
          <Link to="/" class="text-decoration-none">
            ManaBee
          </Link>
        </h2>
      </div>
      <div className="flex m-4">
        {isLogIn ? (
          <>
            <button className="m-2 bg-green-700 p-1 rounded-xl text-white my-4 hover:bg-green-500">
              <Link to={`/dashboard/${localStorage.getItem("userId")}`}>
                Go to Dashboard
              </Link>
            </button>
            <button className="m-2 bg-red-400 p-1 rounded-xl text-white my-4 hover:bg-red-300">
              <Link to="/" onClick={handleLogOut}>
                Log out
              </Link>
            </button>
          </>
        ) : (
          <>
            <button className=" mx-1 px-2 bg-green-700 rounded-xl text-white my-4 hover:bg-green-500">
              <Link to="/user/register">Sign up</Link>
            </button>
            <button className=" mx-1 px-2 bg-red-400 rounded-xl text-white my-4 hover:bg-red-600">
              <Link to="/user/login">Log in</Link>
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
