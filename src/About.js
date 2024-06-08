import React from "react";
import "./About.css";
import about from "./images/about.png";

export default function About() {
  return (
    <div className="row About" id="about">
      <div className="col d-none d-md-block image">
        <img src={about} className="img-fluid" alt="sofa" />
      </div>
      <div className="col-md-6">
        <h2 className="mb-4">Who are we?</h2>
        <h3 className="mb-4">About us</h3>
        <p className="mb-4">
          We’re a Nigerian-based full-service interior design company that
          specializes in sustainable commercial designs. Since 2020, we’ve been
          creating stunning, functional spaces for clients around the world. We
          work closely with our clients to understand their need, preferences
          and lifestyles to develop personalized design solutions that reflect
          their unique vision and style.
        </p>
      </div>
    </div>
  );
}
