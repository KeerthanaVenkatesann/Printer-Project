
import React from 'react';
import "./Clients.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Clients() {
  return (
    <div className='carousel-wrapper '>
      <div className='text-center'>
   
      </div>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        emulateTouch
        useKeyboardArrows
        className='carousal m-5 mx-auto'
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="control-arrow control-prev">
              <i className="fas fa-chevron-left"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="control-arrow control-next">
              <i className="fas fa-chevron-right me-3"></i>
            </button>
          )
        }
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: "15px" }}>
          <img src="/Assests/Gallery/swrl icon.jpg" alt="Gallery Image 1" style={{ width: '300px',height:"100px", borderRadius: "15px" }} />
          <img src="/Assests/Gallery/sr vijay mediacl icon.jpg" alt="Gallery Image 2" style={{ width: '200px', borderRadius: "15px" }} />
          <img src="/Assests/Gallery/sathya elite icon.jpg" alt="Gallery Image 3" style={{ width: '200px', borderRadius: "15px" }} />
          <img src="/Assests/Gallery/fashion tv icon.png" alt="Gallery Image 2" style={{ width: '200px', borderRadius: "15px" }} />
          <img src="/Assests/Gallery/kumbakonnam icon.jpg" alt="Gallery Image 7" style={{ width: '200px', borderRadius: "15px" }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: "15px" }}>
          <img src="/Assests/Gallery/narayana group icon.jpg" alt="Gallery Image 4" style={{ width: '200px', borderRadius: "15px" }} />
          <img src="/Assests/Gallery/mithai icon.jpg" alt="Gallery Image 5" style={{ width: '200px', borderRadius: "15px" }} />
          <img src="/Assests/Gallery/madrassi icon.jpg" alt="Gallery Image 6" style={{ width: '200px', borderRadius: "15px" }} />
          <img src="/Assests/Gallery/kids icon.jpg" alt="Gallery Image 8" style={{ width: '200px', borderRadius: "15px" }} />
          <img src="/Assests/Gallery/karupatti icon.jpg" alt="Gallery Image 9" style={{ width: '200px', borderRadius: "15px" }} />
        </div>
       
      </Carousel>

    
    </div>
  );
}

