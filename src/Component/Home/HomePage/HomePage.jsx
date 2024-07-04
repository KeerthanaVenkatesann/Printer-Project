import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css"; // Import your component CSS file here
import { HiArrowLongRight } from "react-icons/hi2";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="homepage-container">
      <div className="content-container d-flex justify-content-around">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-container"
        >
          <h1 className="allwin-font">Transforming Ideas | DigitaL ReaLity</h1>
          <h4 className="allwin-name text-end">ALLwin | DigitaL </h4>
          <div className="text-center allwin-font mt-3">
            <button className="btn btn-outline-light get-button me-md-4">
              Get started <HiArrowLongRight />
            </button>
            |
            <button className=" header-list text-white btn ms-md-2 ">
              Learn More
            </button>
          </div>
        </div>
        <div data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-container mb-3">
          <img src="/Assests/Gallery/firstimage-removebg.png" alt="" className="first-image mb-5" />
        </div>
      </div>
    </div>
  );
}
