import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";

function SideNav() {
  const [dropdown, setDropdown] = useState("hidden");
  const showDropdown = () => {
    if (dropdown === "hidden") {
      setDropdown("block");
    } else {
      setDropdown("hidden");
    }
  };
  return (
    <>
      <div class="px-4">
        <div class="flex flex-col">
          <Link to="/dashboard">
            <h1 className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded items-center">
              Dashboard
            </h1>
          </Link>
          <button
            className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex justify-between items-center"
            onClick={showDropdown}
          >
            <span class="mr-1">Chapters</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul class={`${dropdown} text-gray-700 pt-1`}>
            <li className="">
              <Link
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/course/1"
              >
                Hiragana
              </Link>
            </li>
            <li className="">
              <Link
                class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/course/2"
              >
                Katakana
              </Link>
            </li>
            <li className="">
              <Link
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/course/3"
              >
                Grammar 101
              </Link>
            </li>
            <li className="">
              <Link
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/course/4"
              >
                Grammar 102
              </Link>
            </li>
            <li className="">
              <Link
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/course/5"
              >
                Grammar 103
              </Link>
            </li>
            <li className="">
              <Link
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                to="/course/6"
              >
                Grammar 104
              </Link>
            </li>
          </ul>
          <Link to="/game">
            <h1 className="bg-gray-300 text-gray-700 font-semibold mt-1 py-2 px-4 rounded items-center">
              Word Games
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideNav;
