import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SliderHome from "./SliderHome";
import AboutUs from "./About/AboutUs";
import Services from "./Services/Services";
import Feature from "./Features/Features";
import Doctors from "./doctors/Doctors";
import Appointment from "./appointment/appointment";
import TestiMonials from "./TestiMonials/TestiMonials";

const Home = () => {
  return (
    <div className="home_page">
      <div className="home">
        <Row className="d-flex align-items-center">
          <Col lg={6}>
            <div className="Left_home">
              <h1 className="text-weight">
                Good Health Is The Root Of All Happiness
              </h1>
            </div>
            <Row className="mt-4 ml-2 numberCount">
              <Col lg={4} className=" ml-2">
                <div className="border-start border-light  ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    123
                  </h2>
                  <p className="text-light mb-0">Expert Doctors</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    1234
                  </h2>
                  <p className="text-light mb-0">Medical Staff</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    12345
                  </h2>
                  <p className="text-light mb-0">Total Patients</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <SliderHome />
          </Col>
        </Row>
      </div>
      <AboutUs />
      <Services />
      <Feature />
      <Doctors />
      <Appointment />
      <TestiMonials />
    </div>
  );
};

export default Home;
