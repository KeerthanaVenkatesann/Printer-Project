// import React from 'react';
// import "./Clients.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import { Carousel } from 'react-responsive-carousel';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FaLongArrowAltRight } from 'react-icons/fa';

// export default function Clients() {
//   return (
//     <div className='carousel-wrapper'>
//       <div className='text-center'></div>
    
//         <div className='d-flex'>
//           <img src="/Assests/Gallery/swrl icon.jpg" alt="Gallery Image 1" className='  shadow m-2' />
//           <img src="/Assests/Gallery/sr vijay mediacl icon.jpg" alt="Gallery Image 2" className=' shadow m-2' />
//           <img src="/Assests/Gallery/sathya elite icon.jpg" alt="Gallery Image 3" className=' shadow m-2' />
//           <img src="/Assests/Gallery/fashion tv icon.png" alt="Gallery Image 4" className=' shadow m-2' />
//           <img src="/Assests/Gallery/kumbakonnam icon.jpg" alt="Gallery Image 5" className=' shadow m-2' />
//         </div>
//         <div className='d-flex'>
//           <img src="/Assests/Gallery/narayana group icon.jpg" alt="Gallery Image 6" className=' shadow m-2' />
//           <img src="/Assests/Gallery/mithai icon.jpg" alt="Gallery Image 7" className=' shadow m-2' />
//           <img src="/Assests/Gallery/madrassi icon.jpg" alt="Gallery Image 8" className=' shadow m-2' />
//           <img src="/Assests/Gallery/kids icon.jpg" alt="Gallery Image 9" className=' shadow m-2 ' />
//           <img src="/Assests/Gallery/karupatti icon.jpg" alt="Gallery Image 10" className=' shadow m-2' />
//         </div>
    
//     </div>
//   );
// }
import React from 'react';
import './Clients.css';

export default function Clients() {
  return (
    <div className='carousel-wrapper mt-3 mb-5'>
      <h1 className='text-center header-list mb-4'>Our Clients</h1>
      <p className='w-75 mx-auto print mb-4 '>Trusted by diverse brands across industries, our valued clients range from media giants to local businesses, all benefiting from our dedicated services.</p>
      <div className='d-flex'>
        <img src="/Assests/Gallery/swrl icon.jpg" alt="Gallery Image1" className='shadow m-2 Image1 rounded' />
        <img src="/Assests/Gallery/sr vijay mediacl icon.jpg" alt="Gallery Image2" className='shadow m-2 Image2 rounded' />
        <img src="/Assests/Gallery/sathya elite icon.jpg" alt="Gallery Image3" className='shadow m-2 rounded Image3' />
        <img src="/Assests/Gallery/fashion tv icon.png" alt="Gallery Image4" className='shadow m-2 rounded Image4' />
        <img src="/Assests/Gallery/kumbakonnam icon.jpg" alt="Gallery Image5" className='shadow m-2 rounded Image5' />
      </div>
      <div className='d-flex'>
        <img src="/Assests/Gallery/narayana group icon.jpg" alt="Gallery Image6" className='shadow m-2 rounded Image6' />
        <img src="/Assests/Gallery/mithai icon.jpg" alt="Gallery Image7" className='shadow m-2 rounded Image7' />
        <img src="/Assests/Gallery/madrassi icon.jpg" alt="Gallery Image8" className='shadow m-2 rounded Image8' />
        <img src="/Assests/Gallery/kids icon.jpg" alt="Gallery Image9" className='shadow m-2 rounded Image9' />
        <img src="/Assests/Gallery/karupatti icon.jpg" alt="Gallery Image10" className='shadow m-2 rounded Image10' />
      </div>
    </div>
  );
}
