import React from "react";
import "./App.css";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import Project from "./Project";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

function App() {
  return (
    <div className="App Container">
      <Header />
      <Homepage />
      <About />
      <Project />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
