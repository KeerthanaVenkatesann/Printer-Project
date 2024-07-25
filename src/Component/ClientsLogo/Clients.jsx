
// import React from 'react';
// import './Clients.css';
// import { TbWaveSawTool } from 'react-icons/tb';

// export default function Clients() {
//   return (
//     <div className='text-center  mb-5 bg-client py-5 '>
//       <h2 className='text-center header-list'>Our Clients</h2>
//       <div><TbWaveSawTool className="text-danger fs-3  mb-4" /></div>

      
//        <div className=' clients'>
//         <img src="/Assests/Gallery/swrl icon.jpg" alt="Gallery Image1" className='shadow m-2 Image1 rounded' />
//         <img src="/Assests/Gallery/sr vijay mediacl icon.jpg" alt="Gallery Image2" className='shadow m-2 Image2 rounded' />
//         <img src="/Assests/Gallery/sathya elite icon.jpg" alt="Gallery Image3" className='shadow m-2 rounded Image3' />
//         <img src="/Assests/Gallery/fashion tv icon.png" alt="Gallery Image4" className='shadow m-2 rounded Image4' />
//         <img src="/Assests/Gallery/kumbakonnam icon.jpg" alt="Gallery Image5" className='shadow m-2 rounded Image5' />
     
//         <img src="/Assests/Gallery/narayana group icon.jpg" alt="Gallery Image6" className='shadow m-2 rounded Image6' />
//         <img src="/Assests/Gallery/mithai icon.jpg" alt="Gallery Image7" className='shadow m-2 rounded Image7' />
//         <img src="/Assests/Gallery/madrassi icon.jpg" alt="Gallery Image8" className='shadow m-2 rounded Image8' />
//         <img src="/Assests/Gallery/kids icon.jpg" alt="Gallery Image9" className='shadow m-2 rounded Image9' />
//         <img src="/Assests/Gallery/karupatti icon.jpg" alt="Gallery Image10" className='shadow m-2 rounded Image10' />
//       </div>
//     </div>
//   );
// }
import React, { useEffect } from 'react';
import './Clients.css';
import Marquee from 'react-marquee-slider';
import { TbWaveSawTool } from 'react-icons/tb';
import AOS from 'aos';

export default function Clients() {
  useEffect(() => {
    AOS.init();
  }, []);

  const clientImages = [
    { src: "/Assests/Gallery/swrl icon.jpg", alt: "Gallery Image1", className: "Image1" },
    { src: "/Assests/Gallery/sr vijay mediacl icon.jpg", alt: "Gallery Image2", className: "Image2" },
    { src: "/Assests/Gallery/sathya elite icon.jpg", alt: "Gallery Image3", className: "Image3" },
    { src: "/Assests/Gallery/fashion tv icon.png", alt: "Gallery Image4", className: "Image4" },
    { src: "/Assests/Gallery/kumbakonnam icon.jpg", alt: "Gallery Image5", className: "Image5" },
    { src: "/Assests/Gallery/narayana group icon.jpg", alt: "Gallery Image6", className: "Image6" },
    { src: "/Assests/Gallery/mithai icon.jpg", alt: "Gallery Image7", className: "Image7" },
    { src: "/Assests/Gallery/madrassi icon.jpg", alt: "Gallery Image8", className: "Image8" },
    { src: "/Assests/Gallery/kids icon.jpg", alt: "Gallery Image9", className: "Image9" },
    { src: "/Assests/Gallery/karupatti icon.jpg", alt: "Gallery Image10", className: "Image10" },
    { src: "/Assests/Clienticon/icon1.jpg", alt: "Gallery Image11", className: "Image11" },
    { src: "/Assests/Clienticon/icon2.jpg", alt: "Gallery Image12", className: "Image12" },
    { src: "/Assests/Clienticon/icon3.jpg", alt: "Gallery Image13", className: "Image13" },
    { src: "/Assests/Clienticon/icon4.jpg", alt: "Gallery Image14", className: "Image14" },
    { src: "/Assests/Clienticon/icon5.jpg", alt: "Gallery Image15", className: "Image15" },
    { src: "/Assests/Clienticon/icon6.jpg", alt: "Gallery Image16", className: "Image16" },
    { src: "/Assests/Clienticon/icon7.jpg", alt: "Gallery Image17", className: "Image17" },
    { src: "/Assests/Clienticon/icon8.png", alt: "Gallery Image18", className: "Image18" },
    { src: "/Assests/Clienticon/icon9.png", alt: "Gallery Image19", className: "Image19" },
    { src: "/Assests/Clienticon/icon10.png", alt: "Gallery Image20", className: "Image20" },
    { src: "/Assests/Clienticon/icon11.png", alt: "Gallery Image21", className: "Image21" },
    { src: "/Assests/Clienticon/icon12.png", alt: "Gallery Image22", className: "Image22" },
    { src: "/Assests/Clienticon/icon13.png", alt: "Gallery Image23", className: "Image23" }
  ];

  return (
    <div className='text-center mb-5 bg-client py-5'>
      <h2 className='text-center header-list'>Our Clients</h2>
      <div><TbWaveSawTool className="text-danger fs-3 mb-4" /></div>

      <Marquee velocity={20} minScale={0.7}>
        {clientImages.map((image, index) => (
          <div key={index} className={`shadow m-2 rounded ${image.className}`}>
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={image.src}
              alt={image.alt}
              className='img-fluid'
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
