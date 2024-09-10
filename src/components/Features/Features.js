import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faComment,
  faHeadphones,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import featureImg from "../img/feature.jpg";

export default class Feature extends Component {
  render() {
    return (
      <Fragment>
        <div className="Feature ">
          <Row>
            <Col lg={6}>
              <div className="content  p-lg-5 ">
                <p className="d-inline-block text-white border rounded-pill py-1 px-4 mt-4">
                  Feature
                </p>
                <h1 className="mb-4 text-white">Why Choose Us.. ?</h1>
                <p className="Paragraph text-white ">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <div className="Feature_items p-lg-5 ps-lg-0 ">
                  <Col lg={12}>
                    <Row className="g-4">
                      <Col lg={6}>
                        <div className="d-flex align-items-center justify-content-start mb-3">
                          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light">
                            <FontAwesomeIcon
                              className="Icon_feature"
                              icon={faUser}
                            />
                          </div>
                          <div className="ms-4">
                            <p className="text-white mb-2">Experience</p>
                            <h5 className="text-white mb-0 fw-bold">Doctors</h5>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="d-flex align-items-center  justify-content-start mb-3">
                          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light">
                            <FontAwesomeIcon
                              className="Icon_feature"
                              icon={faCheck}
                            />
                          </div>
                          <div className="ms-4">
                            <p className="text-white mb-2">Quality</p>
                            <h5 className="text-white mb-0 fw-bold">
                              Services
                            </h5>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="d-flex align-items-center  justify-content-start mb-3">
                          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light">
                            <FontAwesomeIcon
                              className="Icon_feature"
                              icon={faComment}
                            />
                          </div>
                          <div className="ms-4">
                            <p className="text-white mb-2">Positive</p>
                            <h5 className="text-white mb-0 fw-bold">
                              Consultation
                            </h5>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="d-flex align-items-center  justify-content-start mb-3">
                          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light">
                            <FontAwesomeIcon
                              className="Icon_feature"
                              icon={faHeadphones}
                            />
                          </div>
                          <div className="ms-4">
                            <p className="text-white mb-2">24 Hours</p>
                            <h5 className="text-white mb-0 fw-bold">Support</h5>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </div>
            </Col>
            <Col lg={6} className=" pe-lg-0" style={{ minHeight: "400px" }}>
              <div className="imageAbout position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={featureImg}
                  alt="Feature img"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
