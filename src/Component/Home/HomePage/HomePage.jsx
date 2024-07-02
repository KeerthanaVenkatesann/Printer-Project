// import Aos from 'aos';
// import React, { useEffect } from 'react'


// export default function HomePage() {
//   useEffect(() => {
//     Aos.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);
//   return (
//     <div className=' bg-black '>
//         <div className="ms-5 pe-5 d-flex justify-content-start align-items-center vh-100">
//         <div data-aos="fade-right"
//      data-aos-offset="300"
//      data-aos-easing="ease-in-sine" className="text-white display-4  allwin-font ms-5">
//          Allwin Digital
//         </div>
//       </div>
//       <div>
// <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
// viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
// <defs>
// <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
// </defs>
// <g class="parallax">
// <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
// <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
// <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
// <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
// </g>
// </svg>
// </div>


//  </div>
//   )
// }



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css'; // Import your component CSS file here

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='bg-black'>
      <div className="ms-md-5 pe-md-5 homepage-bg">
       <div> <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-white allwin-font ms-md-5 ps-md-5"
        >
         <h1 >Tranforming Ideas | Digital Reality</h1>
         <h1 className='allwin-name mt-4  text-end'> Allwin Digital </h1>
        </div>
        
        </div>
      </div>
      {/* <div>
   
        <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div> */}
     
    </div>
  );
}
