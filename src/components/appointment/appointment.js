import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";

export default function Appointment() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [err, setErr] = useState({
    nameErr: null,
    emailErr: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });

    if (name === "name") {
      setErr({
        ...err,
        nameErr:
          value.length === 0
            ? "This field is required"
            : value.length > 10
            ? "Character count must be less than 10"
            : null,
      });
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErr({
        ...err,
        emailErr: emailRegex.test(value)
          ? "Your Email is valid"
          : "Invalid email format",
      });
    }
  };

  return (
    <Fragment>
      <div className="Appointment">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="content">
                <p className="d-inline-block border rounded-pill py-1 px-4 mt-4">
                  Services
                </p>
                <h1 className="mb-4 fw-bold">
                  Make An Appointment To Visit Our Doctor
                </h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="bg-light rounded d-flex align-items-center justify-content-start p-5 mb-4">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white">
                    <FontAwesomeIcon
                      className="text-primary iconAppointment"
                      icon={faPhone}
                    />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Call Us Now</p>
                    <h5 className="mb-0">+201090898650</h5>
                  </div>
                </div>
                <div className="bg-light rounded d-flex align-items-center justify-content-start p-5 mb-4">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white">
                    <FontAwesomeIcon
                      className="text-primary iconAppointment"
                      icon={faEnvelopeOpen}
                    />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Mail Us Now</p>
                    <h5 className="mb-0">khaled@gmail.com</h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                <Form>
                  <Row>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          size="lg"
                          type="text"
                          placeholder="Your Name"
                          className={`${
                            err.nameErr ? "border-danger" : "border-success"
                          }`}
                          name="name"
                          value={user.name}
                          onChange={handleChange}
                        />
                        <small className="text-danger">{err.nameErr}</small>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          size="lg"
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          value={user.email}
                          className={`${
                            err.emailErr ? "border-success" : "border-danger"
                          }`}
                          onChange={handleChange}
                        />
                        <small
                          className={`${
                            err.emailErr ? "text-success" : "text-danger"
                          }`}
                        >
                          {err.emailErr}
                        </small>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          size="lg"
                          type="phone"
                          placeholder="Your Phone"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Select
                        size="lg"
                        aria-label="Default select example"
                      >
                        <option>Choose Doctor</option>
                        <option value="1">Doctor One</option>
                        <option value="2">Doctor Two</option>
                        <option value="3">Doctor Three</option>
                      </Form.Select>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          size="lg"
                          type="date"
                          placeholder="Choose Date"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          size="lg"
                          type="time"
                          placeholder="Choose Date"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Col>
                    <Col lg={12} className="text-center">
                      <button className="btn btn-primary py-3 px-5 mt-3">
                        Book Appointment
                      </button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
