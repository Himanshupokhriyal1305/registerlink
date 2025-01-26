import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import { Allimages } from "../Asstes/Allimages";
const Banner = () => {
  return (
    <div className="banner py-5">
    <div className="Company">
            <div className="mb-2">
              <button className="btn btn-outline-light  Annual ">
                Annual Compliance
              </button>
            </div>
            <div className="mb-2">
              <button className="btn btn-outline-light  Annual ">
                Payroll Services
              </button>
            </div>
            <div className="mb-2">
              <button className="btn btn-outline-light  Annual ">
                Company Formation
              </button>
            </div>
            <div className="mb-2">
              <button className="btn btn-outline-light  Annual">
                Annual Compliance
              </button>
            </div>
          </div>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Section */}
          <div className="col-lg-6">
            <div className="mb-3 d-flex align-items-center">
              <span className="text-warning fw-bold me-2">
              <span className="text-warning fw-bold">★</span>
              Google Rating
              </span>
              <span className="text-warning fw-bold">★★★★★</span>
            </div>
            <h1 className=" partner ">
              Your trusted partner <br /> for{" "}
              <span className="">compliance business needs</span>
            </h1>
            <p className="text-muted my-4 pagra">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various, <strong>registrations</strong>
              , <strong>tax filings</strong>, and other{" "}
              <strong>legal matters</strong>.
            </p>
            <div className="row mb-4 bannerthree">
              <div className=" text-start col-md-3">
              <div className="d-flex">
              <img src={Allimages.window} alt="Logo" className="logowindow mt-2" />

<div><h4 className="fw-bold text-primary">4.5+</h4>
<p className="small text-muted">Customer Rating</p></div> 
</div>
              </div>
              
              <div className=" text-start col-md-3 ">
                <div className="d-flex">
                  <img src={Allimages.user} alt="Logo" className="logouser " />

                  <div>
                    <h4 className="fw-bold text-primary">20,000+</h4>
                    <p className="small text-muted">Clients</p>
                  </div>
                </div>
              </div>
              <div className="text-start  col-md-3">
                <div className="d-flex">
                  <img src={Allimages.hand} alt="Logo" className="logouser " />

                  <div>
                    <h4 className="fw-bold text-primary">99.8%</h4>
                    <p className="small text-muted">Financial Stability</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <a href="/talk-to" className="btn talk-to me-2 fw-bold pagra">
                Talk An Expert
              </a>
              <a href="/how-it-works" className="btn fw-bold pagra">
                See how it works
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 text-center position-relative"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
