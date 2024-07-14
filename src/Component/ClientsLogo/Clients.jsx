
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
import { TbWaveSawTool } from 'react-icons/tb';
import AOS from 'aos';

export default function Clients() {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  return (
    <div className='text-center mb-5 bg-client py-5'>
      <h2 className='text-center header-list'>Our Clients</h2>
      <div><TbWaveSawTool className="text-danger fs-3 mb-4" /></div>

      <div className='clients'>
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/swrl icon.jpg" alt="Gallery Image1" className='shadow m-2 Image1 rounded' />
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/sr vijay mediacl icon.jpg" alt="Gallery Image2" className='shadow m-2 Image2 rounded' />
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/sathya elite icon.jpg" alt="Gallery Image3" className='shadow m-2 rounded Image3' />
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/fashion tv icon.png" alt="Gallery Image4" className='shadow m-2 rounded Image4' />
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/kumbakonnam icon.jpg" alt="Gallery Image5" className='shadow m-2 rounded Image5' />

        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/narayana group icon.jpg" alt="Gallery Image6" className='shadow m-2 rounded Image6' />
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/mithai icon.jpg" alt="Gallery Image7" className='shadow m-2 rounded Image7' />
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/madrassi icon.jpg" alt="Gallery Image8" className='shadow m-2 rounded Image8' />
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/kids icon.jpg" alt="Gallery Image9" className='shadow m-2 rounded Image9' />
        <img data-aos="fade-up" data-aos-duration="1000" src="/Assests/Gallery/karupatti icon.jpg" alt="Gallery Image10" className='shadow m-2 rounded Image10' />
      </div>
    </div>
  );
}
