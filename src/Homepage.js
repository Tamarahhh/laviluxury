import React from "react";
import "./App.css";

export default function Homepage() {
  return (
    <div className="home">
      <h1>Make Your Space a Masterpiece</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br /> sed do eiusmod tempor incididunt ut <br /> labore et dolore magna
        aliqua.{" "}
      </p>
      <button type="button" className="btn btn-dark">
        Contact us
      </button>
    </div>
  );
}
