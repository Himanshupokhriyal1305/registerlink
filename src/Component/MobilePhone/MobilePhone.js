import React from "react";
import "./MobilePhone.css"; // Optional custom styles if needed
import { Allimages } from "../Asstes/Allimages";

const MobilePhone = () => {
  return (
    <div className="video-intro-section      position-relative text-light p-5">
      <div className="container">
        <div className="row align-items-center break">
          {/* Left Content */}
          <div className="col-md-6 breack2 p-5">
            <h2 className="fw-bold mb-3 Services">
              Manage Your Services by your 
            </h2>
            <h2 className="fw-bold mb-3 Services">
              Mobile Phone
            </h2>
            <p className="mb-4 Velites  ">
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in
              tracking your progress.
            </p>
            <div className="mb-3 d-flex align-items-start">
              
             
                <p className="">Get the App</p>
               
           
            </div>
            <div className="d-flex align-items-start">
             
              <div className="LearnMore align-items-center">
                <a href="#" className="text-decoration-none text-white">
                  Learn more
                  <img
                    src={Allimages.arrow}
                    alt="Logo"
                    className="logoarrow mx-2  "
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6 text-center breack2">
            <div className="video-thumbnail">
              <img
                src={Allimages.Mobilephone} // Replace with your image URL
                alt="Video Thumbnail"
                className="img-fluid rounded"
              />
              <div className="play-button position-absolute top-50 start-50 translate-middle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePhone;
