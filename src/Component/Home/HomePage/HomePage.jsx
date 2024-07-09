import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css"; // Import your component CSS file here
import { HiArrowLongRight } from "react-icons/hi2";
import Footer from "../Footer/Footer";

import { useNavigate } from "react-router";
import BallAnimation from "../../BallAnimation/BallAnimation";

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
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-container"
          >
            <h1 className="allwin-font">
              Transforming Ideas | Digital Reality
            </h1>
            <h2 className=" text-center ">
              <i className="cursive-font  ">Allwin | Digital </i>
            </h2>
            {/* <div className="text-center allwin-font mt-3">
              <button
                className="btn btn-outline-light get-button me-md-4"
                onClick={handleSubmit}
              >
                Get started <HiArrowLongRight />
              </button>
              |
              <span
                className=" header-list text-white  ms-md-2 "
                onClick={handlesubmitTwo}
              >
                Learn More
              </span>
            </div> */}
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-container mb-3 mt-4"
          >
            {/* <img src="/Assests/bg.jpg" alt="" className="first-image-girl mb-5 mt-5" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
