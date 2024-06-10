import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="loader-overlay">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loader;
