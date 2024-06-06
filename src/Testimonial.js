import React from "react";
import "./Testimonial.css";
import { Carousel } from "react-bootstrap";
import tamaraboboye from "./images/tamaraboboye.png";

const testimonials = [
  {
    image: tamaraboboye,
    quote:
      "Their attention to detail and creativity is unmatched. Our new salon looks stunning thanks to LaviLuxury.",
    name: "Tamara Boboye",
    title: "Owner, Beauty salon",
  },
  {
    image: tamaraboboye,
    quote:
      "LaviLuxury transformed our office space into a modern and functional environment. Highly recommended",
    name: "Precious Damilola",
    title: "Real Estate Agent",
  },
  {
    image: tamaraboboye,
    quote:
      "The team at LaviLuxury is professional and talented. Our home redesign exceeded all our expectations.",
    name: "Happiness Taga",
    title: "Homeowner",
  },
];

export default function Testimonial() {
  return (
    <div className="container">
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
    </div>
  );
}
