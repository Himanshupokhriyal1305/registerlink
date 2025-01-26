import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Allimages } from "../Asstes/Allimages";
import "./ServicesComponent.css";
const ServicesComponent = () => {
  const services = [
    {
      image: Allimages.explore, // Replace with the actual icon (e.g., FontAwesome or SVG)
      title: "Company Formation",
      description:
        "Build web-based solutions that enhance customer experience.",
    },
    {
      image: Allimages.explore1,
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      image: Allimages.explore2,
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
    },
    {
      image: Allimages.explore3,
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
    },
    {
      image: Allimages.explore4,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      image: Allimages.explore5,
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative  design, data insights & technology.",
    },
  ];

  return (
    <div className="Registerkaro">
      
   
    <div className="container py-5 ">
      <div className="text-center mb-4">
        <h6 className="text-uppercase Services text-warning">
          Welcome to Registerkaro.in
        </h6>
        <h2 className="ExploreOurServices">Explore Our Services</h2>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card  text-center p-4">
              <div className=" six pt-3">
                <div>
                  <img src={service.image} alt="Card" className="service" />
                </div>
                <h5 className="servicetitle pt-3">{service.title}</h5>
                <div className="d-flex justify-content-center pt-3 ">
                  <div className="text-muted description">
                    {service.description}
                  </div>
                </div>
                <a href="#" className="learn ">
                  Learn more
                  <img
                    src={Allimages.arrow}
                    alt="Logo"
                    className="logoarrow mx-2 "
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
      <div className="text-center mt-4 SeeAllServices">
        <button className="btn text-white px-4 py-2">See All Services</button>
      </div>

      </div>
    
    </div>
    </div>
  );
};

export default ServicesComponent;
