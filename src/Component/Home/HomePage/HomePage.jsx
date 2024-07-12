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
        <div className="content-container d-flex justify-content-center">
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
        </div>
      </div>
    </>
  );
}

