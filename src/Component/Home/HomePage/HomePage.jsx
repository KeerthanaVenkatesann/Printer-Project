import Aos from 'aos';
import React, { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className=' bg-black '>
        <div className="ms-5 pe-5 d-flex justify-content-start align-items-center vh-100">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text-white display-4  allwin-font ms-5">
         Allwin Digital
        </div>
      </div>
 </div>
  )
}
