import React, { Component, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="d-flex parentHead ">
            <div>
              <span>
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                Alexandria
              </span>
              <span className="ml-4">
                <FontAwesomeIcon className="icon" icon={faClock} />
                Mon-Fri: 09.00 AM
              </span>
            </div>
            <div lg={6} className="text-end">
              <span>
                <FontAwesomeIcon className="icon" icon={faPhone} />
                +201090898650
              </span>
              <span className="ml-4">
                <FontAwesomeIcon className="icon iconBrand" icon={faFacebook} />
                <FontAwesomeIcon className="icon iconBrand" icon={faTwitter} />
                <FontAwesomeIcon className="icon iconBrand" icon={faYahoo} />
                <FontAwesomeIcon
                  className="icon iconBrand"
                  icon={faInstagram}
                />
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
