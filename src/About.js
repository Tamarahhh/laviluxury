import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="row About" id="about">
      <div className="col-md-6 image"></div>
      <div className="col-md-6">
        <h2>Who are we?</h2>
        <h3>About us</h3>
        <p>
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
