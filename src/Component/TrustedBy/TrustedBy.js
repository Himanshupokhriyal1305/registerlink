import React from "react";
import { Allimages } from "../Asstes/Allimages";

const TrustedBy = () => {
  return (
    <div className="trusted-by-container">
     
      <div className="container  trusted-by-title py-5">
      <h2 className="trusted-by-title ">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h2>
        <div className="row pt-5">
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector} alt="Oracle.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector1} alt="Morpheus.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector1} alt="Morpheus.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector2} alt="Monday.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector3} alt="monday.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector4} alt="segment.com" className=" trusted-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
