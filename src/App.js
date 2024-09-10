import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/About/AboutUs";
import Services from "./components/Services/Services";
import Features from "./components/Features/Features";
import Doctors from "./components/doctors/Doctors";
import Appointment from "./components/appointment/appointment";
import TestiMonials from "./components/TestiMonials/TestiMonials";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/Not Found/NotFount";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/Features" element={<Features />} />
          <Route exact path="/Doctors" element={<Doctors />} />
          <Route exact path="/Appointment" element={<Appointment />} />
          <Route exact path="/Testimonial" element={<TestiMonials />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/NotFound" element={<NotFound />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
