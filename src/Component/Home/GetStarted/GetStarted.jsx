import React from "react";
import "./GetStarted.css";
import Whatsapp from "../../Whatsapp/Whatsapp";

import CarouselTwo from "../HomePage/Carousel/CarouselTwo";

export default function GetStarted() {
  return (
    <>
      <div className="top-container w-100 p-5">
        <div className=" d-flex justify-content-center   align-items-center   content-font ">
          <div className="w-75  bg-given rounded p-3 d-flex justify-content-around ">
           
              <div className="text-start get-in-start ">
                <h4 className=" text-col ">Get In</h4>
                <h1 className="text-black">Touch With Us</h1>
              </div>
              <div className="whatsapp-button  d-flex justify-content-center  text-black  align-items-center  ">
                {/* WhatsApp button implementation can go here */}
              
                 <Whatsapp />
              </div>
            </div>
          
        </div>
      </div>
      {/* <CarouselTwo /> */}
    </>
  );
}
