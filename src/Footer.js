import React from "react";
import "./Footer.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="row content">
        <div className="col-4">
          <div className="logo">
            <h1>LaviLuxury</h1>
            <p>Interiors</p>
          </div>
          <p className="contact-text">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
          </p>
          <div className="socials">
            <a href="/" className="instagram"></a>
            <a href="/" className="twitter"></a>
            <a href="/" className="whatsapp"></a>
          </div>
        </div>
        <div className="col-4 links">
          <h2>Important Links</h2>
          <a href="/">Home</a> <br />
          <a href="/">About us</a> <br />
          <a href="/">Service</a> <br />
          <a href="/">Projects</a> <br />
          <a href="/">Blog</a>
        </div>
        <div className="col-4 subscribe-form">
          <h2>Subscribe for 5mins FREE consultation</h2>
          <Form>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className="email-input"
              />
            </Form.Group>
            <Button className="mt-3" variant="dark" type="submit">
              Subscribe
            </Button>
          </Form>
        </div>
      </div>
      <div className="copyright">
        <p>
          {new Date().getFullYear()} &copy; LaviLuxury Interiors. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
