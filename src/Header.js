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
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}
