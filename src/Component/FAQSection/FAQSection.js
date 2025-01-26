import React from "react";

const FAQSection = () => {
  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <p className="text-uppercase text-warning fw-bold mb-1">FAQ</p>
        <h2 className="fw-bold mb-4  partner ">Frequent Ask Questions</h2>
        <div className="list-group">
          {faqs.map((question, index) => (
            <button
              key={index}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2"
              style={{
                borderRadius: "10px",
                border: "1px solid #ddd",
              
              }}
            >
              {question}
              <i class="fa-solid fa-angle-right"></i>
            </button>
          ))}
        </div>
        <button
          className="btn text-white mt-4 px-4 py-2"
          style={{ borderRadius: "  6px",backgroundColor:" rgba(28, 70, 112, 1)" }}
        >
          Show more <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
