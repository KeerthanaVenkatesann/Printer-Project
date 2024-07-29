// import React from 'react';
// import './ShortAbout.css';
// import { useNavigate } from 'react-router';

// export default function ShortAbout() {
//     const nav = useNavigate()
//     const handleAbout = ()=>{
//         nav("/about")
//     }
//   return (
//     <div className="short-about-container print">
//       <div className="text-content animate__animated animate__slideInLeft animate__repeat-1">
//         <h5 onClick={handleAbout} className='curse'>Get To Know</h5>
//         <h1>About Us </h1>
//         <h2 className='cursive-font-two'>Allwin Digital</h2>
//         <p>
//         Allwin Digital was inaugurated in 2014 and has since evolved into a leading outdoor advertising agency in Chennai. We specialize in advertising brands across various media platforms, including hoardings, cinema halls, shopping malls, railway stations, airports, and other public places in metropolitan cities.
//         </p>
//         <div class="border-container">


// </div>
//       </div>
//       <div className="image-content animate__animated animate__slideInRight animate__repeat-1 ">
//         <img src="/Assests/bg-removebg-preview (2).png" className='butterfly' />
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from 'react';
import './ShortAbout.css';
import { useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ShortAbout() {
    const nav = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Animation only happens once
        });
    }, []);

    const handleAbout = () => {
        nav('/about');
    };

    return (
        <div className="short-about-container print">
            <div
                className="text-content animate__animated animate__slideInLeft"
                data-aos="fade-right"
            >
                <h5 onClick={handleAbout} className="curse">
                    Get To Know
                </h5>
                {/* <h2 className='header-list'>About Us </h2> */}
              <div> <span className="gradient-text fs-1">
        <span className="green creeper">Allwin</span>
        <span className="pink creeper ms-2">Digital</span>
      </span></div> 
                <p>
                    Allwin Digital was inaugurated in 2014 and has since evolved into a leading outdoor advertising agency in Chennai. We specialize in advertising brands across various media platforms, including hoardings, cinema halls, shopping malls, railway stations, airports, and other public places in metropolitan cities.
                </p>
                <div class="border-container"></div>
            </div>
            <div
                className="image-content animate__animated animate__slideInRight"
                data-aos="fade-left"
            >
                <img
                    src="/Assests/bg-removebg-preview (2).png"
                    className="butterfly"
                    alt="Background"
                />
            </div>
        </div>
    );
}
