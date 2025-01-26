import React from "react";
import { Allimages } from "../Asstes/Allimages";

const Trusted = () => {
  return (
    <div className="trusted-by-container">
     
      <div className="container text-center py-5">
     
        <div className="row Trusted pt-5">
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector5} alt="Oracle.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector6} alt="Morpheus.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector7} alt="Morpheus.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector8} alt="Monday.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector9} alt="monday.com" className=" trusted-logo" />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 p-3">
            <img src={Allimages.vector10} alt="segment.com" className=" trusted-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
