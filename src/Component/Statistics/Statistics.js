import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Statistics.css'
const Statistics = () => {
  const stats = [
    { number: "1M+", label: "CUSTOMERS", gradient: "text-gradient-blue" },
    { number: "12+", label: "YEARS OF EXCELLENCE", gradient: "text-gradient-red" },
    { number: "41+", label: "R&D ENGINEERS", gradient: "text-gradient-blue" },
    { number: "78+", label: "COUNTRIES", gradient: "text-gradient-gold" },
    { number: "3287+", label: "PARTNERS", gradient: "text-gradient-gold" },
    { number: "41+", label: "AWARDS RECEIVED", gradient: "text-gradient-gold" },
  ];

  return (
    <div className="container py-5 text-center">
      <div className="row">
      <h6 className="text-uppercase text-warning RegisterW ">
                Welcome to Registerkaro.in
              </h6>
      <h2 className="trusted-by-some ">
      Some Numbers are important      </h2>
        {stats.map((stat, index) => (
          <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
          
            <h2 className={`fw-bold fs-2 mt-3 ${stat.gradient}`}>{stat.number}</h2>
            <p className="text-uppercase mb-0 fw-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;