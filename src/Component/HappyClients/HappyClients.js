import React from "react";
import { Allimages } from "../Asstes/Allimages";
import "./HappyClients.css";
const HappyClients = () => {
  return (
    <div className="trusted-by-container text-center pt-5">
      <h2 className="trusted-by-title  ">Our Happy Clients </h2>
      <div className="d-flex justify-content-center ">
        <div className="" style={{ width: "800px" }}>
          <p className="Professionally" >
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource- leveling customer service for
            state of the art customer service.
          </p>
        </div>
      </div>
      
      <div className="container-fluid">
      <div className=" ">
        <img src={Allimages.Pagination} alt="Logo" className="w-100 pt-3 pen " />
      </div>
        <div className="row Clients p-5">
          <div className="col-md-6 col-lg-3 col-sm-6 py-2 d-flex justify-content-center">
            <div className="d-flex  align-items-center " style={{ width: "" }}>
              <div className="contact1">
                {" "}
                <img
                  src={Allimages.Ellipse2}
                  alt="Logo"
                  className=" mx-2 allimages2 "
                />
              </div>
              <div>
                <h6>Get Confirm Mail</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 py-2 d-flex justify-content-center">
            <div className="d-flex align-items-center " style={{ width: "" }}>
              <div className="contact">
                {" "}
                <img
                  src={Allimages.contact}
                  alt="Logo"
                  className=" mx-2 allimages1 "
                />
              </div>
              <div>
                <h6>Get Confirm Mail</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 py-2 d-flex justify-content-center">
            <div className="d-flex  align-items-center " style={{ width: "" }}>
              <div className="contact3">
                <img
                  src={Allimages.boy}
                  alt="Logo"
                  className=" mx-2 allimages3 "
                />
              </div>
              <div>
                <h6>Get Confirm Mail</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 py-2 d-flex justify-content-center">
            <div className="d-flex  align-items-center " style={{ width: "" }}>
              <div>
                <img
                  src={Allimages.Ellipse}
                  alt="Logo"
                  className=" mx-2 allimages "
                />
              </div>
              <div>
                <h6>Get Confirm Mail</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HappyClients;