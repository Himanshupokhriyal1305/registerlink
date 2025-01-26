import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import { Allimages } from "../Asstes/Allimages";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      rating: 4.5,
      name: "Chris",
      position: "President and CEO, PrintReach, USA",
      image: Allimages.lady1, // Replace with real image URL
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      rating: 5,
      name: "John",
      position: "Director, XYZ Corp, UK",
      image: Allimages.lady1, // Replace with real image URL
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      rating: 4,
      name: "Anna",
      position: "Manager, ABC Ltd, India",
      image: Allimages.lady1, // Replace with real image URL
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      rating: 4,
      name: "Anna",
      position: "Manager, ABC Ltd, India",
      image: Allimages.lady1, // Replace with real image URL
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      rating: 4,
      name: "Anna",
      position: "Manager, ABC Ltd, India",
      image: Allimages.lady1, // Replace with real image URL
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      rating: 4,
      name: "Anna",
      position: "Manager, ABC Ltd, India",
      image: Allimages.lady1, // Replace with real image URL
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="fa-solid fa-star text-warning"></i>
        ))}
        {halfStar && (
          <i className="fa-solid fa-star-half-stroke text-warning"></i>
        )}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <i key={i} className="fa-regular fa-star text-warning"></i>
        ))}
      </>
    );
  };

  return (
    <div className="testimonial-section py-5 px-5  text-white">
      <div className="position-relative">
        <div className="">
          <div>
            <h2 className="ms-5 ps-5 mb-4 about">What people say about us</h2>
          </div>
          <div className="position-absolute top-0 end-0 p-4">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-circle p-3"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-warning rounded-circle p-3"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div>
                  <div className="d-flex ms-5 ps-5 test testimonial-card1 ">
                    <div className=" g-4 m-4 p-3 testimonial-card col-md-6  bg-white text-dark rounded">
                      <div className="quote-icon mb-3 text-primary justify-content-between d-flex">
                        <div>
                          <img
                            src={Allimages.inverted}
                            alt={testimonial.name}
                            className="user1 me-3"
                          />
                        </div>
                        <div className="stars mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="testimonial-text mb-3">
                        {testimonial.text}
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div>
                          <h6 className="mb-0 testimonial-text fw-bold">
                            {testimonial.name}
                          </h6>
                          <p className="mb-0 text-muted testimonial-text">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="g-4 m-4 p-3 testimonial-card col-md-6  bg-white text-dark rounded">
                      <div className="quote-icon mb-3 text-primary justify-content-between d-flex">
                        <div>
                          <img
                            src={Allimages.inverted}
                            alt={testimonial.name}
                            className="user1 me-3"
                          />
                        </div>
                        <div className="stars mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="testimonial-text mb-3">
                        {testimonial.text}
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div>
                          <h6 className="mb-0">{testimonial.name}</h6>
                          <p className="mb-0 text-muted small">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" g-4 m-4 p-3 testimonial-card col-md-6 bg-white text-dark rounded">
                      <div className="quote-icon mb-3 text-primary justify-content-between d-flex">
                        <div>
                          <img
                            src={Allimages.inverted}
                            alt={testimonial.name}
                            className="user1 me-3"
                          />
                        </div>
                        <div className="stars mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="testimonial-text mb-3">
                        {testimonial.text}
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div>
                          <h6 className="mb-0">{testimonial.name}</h6>
                          <p className="mb-0 text-muted small">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
