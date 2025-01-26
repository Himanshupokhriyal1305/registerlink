import React from "react";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Font Awesome (Optional)
import "@fortawesome/fontawesome-free/css/all.min.css";

import './HeaderBar.css'




const HeaderBar = () => {
  return (
   
    <div className="landing text-white py-2">
      {/* Left content */}
      <div className=" d-flex Header align-items-center justify-content-end ps-2 ">
      <div className="d-flex align-items-center">
        <i className="fa-regular fa-envelope me-2"></i>
        <span className="me-3">www.registerkaro.in</span>
      </div>

      {/* Right content */}
      <div className="d-flex align-items-center me-5 hear">
        <i className="fa-solid fa-phone me-2"></i>
        <span>+918447746183</span>
        <div className="border-start border-light mx-3"></div>
        <i className="fa-brands fa-facebook-f me-1"></i>
        <i className="fa-brands fa-instagram me-1"></i>
        <i className="fa-brands fa-twitter me-1"></i>
        <i className="fa-brands fa-pinterest"></i>
      </div>
    </div>
    </div>
  );
};

export default HeaderBar;
