import React, { Fragment } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgAboutOne from "../img/about-1.jpg";
import imgAboutTwo from "../img/about-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function AboutUs() {
  return (
    <Fragment>
      <div className="AboutUs ">
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <div className="d-flex  flex-column mb-5  position-relative">
                <img
                  className=" rounded imgAboutOne align-self-end"
                  src={imgAboutOne}
                  alt="About One"
                />
                <img
                  className="img-fluid imgAboutTwo  rounded w-50 bg-white pt-3 pe-3"
                  src={imgAboutTwo}
                  alt="About Two"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="content">
                <p className="d-inline-block border rounded-pill py-1 px-4 mt-4">
                  About Us
                </p>
                <h1 className="mb-4">
                  Why You Should Trust Us? Get Know About Us!
                </h1>
                <p className="Paragraph">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p className="mb-4 Paragraph">
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  No stet est diam rebum amet diam ipsum. Clita clita labore,
                  dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <FontAwesomeIcon className="Check" icon={faCheck} />
                  Quality health care
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <FontAwesomeIcon className="Check" icon={faCheck} />
                  Only Qualified Doctors
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <FontAwesomeIcon className="Check" icon={faCheck} />
                  Medical Research Professionals
                </p>
                <button className="btn btn-primary rounded-pill py-3 px-5 mt-3">
                  Read More
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
