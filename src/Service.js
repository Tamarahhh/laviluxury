import React from "react";
import "./Service.css";

export default function Service() {
  return (
    <div className="Service">
      <h3>What do we offer?</h3>
      <h2>Our Services</h2>

      <div className="row service-content">
        <div className="col-4 box">
          <img className="management" alt="" />
          <h2>Project management</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-4 box">
          <img className="planning" alt="" />
          <h2>Space planning</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-4 box">
          <img className="styling" alt="" />
          <h2>Styling</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="row service-content">
        <div className="col-4 box">
          <img className="consultation" alt="" />
          <h2>Consultation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-4 box">
          <img className="decor" alt="" />
          <h2>Decor accessories</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-4 box">
          <img className="renovation" alt="" />
          <h2>Renovation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
