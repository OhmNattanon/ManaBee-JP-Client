import React from "react";
import "./sidenav.css";

function SideNav() {
  return (
    <div className="m-3 w-25">
      <div class="sidenav">
        <a href="#about">Home</a>
        <strong>Chapter</strong>
        <a href="#">Chapter 1</a>
        <a href="#">Chapter 2</a>
        <a href="#">Chapter 3</a>
        <a href="#about">Game</a>
      </div>
    </div>
  );
}

export default SideNav;
