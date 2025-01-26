import React from "react";
import './WhyChooseUs.css'
import { Allimages } from "../Asstes/Allimages";
const WhyChooseUs = () => {
  return (
    <section className="py-5 ">
      <div className="container">
       
        <div className="row g-4">
        <div className="col-md-6">
            <div className="  p-4">
            <div className="text-uppercase text-warning ">Why RegisterKaro.in</div>

              <h2 className="fw-bold mb-4">Why Choose Register Karo</h2>
        <p className="mb-5">
          It is with consistent services and results that build trust with the people and that in turn helps us to serve the business better.
        </p>
            </div>
          </div>
          <div className="col-md-3  text-center">
            <div className="organ p-4">
              <div className="mb-3">
        <img src={Allimages.Shelid} className="Shelid"/>
              </div>
              <h5 className="fw-bold">Confidential & Safe</h5>
              <p>All your private information is safe with us.</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="green  border-0  p-4">
              <div className="mb-3">
              <img src={Allimages.Right} className="Shelid"/>
              </div>
              <h5 className="fw-bold">No Hidden Fee</h5>
              <p>Everything is put before you with no hidden charges or conditions.</p>
            </div>
          </div>
          <div className="col-md-3">
            
          </div>
          <div className="col-md-3 text-center">
            <div className="blue p-4">
              <div className="mb-3">
              <img src={Allimages.Smile} className="Shelid"/>
              </div>
              <h5 className="fw-bold">Guaranteed Satisfaction</h5>
              <p>We ensure that you stay 100% satisfied with our offered services.</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="pink p-4">
              <div className="mb-3">
              <img src={Allimages.Person} className="Shelid"/>
              </div>
              <h5 className="fw-bold">Expert CA/CS Assistance</h5>
              <p>Prompt support from our in-house expert professionals.</p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <div className="light p-4">
              <div className="mb-3">
              <img src={Allimages.Shelid} className="Shelid"/>
              </div>
              <h5 className="fw-bold">Confidential & Safe</h5>
              <p>All your private information is safe with us.</p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
