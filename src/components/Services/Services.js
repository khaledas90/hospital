import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faHeartbeat,
  faXRay,
  faBrain,
  faWheelchair,
  faTooth,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <div className="Services">
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <div className="content">
                  <p className="d-inline-block border rounded-pill py-1 px-4 mt-4">
                    Services
                  </p>
                  <h1 className="mb-4 font-weight-bold">
                    Health Care Solutions
                  </h1>
                </div>
              </Col>
              <Col lg={12}>
                <Row className="p-2 mt-4">
                  <Col lg={4} className=" mb-4">
                    <div className="service-item bg-light rounded h-100 p-5">
                      <div className="d-inline-flex align-items-center justify-content-center   rounded-circle mb-4">
                        <FontAwesomeIcon
                          className="faHeartbeat IconHead"
                          icon={faHeartbeat}
                        />
                      </div>
                      <h4 className="mb-3">Cardiology</h4>
                      <p className="mb-4">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                      <button className="btn btnMore">
                        <FontAwesomeIcon className="faPlus " icon={faPlus} />
                        Read More
                      </button>
                    </div>
                  </Col>
                  <Col lg={4} className=" mb-4">
                    <div className="service-item bg-light rounded h-100 p-5">
                      <div className="d-inline-flex align-items-center justify-content-center   rounded-circle mb-4">
                        <FontAwesomeIcon
                          className="faHeartbeat IconHead"
                          icon={faXRay}
                        />
                      </div>
                      <h4 className="mb-3">Pulmonary</h4>
                      <p className="mb-4">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                      <button className="btn btnMore">
                        <FontAwesomeIcon className="faPlus " icon={faPlus} />
                        Read More
                      </button>
                    </div>
                  </Col>

                  <Col lg={4} className=" mb-4">
                    <div className="service-item bg-light rounded h-100 p-5">
                      <div className="d-inline-flex align-items-center justify-content-center   rounded-circle mb-4">
                        <FontAwesomeIcon
                          className="faHeartbeat IconHead"
                          icon={faBrain}
                        />
                      </div>
                      <h4 className="mb-3">Neurology</h4>
                      <p className="mb-4">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                      <button className="btn btnMore">
                        <FontAwesomeIcon className="faPlus " icon={faPlus} />
                        Read More
                      </button>
                    </div>
                  </Col>
                  <Col lg={4} className=" mb-4">
                    <div className="service-item bg-light rounded h-100 p-5">
                      <div className="d-inline-flex align-items-center justify-content-center   rounded-circle mb-4">
                        <FontAwesomeIcon
                          className="faHeartbeat IconHead"
                          icon={faWheelchair}
                        />
                      </div>
                      <h4 className="mb-3">Orthopedics</h4>
                      <p className="mb-4">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                      <button className="btn btnMore">
                        <FontAwesomeIcon className="faPlus " icon={faPlus} />
                        Read More
                      </button>
                    </div>
                  </Col>
                  <Col lg={4} className=" mb-4">
                    <div className="service-item bg-light rounded h-100 p-5">
                      <div className="d-inline-flex align-items-center justify-content-center   rounded-circle mb-4">
                        <FontAwesomeIcon
                          className="faHeartbeat IconHead"
                          icon={faTooth}
                        />
                      </div>
                      <h4 className="mb-3">Dental Surgery</h4>
                      <p className="mb-4">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                      <button className="btn btnMore">
                        <FontAwesomeIcon className="faPlus " icon={faPlus} />
                        Read More
                      </button>
                    </div>
                  </Col>
                  <Col lg={4} className=" mb-4">
                    <div className="service-item mb-5 bg-light rounded h-100 p-5">
                      <div className="d-inline-flex align-items-center justify-content-center   rounded-circle mb-4">
                        <FontAwesomeIcon
                          className="faHeartbeat IconHead"
                          icon={faVial}
                        />
                      </div>
                      <h4 className="mb-3">Laboratory</h4>
                      <p className="mb-4">
                        Erat ipsum justo amet duo et elitr dolor, est duo duo
                        eos lorem sed diam stet diam sed stet.
                      </p>
                      <button className="btn btnMore">
                        <FontAwesomeIcon className="faPlus " icon={faPlus} />
                        Read More
                      </button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
