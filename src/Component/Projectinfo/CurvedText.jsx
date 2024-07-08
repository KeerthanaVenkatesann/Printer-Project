
import React from "react";
import "./Curved.css";

const CurvedText = () => {
  return (
    <svg viewBox="0 0 500 500" className="curved-text-svg">
      <defs>
        <path
          id="curve"
          d="
            M 250, 250
            m -200, 0
            a 200,200 0 1,1 400,0
            a 200,200 0 1,1 -400,0
          "
        />
      </defs>
      <text width="500" className="curved-text">
        <textPath href="#curve" className="fs-1 ">
          Welcome to Allwin Products Your Imagination, Our Innovation - Allwin Digital
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedText;
