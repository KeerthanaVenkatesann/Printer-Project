// // import React from "react";
// // import CountCard from "./CountCard";
// // export default function CoutClients() {
// //   const data = [
// //     { end: 15, label: " Experience" },
// //     { end: 500, label: "Cities We Serve" },
// //     { end: 3000, label: "Active Hoarding" },
// //     { end: 2500, label: "Tolet" },
// //     { end: 5000, label: "Happy Clients" },
// //   ];

// //   return (
// //     <div className="countup-section animate__backInUp animate__animated  animate__repeat-1">
// //       {data.map((item, index) => (
// //         <CountCard key={index} end={item.end} label={item.label} />
// //       ))}
// //     </div>
// //   );
// // }

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CountCard from "./CountCard";

// export default function CoutClients() {
//   const data = [
//     { end: 15, label: " Experience" },
//     { end: 500, label: "Cities We Serve" },
//     { end: 3000, label: "Active Hoarding" },
//     { end: 2500, label: "Tolet" },
//     { end: 5000, label: "Happy Clients" },
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="countup-section">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="animate__backInUp animate__animated animate__repeat-1"
//           data-aos="fade-up"
//           data-aos-delay={`${index * 200}`}
//         >
//           <CountCard end={item.end} label={item.label} />
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountCard from "./CountCard";

export default function CoutClients() {
  const data = [
    { end: 15, label: " Experience" },
    { end: 500, label: "Cities We Serve" },
    { end: 3000, label: "Active Hoarding" },
    { end: 2500, label: "Tolet" },
    { end: 5000, label: "Happy Clients" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="countup-section">
      {data.map((item, index) => (
        <div
          key={index}
          className="animate__backInUp animate__animated animate__repeat-1"
          data-aos="fade-up"
          data-aos-delay={`${index * 200}`}
        >
          <CountCard end={item.end} label={item.label} />
        </div>
      ))}
    </div>
  );
}
