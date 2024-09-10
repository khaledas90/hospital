import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import team_one from "../img/team-1.jpg";
import team_Two from "../img/team-2.jpg";
import team_Three from "../img/team-3.jpg";
import team_Four from "../img/team-4.jpg";

export default class Doctors extends Component {
  render() {
    return (
      <Fragment>
        <div className="Doctors  ">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="content  text-center">
                  <p className="d-inline-block border rounded-pill py-1 px-4 mt-4">
                    Doctors
                  </p>
                  <h1 className="mb-4 fw-bold">Our Experience Doctors</h1>
                </div>
              </Col>
              <Col lg={12}>
                <Row className="mt-4">
                  <Col lg={3}>
                    <div className="team-item position-relative rounded overflow-hidden">
                      <div className="overflow-hidden">
                        <img className="img-fluid" src={team_one} alt="" />
                      </div>
                      <div className="team-text bg-light text-center p-4">
                        <h5>Doctor Name</h5>
                        <p className="text-primary fw-bold">Department</p>
                        <div className="team-social text-center">
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faFacebook}
                          />
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faTwitter}
                          />
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faInstagram}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="team-item position-relative rounded overflow-hidden">
                      <div className="overflow-hidden">
                        <img className="img-fluid" src={team_Two} alt="" />
                      </div>
                      <div className="team-text bg-light text-center p-4">
                        <h5>Doctor Name</h5>
                        <p className="text-primary fw-bold">Department</p>
                        <div className="team-social text-center">
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faFacebook}
                          />
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faTwitter}
                          />
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faInstagram}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="team-item position-relative rounded overflow-hidden">
                      <div className="overflow-hidden">
                        <img className="img-fluid" src={team_Three} alt="" />
                      </div>
                      <div className="team-text bg-light text-center p-4">
                        <h5>Doctor Name</h5>
                        <p className="text-primary fw-bold">Department</p>
                        <div className="team-social text-center">
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faFacebook}
                          />
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faTwitter}
                          />
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faInstagram}
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="team-item position-relative rounded overflow-hidden">
                      <div className="overflow-hidden">
                        <img className="img-fluid" src={team_Four} alt="" />
                      </div>
                      <div className="team-text bg-light text-center p-4">
                        <h5>Doctor Name</h5>
                        <p className="text-primary fw-bold">Department</p>
                        <div className="team-social text-center">
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faFacebook}
                          />
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faTwitter}
                          />
                          <FontAwesomeIcon
                            className="IconDoctor"
                            icon={faInstagram}
                          />
                        </div>
                      </div>
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
