import React from "react";
import "./Testimonial.css";
import { Carousel } from "react-bootstrap";
import tamaraboboye from "./images/tamaraboboye.png";

const testimonials = [
  {
    image: tamaraboboye,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare.",
    name: "Tamara Boboye",
    title: "Business Owner",
  },
  {
    image: tamaraboboye,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare.",
    name: "Precious Damilola",
    title: "Real Estate Agent",
  },
  {
    image: tamaraboboye,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare.",
    name: "Happiness Taga",
    title: "Home Owner",
  },
];

export default function Testimonial() {
  return (
    <div className="Testimonial">
      <h3>What our clients say</h3>
      <h2>Testimonials</h2>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mb-3"
                  />
                  <p className="card-text">"{testimonial.quote}"</p>
                  <h5 className="card-title mt-4">{testimonial.name}</h5>
                  <p className="card-subtitle">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
