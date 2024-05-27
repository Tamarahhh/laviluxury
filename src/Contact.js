import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="row contact-content">
        <div className="col-6 ">
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

          <div className="links">
            <h2>Important Links</h2>
            <a href="/">Privacy Policy</a> <br />
            <a href="/">Terms & conditions</a> <br />
            <a href="/">FAQ</a>
          </div>
        </div>
        <div className="col-6 contact-form">
          <h2>Got questions?</h2>
          <p>Fill out this form for free 5 minutes consultation</p>

          <Form>
            <Form.Group>
              <Form.Label className="mt-2 form-titlte">
                Enter your full name:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-2 form-titlte">
                Enter your email address:
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your your email address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className=" mt-2 form-titlte">Message:</Form.Label>
              <Form.Control
                as="textarea"
                row={3}
                placeholder="Type your message"
              />
            </Form.Group>
            <Button className="mt-3" variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
