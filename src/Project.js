import React from "react";
import "./Project.css";
import apartment from "./images/apartment.png";
import salon from "./images/salon.png";
import office from "./images/office.png";

export default function Project() {
  return (
    <div className="Projects" id="projects">
      <h2>Our Projects</h2>
      <h3>Designing dreams, one concept at a time.</h3>
      <div className="row content d-flex justify-content-center">
        <div className="col-sm-4">
          <img
            className="Apartment img-fluid"
            src={apartment}
            alt="luxury apartment"
          />
          <h3>Luxury Apartment</h3>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="col-sm-4">
          <img className="Salon img-fluid" src={salon} alt="beauty salon" />
          <h3>Beauty Salon</h3>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="col-sm-4">
          <img className=" Office img-fluid" src={office} alt="office space" />
          <h3>Office Space</h3>
          <p>Abuja, Nigeria</p>
        </div>
      </div>
      <button type="button" className="btn btn-dark">
        View more
      </button>
    </div>
  );
}
