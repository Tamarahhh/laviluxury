import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <h1>LaviLuxury</h1>
        <p>Interiors</p>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}
