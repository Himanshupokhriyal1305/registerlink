import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Allimages } from "../Asstes/Allimages";

const CardComponent = () => {
  const cards = [
    {
      image: Allimages.Accelerate, // Replace with your image URL
      author: "Prabhash Mishra",
      date: "1 Jan 2023 • Today",
      title: "Small Business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      image: Allimages.Accelerate1, // Replace with your image URL
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      image: Allimages.Accelerate2, // Replace with your image URL
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
      tags: ["Audit", "Money Back"],
    },
    {
        image: Allimages.Accelerate3, // Replace with your image URL
        author: "Rakhi Verma",
        date: "1 Jan 2023",
        title: "Growing Business Package",
        description:
          "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
        tags: ["Audit", "Money Back"],
      },
      {
        image: Allimages.Accelerate, // Replace with your image URL
        author: "Rakhi Verma",
        date: "1 Jan 2023",
        title: "Growing Business Package",
        description:
          "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
        tags: ["Audit", "Money Back"],
      },
      {
        image: Allimages.Accelerate4, // Replace with your image URL
        author: "Rakhi Verma",
        date: "1 Jan 2023",
        title: "Growing Business Package",
        description:
          "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
        tags: ["Audit", "Money Back"],
      },
  ];

  return (
    <div className="container my-5">
      <div className="row">
      <div className="text-center mb-4">
      <h6 className="text-uppercase text-warning RegisterW ">
                Welcome to Registerkaro.in
              </h6>
        <h2 className="ExploreOurServices">Accelerate Digital Transformation</h2>
      </div>
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="" style={{gap:"10px"}}>
              <img
                src={card.image}
                alt="Card"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="text-muted">{`${card.author} • ${card.date}`}</h6>
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <div>
                  {card.tags.map((tag, idx) => (
                    <span
                      className="badge bg-primary text-light me-2"
                      key={idx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
