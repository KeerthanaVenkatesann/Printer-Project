import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import CountUp from "react-countup";
import { TiTickOutline } from "react-icons/ti";
import CarouselTwo from "../Home/HomePage/Carousel/CarouselTwo";
import CoutClients from "../CountClients/CoutClients";
import Footer from "../Home/Footer/Footer";
import Clients from "../ClientsLogo/Clients";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbWaveSawTool } from "react-icons/tb";

export default function About() {
  const [triggerCount, setTriggerCount] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
    const timer = setTimeout(() => {
      setTriggerCount(true);
    }, 1000);

  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="allwin-print">
        <div
          className="mx-auto text-center w-75 about-allwin"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="header-list mb-3 fs-2">About Us</h1>
          <div><TbWaveSawTool className="text-danger fs-3 " /></div>
          <p className="fs-5 w-75 mx-auto print mt-3 mb-3 ">
          
           <i>Allwin Digital was inaugurated in 2014 and has since evolved into a
            leading outdoor advertising agency in Chennai. We specialize in
            advertising brands across various media platforms, including
            hoardings, cinema halls, shopping malls, railway stations, airports,
            and other public places in metropolitan cities.
            </i> </p>
      
        </div>
        <div className="mt-3 mb-3 text-center ">
          <div className="m-5 w-75 mx-auto">
            <h1 className="mb-3 fs-2 header-list">Why Us?</h1>
            <h4 className="mt-3 allwin-font  text-danger" data-aos="fade-left">
              <TiTickOutline className="fs-2 mb-1 mt-1" />
              15 Years of Experience in Advertising
            </h4>
            <p data-aos="fade-left">
              With over 15 years of expertise, we excel in delivering effective
              advertising solutions.
            </p>
            <h4 className="allwin-font  text-danger" data-aos="fade-right">
              <TiTickOutline className="fs-2 mb-1" />
              Best Plans for Your Brand and Budget
            </h4>
            <p data-aos="fade-right">
              We offer the best plans tailored to fit your brand's needs and
              your budget.
            </p>
            <h4 className="allwin-font  text-danger" data-aos="fade-left">
              <TiTickOutline className="fs-2 mb-1" />
              Comprehensive Advertising and Branding Services
            </h4>
            <p data-aos="fade-left">
              We provide all your advertising and branding needs under one roof.
            </p>
            <h4 className="allwin-font  text-danger" data-aos="fade-right">
              <TiTickOutline className="fs-2 mb-1" />
              On-Time Services
            </h4>
            <p data-aos="fade-right">
              We are committed to delivering our services on time, every time.
            </p>
            <h4 className="allwin-font  text-danger" data-aos="fade-left">
              <TiTickOutline className="fs-2 mb-1" />
              Flexible and Client-Centric Approach
            </h4>
            <p data-aos="fade-left">
              We pride ourselves on being flexible and meeting the unique needs
              of each client.
            </p>
          </div>
        </div>
        <div className="d-flex" data-aos="fade-up">
          <div className="stats-container bg-given p-3">
            <div className="stat-block ">
              {triggerCount && (
                <CountUp
                  start={0}
                  end={15}
                  duration={12}
                  suffix="+"
                  className="stat-number"
                />
              )}
              <div className="stat-description text-col">
                Years of Experience
              </div>
            </div>
            <div className="stat-block">
              {triggerCount && (
                <CountUp
                  start={0}
                  end={1000}
                  duration={10}
                  suffix="+"
                  className="stat-number"
                />
              )}
              <div className="stat-description text-col">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
      <CarouselTwo />
      <CoutClients />
      <Clients />
      <Footer />
    </>
  );
}
