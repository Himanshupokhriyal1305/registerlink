import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutSection.css";
import { Allimages } from "../Asstes/Allimages";
const AboutSection = () => {
  return (
    <div className="my-5 bann">

   
      <div className="container  ">
      
        <div className="row align-items-center break">
      
          {/* Text Section */}
          <div className="col-md-6 breack2">
            <div>
              <h6 className="text-uppercase text-warning RegisterW ">
                Welcome to Registerkaro.in
              </h6>
              <h2 className="fw-bold Register">
                About <span className="text-warning">Register Karo</span>
              </h2>
              <div className="Intelegenciaes pe-4">
                <p className="text-muted Intelegencia ">
                  We have been using Intelegencia as our DevOps vendor for our
                  field service applications over the last couple of years and
                  I’m extremely pleased with their performance, ability to
                  execute, and willingness to adapt in our ever-changing
                  environment. Perry is an outstanding leader who is fanatical
                  about customer satisfaction. He has built a solid team which
                  has consistently delivered on projects thereby exceeding
                  everyone’s expectations.
                </p>
                <p className="text-muted Intelegencia pe-4">
                  I would strongly recommend their services to any organization
                  that is looking for solid, reliable, and predictable outcomes.
                </p>
              </div>
            </div>
            <div className="LearnMore align-items-center">
          <a href="#" className="text-decoration-none text-white">
                            Learn more
                            <img
                              src={Allimages.arrow1}
                              alt="Logo"
                           
                              className="logoarrow mx-2  "
                            />
                </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center breack2">
            <div>
              <img
                src={Allimages.pepoles}
                alt="Team"
                className="img-fluid rounded"
                style={{  }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
