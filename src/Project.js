import React from "react";
import "./Project.css";

export default function Project() {
  return (
    <div className="Projects">
      <h2>Our Projects</h2>
      <h3>Designing dreams, one concept at a time.</h3>
      <div className="row content">
        <div className="col-4">
          <img className="Apartment" alt="" />
          <h3>Luxury Apartment</h3>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="col-4">
          <img className="Salon" alt="" />
          <h3>Beauty Salon</h3>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="col-4">
          <img className="col-4 Office" alt="" />
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
