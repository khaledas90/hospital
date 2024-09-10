import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../App.css";
import Logo from "./img/hospital.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    const handleResizeDrob = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeDrob);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("resize", handleResizeDrob);
    };
  }, []);

  const toggleMenu = () => {
    const nav = document.querySelector(".nav ul");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else if ((nav.style.display = "none")) {
      nav.style.display = "block";
    }
  };

  const toggleDropMenu = () => {
    const drobdown = document.querySelector(".drobdown-menu");
    if (drobdown.style.display === "block") {
      drobdown.style.display = "none";
    } else if ((drobdown.style.display = "none")) {
      drobdown.style.display = "block";
    }
  };

  return (
    <div className="Navbar">
      <div className="content">
        <div className="logo">
          <h1>
            <img src={Logo} className="LogoImg ml-2" alt="Klinik Logo" />
            <span>Klinik</span>
          </h1>
        </div>
        <div className="navbar_links">
          <div className="nav">
            <ul style={{ display: isMobile ? "none" : "flex" }}>
              <li>
                <Link exact="true" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link exact="true" to="/AboutUs">
                  About
                </Link>
              </li>
              <li>
                <Link exact="true" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <div onClick={toggleDropMenu} className="linkPage">
                  page <FontAwesomeIcon icon={faAngleDown} />
                  <ul
                    style={{ display: isMobile ? "none" : "block" }}
                    className="drobdown-menu"
                  >
                    <li className="drobdown-items">
                      <Link exact="true" to="/Features">
                        Feature
                      </Link>
                    </li>
                    <li className="drobdown-items">
                      <Link exact="true" to="/Doctors">
                        Doctors
                      </Link>
                    </li>
                    <li className="drobdown-items">
                      <Link exact="true" to="/Appointment">
                        Appointment
                      </Link>
                    </li>
                    <li className="drobdown-items">
                      <Link exact="true" to="/Testimonial">
                        Testimonial
                      </Link>
                    </li>
                    <li className="drobdown-items">
                      <Link exact="true" to="/NotFound">
                        404 Page
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link exact="true" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
            <FontAwesomeIcon
              onClick={toggleMenu}
              className="OpenNave"
              icon={faBars}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
