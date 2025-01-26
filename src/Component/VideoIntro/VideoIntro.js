import React from "react";
import "./VideoIntro.css"; // Optional custom styles if needed
import { Allimages } from "../Asstes/Allimages";

const VideoIntro = () => {
  return (
    <div className="video-intro-section  text-light p-5">
      <div className="container">
        <div className="row align-items-center break">
          {/* Left Content */}
          <div className="col-md-6 breack2">
            <h2 className="fw-bold mb-3 partner">Our Video Introductions</h2>
            <p className="mb-4 Velit  ">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
              vulputate pellentesque a diam tincidunt aphis dui.
            </p>
            <div className="mb-3 d-flex align-items-start">
              <div className="icon-container me-3">
              <img
                src={Allimages.bull} // Replace with your image URL
                alt="Video Thumbnail"
                className="img-fluid rounded"
              />              </div>
              <div>
                <h5 className="fw-bold partneres">Explore ideas together</h5>
                <p className="mb-0 Velit ">
                  Engage audience segments and finally create actionable insights. 
                  Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div className="icon-container me-3">
              <img
                src={Allimages.Musi} // Replace with your image URL
                alt="Video Thumbnail"
                className="img-fluid rounded"
              />                </div>
              <div>
                <h5 className="fw-bold partneres">Bring those ideas to life</h5>
                <p className="mb-0 Velit ">
                  Engage audience segments and finally create actionable insights. 
                  Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6 text-center breack2">
            <div className="video-thumbnail position-relative">
              <img
                src={Allimages.lady} // Replace with your image URL
                alt="Video Thumbnail"
                className="img-fluid rounded"
              />
              <div className="play-button position-absolute top-50 start-50 translate-middle">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
