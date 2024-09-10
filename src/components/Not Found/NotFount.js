import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
export default function NotFount() {
  return (
    <Fragment>
      <div className="NotFount mt-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <FontAwesomeIcon
                  className="display-1 text-primary"
                  icon={faExclamationTriangle}
                />

                <h1 class="display-1 fw-bold">404</h1>
                <h1 class="mb-4 fw-bold">Page Not Found</h1>
              </div>
              <p class="mb-4 text-center">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary text-center rounded-pill py-3 px-5 mt-3">
                  Go Back To Home
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
