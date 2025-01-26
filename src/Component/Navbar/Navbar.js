import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Optional: For custom styling
import { Allimages } from "../Asstes/Allimages";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid px-5">
      <div>
              <img src={Allimages.logo} alt="Logo" className="logo" />
            </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle active d-flex align-items-center"
    href="#"
    id="servicesDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Our Services
  </a>
  <ul className="dropdown-menu active" aria-labelledby="servicesDropdown">
    <li><a className="dropdown-item" href="/service1">Service 1</a></li>
    <li><a className="dropdown-item" href="/service2">Service 2</a></li>
    <li><a className="dropdown-item" href="/service3">Service 3</a></li>
  </ul>
</li>


            <li className="nav-item">
              <a className="nav-link active" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/contact-us">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about-us">About Us</a>
            </li>
            {/* Search Section */}
            <li className="nav-item search-container">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search..."
                />
              </div>
            </li>
          </ul>
          <div className="ms-3 Talk-To-expert1">
            <a href="/talk-to-expert" className="btn  Talk-To-expert text-white fw-bold">
              Talk An Expert
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
