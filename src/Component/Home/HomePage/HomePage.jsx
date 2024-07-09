import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css"; // Import your component CSS file here
import { HiArrowLongRight } from "react-icons/hi2";
import Footer from "../Footer/Footer";

import { useNavigate } from "react-router";
import BallAnimation from "../../BallAnimation/BallAnimation";
import Logo from "../../Logo/Logo";

export default function HomePage() {
  const nav = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const handleSubmit = () => {
    nav("/proinfo");
  };

  const handlesubmitTwo = () => {
    nav("/about");
  };

  return (
    <>
      <div className="homepage-container">
        <div className="content-container d-flex justify-content-center">
          <div
          
          >
            <h1 className="allwin-font fs-1 text-container"   data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
           >
              Transforming Ideas | Digital Reality
            </h1>
            <h2 className=" text-center ">
        
            </h2>
            <div className="text-center allwin-font mt-3 text-container"   data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <h3
                className="header-list me-md-2 fs-3"
                onClick={handleSubmit}
              >
                Get started <HiArrowLongRight />
              </h3>
              |
              <span
                className=" header-list text-white  ms-md-2 "
                onClick={handlesubmitTwo}
              >
                Learn More
              </span>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
}
