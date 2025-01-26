import React from "react";
import './HeroSection.css'
import { Allimages } from "../Asstes/Allimages";

const HeroSection = () => {
  return (
    <section
      className="py-5 text-center hero"
     
     
    >
      <div className="container">
        <span className="text-uppercase fw-bold text-white mb-2">1% of the Industry</span>
        <h1 className=" digital mb-4 text-white">Welcome to your new digital reality. Now.</h1>
        <div className="rightleftmain justify-content-center align-items-center px-5">
          <input
            type="email"
            className="form-control  text-muted controlfrom "
            placeholder="Enter Your Email"
            style={{ borderRadius: "6px 1px 1px 6px" }}
          />
          <button
            className="btn btn-warning text-white btnfrom px-4"
            style={{ borderRadius: "1px 6px 6px 1px" }}
          >
            Submit
          </button>
        </div>
        <div className="rightleftmain justify-content-center mt-4 text-white ">
          <div className="rightleft rightleft1">
            <img src={Allimages.whiteright} alt="" className="whiteright " />
             Instant results
          </div>
          <div className="rightleft rightleft2 ">
          <img src={Allimages.whiteright} alt="" className="whiteright " />
          User-friendly interface
          </div>
          <div className="rightleft">
          <img src={Allimages.whiteright} alt="" className="whiteright " />
          Personalized customization
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
