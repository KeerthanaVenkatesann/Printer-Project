// import React from "react";
// import "./ContentBoxOne.css";

// import { AiOutlineAntDesign } from "react-icons/ai";
// import { SiGamedeveloper } from "react-icons/si";
// import { GrDeliver } from "react-icons/gr";
// import GetStarted from "../GetStarted/GetStarted";
// import Footer from "../Footer/Footer";
// import Animation from "../../Animation/Animation";
// import CoutClients from "../../CountClients/CoutClients";
// import Clients from "../../ClientsLogo/Clients";
// import ShortAbout from "../../ShortAbout/ShortAbout";
// // Example icons from react-icons

// export default function ContentBoxOne() {
//   return (
//     <>
//       <div className="card-container  mb-4 mt-4">
//         <div className="text-center card-card  shadow-sm p-3 rounded  animate__repeat-1">
//           <div className="icon-circle mx-auto 	">
//             <AiOutlineAntDesign />
//           </div>
//           <div className=" allwin-name">
//             <span className="card-text">Design</span>
//             <p className="content-one">
//               Creating stunning digital designs tailored for photo prints and
//               business cards that captivate and impress.
//             </p>
//           </div>
//         </div>
//         <div className=" text-center card-card  shadow-sm p-3 rounded  animate__repeat-1">
//           <div className="icon-circle mx-auto">
//             <SiGamedeveloper />
//           </div>
//           <div className=" allwin-name ">
//             <span className="card-text">Create</span>
//             <p className="content-one">
//               Transforming concepts into high-quality printed materials,
//               including custom logos that reflect your brand's identity.
//             </p>
//           </div>
//         </div>
//         <div className=" text-center card-card shadow-sm p-3 rounded  animate__repeat-1">
//           <div className="icon-circle mx-auto">
//             <GrDeliver />
//           </div>
//           <div className=" allwin-name">
//             <span className="card-text">Deliver</span>
//             <p className="content-one">
//               Efficiently producing and delivering printed products with
//               precision and care to meet your business needs on time.
//             </p>
//           </div>
//         </div>
//       </div>

//       <ShortAbout />
//       <Animation />
//       <CoutClients />

//       <Clients />
//       <Footer />
//     </>
//   );
// }

import React, { useEffect } from "react";
import "./ContentBoxOne.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import icons
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiGamedeveloper } from "react-icons/si";
import { GrDeliver } from "react-icons/gr";

// Other component imports
import GetStarted from "../GetStarted/GetStarted";
import Footer from "../Footer/Footer";
import Animation from "../../Animation/Animation";
import CoutClients from "../../CountClients/CoutClients";
import Clients from "../../ClientsLogo/Clients";
import ShortAbout from "../../ShortAbout/ShortAbout";

export default function ContentBoxOne() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="card-container mb-4 mt-4">
        <div
          className="text-center card-card shadow-sm p-3 rounded "
         
          data-aos="zoom-out-right" 
          data-aos-delay="600"
        >
          <div className="icon-circle mx-auto">
            <AiOutlineAntDesign />
          </div>
          <div className="allwin-name">
            <span className="card-text">Design</span>
            <p className="content-one">
              Creating stunning digital designs tailored for photo prints
              and business cards that captivate and impress.
            </p>
          </div>
        </div>
        <div
          className="text-center card-card shadow-sm p-3 rounded "
       
          data-aos="zoom-out-up" 
          data-aos-delay="600"
        >
          <div className="icon-circle mx-auto">
            <SiGamedeveloper />
          </div>
          <div className="allwin-name">
            <span className="card-text">Create</span>
            <p className="content-one">
              Transforming concepts into high-quality printed materials,
              including custom logos that reflect your brand's identity.
            </p>
          </div>
        </div>
        <div
          className="text-center card-card shadow-sm p-3 rounded "
      
          data-aos="zoom-in-left" 
          data-aos-delay="600"
        >
          <div className="icon-circle mx-auto">
            <GrDeliver />
          </div>
          <div className="allwin-name">
            <span className="card-text">Deliver</span>
            <p className="content-one">
              Efficiently producing and delivering printed products with
              precision and care to meet your business needs on time.
            </p>
          </div>
        </div>
      </div>

      <ShortAbout />
      <Animation />
      <CoutClients />
      <Clients />
      <Footer />
    </>
  );
}
