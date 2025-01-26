import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
import { Allimages } from "../Asstes/Allimages";
const Footer = () => {
  return (
    <footer className="footer text-white py-5">
      <div className="container footerfont">
        <div className="row ">
          <div className="col-md-3 col-sm-6">
            <p className="mb-3 ">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="d-flex gap-3 mb-5">
              <i className="fab fa-facebook fa-lg"></i>
              <i className="fab fa-google fa-lg"></i>
              <i className="fab fa-apple fa-lg"></i>
              <i className="fab fa-instagram fa-lg"></i>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <h6 className="text-warning">START A BUSINESS</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Solutions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h6 className="text-warning">GOVERNMENT REGISTRATION</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  App
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6">
            <h6 className="text-warning">COMPLIANCE & TAX</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Channels
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Scale
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Watch the Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Our Competition
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6">
            <h6 className="text-warning">BIS & CDSCO</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="btn ">
          <img
                src={Allimages.down}
                alt="Card"
                className="card-img-top"
                style={{ height: "56px", objectFit: "cover" }}
              />          </button>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
