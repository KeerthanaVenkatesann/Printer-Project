import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import CountUp from "react-countup";
import { TiTickOutline } from "react-icons/ti";
import CarouselTwo from "../Home/HomePage/Carousel/CarouselTwo";
import CoutClients from "../CountClients/CoutClients";
import Footer from "../Home/Footer/Footer";
import Clients from "../ClientsLogo/Clients";

export default function About() {
  const [triggerCount, setTriggerCount] = useState(false);

  useEffect(() => {
    setTriggerCount(true);
  }, []);

  return (
    <>
      <div className="allwin-print">
        <div className="mx-auto text-center">
          <div>
            <h1 className="header-list mb-3 fs-2">About Us</h1>
            <p className="fs-3 w-75 mx-auto allwin-font mt-3 mb-3">
              Allwin Digital was inaugurated in 2014 and has since evolved into
              a leading outdoor advertising agency in Chennai. We specialize in
              advertising brands across various media platforms, including
              hoardings, cinema halls, shopping malls, railway stations,
              airports, and other public places in metropolitan cities.
            </p>
          </div>
          <div className="mt-3 mb-3 ">
            <div className="   m-5">
              <h1 className=" mb-3 fs-2  header-list">Why Us?</h1>
              <h4 className="mt-3 allwin-font fw-bold">
                <TiTickOutline className="fs-2 mb-1 mt-1" />
                15 Years of Experience in Advertising
              </h4>
              <p >
                With over 15 years of expertise, we excel in delivering
                effective advertising solutions.
              </p>
              <h4 className="allwin-font fw-bold">
                <TiTickOutline className="fs-2 mb-1" />
                Best Plans for Your Brand and Budget
              </h4>
              <p >
                We offer the best plans tailored to fit your brand's needs and
                your budget.
              </p>
              <h4 className="allwin-font fw-bold">
                <TiTickOutline className="fs-2 mb-1" />
                Comprehensive Advertising and Branding Services
              </h4>
              <p >
                We provide all your advertising and branding needs under one
                roof.
              </p>
              <h4 className="allwin-font fw-bold">
                <TiTickOutline className="fs-2 mb-1" />
                On-Time Services
              </h4>
              <p >
                We are committed to delivering our services on time, every time.
              </p>
              <h4  className="allwin-font fw-bold">
                <TiTickOutline className="fs-2 mb-1" />
                Flexible and Client-Centric Approach
              </h4>
              <p >
                We pride ourselves on being flexible and meeting the unique
                needs of each client.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="stats-container bg-given p-3">
            <div className="stat-block">
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
