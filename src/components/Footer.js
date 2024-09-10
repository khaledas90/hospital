import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
export default class Doctors extends Component {
  render() {
    return (
      <Fragment>
        <div className="Footer container-fluid  text-light footer mt-5 pt-5 ">
          <Container className="py-5">
            <Row className="g-5">
              <Col lg={3}>
                <h5 class="text-light mb-4">Address</h5>
                <p class="mb-2">
                  <FontAwesomeIcon
                    className="icon_details_footer"
                    icon={faMapLocation}
                  />{" "}
                  Alexandria
                </p>
                <p class="mb-2">
                  <FontAwesomeIcon
                    className="icon_details_footer"
                    icon={faPhone}
                  />{" "}
                  01019626952
                </p>
                <p class="mb-2">
                  <FontAwesomeIcon
                    className="icon_details_footer"
                    icon={faEnvelope}
                  />{" "}
                  khaledah826@gmail.com
                </p>
                <div class="team-social text-center">
                  <FontAwesomeIcon className="IconFooter" icon={faFacebook} />
                  <FontAwesomeIcon className="IconFooter" icon={faInstagram} />
                  <FontAwesomeIcon className="IconFooter" icon={faTwitter} />
                  <FontAwesomeIcon className="IconFooter" icon={faYoutube} />
                </div>
              </Col>
              <Col lg={3}>
                <h5 class="text-light mb-4">Services</h5>
                <p className=" itemfoot mb-2 Btn-footer">Cardiology</p>
                <p className="mb-2 Btn-footer">Pulmonary</p>
                <p className="mb-2 Btn-footer">Neurology</p>
                <p className="mb-2 Btn-footer">Orthopedics</p>
                <p className="mb-2 Btn-footer">Laboratory</p>
              </Col>
              <Col lg={3}>
                <h5 className="text-light mb-4">Quick Links</h5>
                <p className="mb-2 Btn-footer">About Us</p>
                <p className="mb-2 Btn-footer">Contact Us</p>
                <p className="mb-2 Btn-footer">Our Services</p>
                <p className="mb-2 Btn-footer">Terms & Condition</p>
                <p className="mb-2 Btn-footer">Support</p>
              </Col>

              <Col lg={3}>
                <h5 className="text-light mb-4">Newsletter</h5>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </Col>
              <Col lg={12}>
                <div className="copyright mt-2 pt-4 border-top">
                  <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                      &copy; <span className="border-bottom"></span> hospital,
                      All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                      Designed By{" "}
                      <span class="border-bottom">Khaled Ahmed</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
