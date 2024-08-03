

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import { HiArrowLongRight } from "react-icons/hi2";
import Footer from "../Footer/Footer";

import { useNavigate } from "react-router";
import BallAnimation from "../../BallAnimation/BallAnimation";
import Logo from "../../Logo/Logo";
import Slideshow from "../../Slideshow/Slideshow";

export default function HomePage() {
const nav = useNavigate();
useEffect(() => {
AOS.init({
duration: 1000,
easing: "ease-in-out",
once: true,
});
}, []);

return (
<>
<div className="homepage-container">
<div className="content-container d-flex justify-content-around images-top">
<div>
  <img
    src="/Assests/Gallery/two.png"
    alt=""
    className="allwins2 low-opacity first-image-girl "
    data-aos="flip-left"
    data-aos-duration="1500"
  />
</div>
<div>
  <div className="mt-md-5">
    <div>
      <img
        src="/Assests/logo D.jpg"
        alt=""
        className="allwins"
        data-aos="fade-down"
      />
      <img
        src="/Assests/logo B.jpg"
        alt=""
        className="allwins"
        data-aos="fade-up"
        data-aos-delay="200"
      />
    </div>
    <div>
      <img
        src="/Assests/logo A.jpg"
        alt=""
        className="allwins"
        data-aos="fade-up"
        data-aos-delay="400"
      />
      <img
        src="/Assests/logo C.jpg"
        alt=""
        className="allwins "
        data-aos="zoom-in-left"
        data-aos-delay="600"
      />
    </div>
  </div>
</div>

<div>
  <img
    src="/Assests/Gallery/one.png"
    data-aos="fade-left"
    data-aos-duration="1500"
    className="allwins3 low-opacity color-strike "
    alt=""
  />
</div>
</div>
<div
className="text-light text-center branches  mb-5 "
data-aos="fade-up"
data-aos-duration="1500"
>
<div className="d-flex justify-content-center flicker">
  
  <li>
    <span className="fs-4 branch">BRANCHES</span>
    <br></br>
  <span className="fs-1"> Vadapalani</span> 
  </li>
</div>
<div className="d-flex justify-content-around flicker  nagar ">
  <li>
    Ashok Nagar
  </li><li>
    Guduvanchery
  </li>
</div>

</div>
</div>
</>
);
}
