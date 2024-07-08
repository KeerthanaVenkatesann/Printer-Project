import React from 'react'
import CountUp from "react-countup";
import "./CountCard.css";


 const CountCard = ({ end, label }) => {
    return (
      <div className="countup-card card print ">
        <h2>
          <CountUp end={end} duration={10} />
          +
        </h2>
        <p className='text-col'>{label}</p>
      </div>
    );
  };
  export  default CountCard