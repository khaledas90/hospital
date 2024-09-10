import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import TestiMonialsDetails from "./TestiMonialsDetails";
import userPicOne from "../img/testimonial-1.jpg";
import userPicTwo from "../img/testimonial-2.jpg";
import userPicThree from "../img/testimonial-3.jpg";
import "./tesimonals.css";

const TestiMonials = () => {
  const testiMonials = [
    {
      id: 1,
      name: "Rekob Ramya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      address: "USA",
      img: userPicOne,
    },
    {
      id: 2,
      name: "Brandon Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      address: "USA",
      img: userPicTwo,
    },
    {
      id: 3,
      name: "Steve Burns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      address: "USA",
      img: userPicThree,
    },
    {
      id: 4,
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      address: "USA",
      img: userPicTwo,
    },
  ];

  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5">
        <div className="content  text-center">
          <p className="d-inline-block border rounded-pill py-1 px-4 mt-4">
            Testimonial
          </p>
          <h1 className="mb-4 fw-bold">What Say Our Patients!</h1>
        </div>

        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonials"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div className="item">
                  <div className="shadow-effect">
                    <img className="img-circle" alt="" src={userPicThree} />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                  <div className="testimonial-name">
                    <h5>Rajon Rony</h5>
                    <small>ITALY</small>
                  </div>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail) => (
                  <TestiMonialsDetails
                    testiMonialDetail={testiMonialDetail}
                    key={testiMonialDetail.id}
                  />
                ))
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiMonials;
