import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Map from "../Map/MapComponent";

export default function Contact() {
  const position = [30.0444, 31.2357];
  return (
    <Fragment>
      <div className="Contact">
        <Container>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={4}>
                  <div className="bg-light rounded d-flex align-items-center justify-content-start p-5 mb-4">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white">
                      <FontAwesomeIcon
                        className="text-primary iconContact"
                        icon={faMapLocation}
                      />
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Address</p>
                      <h5 className="mb-0">123 Street, New York, USA</h5>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="bg-light rounded d-flex align-items-center justify-content-start p-5 mb-4">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white">
                      <FontAwesomeIcon
                        className="text-primary iconContact"
                        icon={faPhone}
                      />
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Call Us Now</p>
                      <h5 className="mb-0">+01019626952</h5>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="bg-light rounded d-flex align-items-center justify-content-start p-5 mb-4">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white">
                      <FontAwesomeIcon
                        className="text-primary iconContact"
                        icon={faEnvelopeOpen}
                      />
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Mail Us Now</p>
                      <h5 className="mb-0">khaled@gmail.com</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <div className="asideContact">
                <div className="content ml-3">
                  <p className="d-inline-block border rounded-pill py-1 px-4 mt-4">
                    Contact
                  </p>
                  <h1 className="mb-4 fw-bold">
                    Make An Appointment To Visit Our Doctor
                  </h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                </div>
                <Col lg={12}>
                  <div className="rounded h-100 d-flex align-items-center p-5">
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
                              type="email"
                              placeholder="Your Email"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              size="lg"
                              type="text"
                              placeholder="Subject"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Message"
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={12} className="text-center">
                          <button className="btn btn-primary  py-3 px-5 mt-3">
                            Book Appointment
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </div>
            </Col>
            <Col lg={6}>
              <Map position={position} />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
