// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./HomePage.css"; // Import your component CSS file here
// import { HiArrowLongRight } from "react-icons/hi2";
// import Footer from "../Footer/Footer";

// import { useNavigate } from "react-router";
// import BallAnimation from "../../BallAnimation/BallAnimation";
// import Logo from "../../Logo/Logo";

// export default function HomePage() {
//   const nav = useNavigate();
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <>
//       <div className="homepage-container">
//         <div className="content-container d-flex justify-content-center">
//           <div
//           >

// <div className="mt-5">

// <div >
// <img src="/Assests/logo D.jpg" alt="" className="allwins"/>
//   <img src="/Assests/logo B.jpg" alt="" className="allwins" />

// </div>
//  <div> <img src="/Assests/logo A.jpg" alt=""  className="allwins"/>
//  <img src="/Assests/logo C.jpg" alt="" className="allwins"/></div>

// </div>

//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
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

  return (
    <>
      <div className="homepage-container">
        <div className="content-container d-flex justify-content-around images-top">
          <div>
            <img
              src="/Assests/Gallery/two.png"
              alt=""
              className="allwins2"
              data-aos="flip-left"
              data-aos-duration="1500"
            />
          </div>
          <div>
            <div className="mt-5">
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
                  className="allwins"
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
              className="allwins3"
              alt=""
            />
          </div>
        </div>
        <div
          className="text-light text-center branches  mb-5 "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="d-flex justify-content-center ">
            {" "}
            <li>
              {" "}
              <span class="  ">(BRANCHES)</span>
              <br></br>
              <span class="flicker">V</span>
  <span class="flicker">ada</span>
  <span class="flicker">p</span>
  <span class="flicker">alani</span>
            </li>{" "}
          </div>
          <div className="d-flex justify-content-around  ">
            <li>
              <span class="flicker">A</span>
              <span class="flicker">shok</span>
              <span class="flicker"> N</span>
              <span class="flicker">agar</span>
            </li>{" "}
            <li>
              <span class="flicker">G</span>
              <span class="flicker">uduvan</span>
              <span class="flicker">c</span>
              <span class="flicker">hery</span>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
