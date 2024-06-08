import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand logo mb-4" href="/">
          <h1>LaviLuxury</h1>
          <p>Interiors</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="/"
                aria-current="page"
                title="Homepage"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" title="About us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" title="Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" title="Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" title="Contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
