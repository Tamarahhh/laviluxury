import React from "react";
import "./Service.css";
import management from "./images/management.png";
import planning from "./images/planning.png";
import styling from "./images/styling.png";
import consultation from "./images/consultation.png";
import decor from "./images/decor.png";
import renovation from "./images/renovation.png";

export default function Service() {
  return (
    <div className="Service" id="services">
      <h3>What do we offer?</h3>
      <h2>Our Services</h2>

      <div className="row service-content">
        <div className="col-md-4 box">
          <img
            className="management img-fluid"
            src={management}
            alt="project management"
          />
          <h2>Project management</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-md-4 box">
          <img
            className="planning img-fluid"
            src={planning}
            alt="space planning"
          />
          <h2>Space planning</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-md-4 box">
          <img className="styling img-fluid" src={styling} alt="styling" />
          <h2>Styling</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="row service-content">
        <div className="col-md-4 box">
          <img
            className="consultation img-fluid"
            src={consultation}
            alt="consultation"
          />
          <h2>Consultation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-md-4 box">
          <img
            className="decor img-fluid"
            src={decor}
            alt="decor accessories"
          />
          <h2>Decor accessories</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-md-4 box">
          <img
            className="renovation img-fluid"
            src={renovation}
            alt=" renovation"
          />
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
