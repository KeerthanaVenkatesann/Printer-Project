
import React from 'react';
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function CarouselTwo() {
  return (
    <div className=' '>
      <div className='text-center'>
        <h1 className='mx-auto header-list'>Gallery</h1>
        <p className='gallery-description print mx-auto w-50 mt-3'>
  Discover our vibrant collection of digital prints, from captivating photos to unique custom cards. 
  Perfect for personal and professional use, each piece is designed to impress and inspire.
</p>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: "20px" }}>
          <img src="/Assests/CarouselImage/image1.jpg" alt="Gallery Image 1" style={{ width: '33%', borderRadius: "20px" }} />
          <img src="/Assests/CarouselImage/image2.jpg" alt="Gallery Image 2" style={{ width: '33%', borderRadius: "20px" }} />
          <img src="/Assests/CarouselImage/image3.jpg" alt="Gallery Image 3" style={{ width: '33%', borderRadius: "20px" }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: "20px" }}>
          <img src="/Assests/CarouselImage/image4.jpg" alt="Gallery Image 4" style={{ width: '33%', borderRadius: "20px" }} />
          <img src="/Assests/CarouselImage/image5.jpg" alt="Gallery Image 5" style={{ width: '33%', borderRadius: "20px" }} />
          <img src="/Assests/CarouselImage/image6.jpg" alt="Gallery Image 6" style={{ width: '33%', borderRadius: "20px" }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: "20px" }}>
          <img src="/Assests/CarouselImage/image7.jpg" alt="Gallery Image 7" style={{ width: '33%', borderRadius: "20px" }} />
          <img src="/Assests/CarouselImage/image8.jpg" alt="Gallery Image 8" style={{ width: '33%', borderRadius: "20px" }} />
          <img src="/Assests/CarouselImage/image9.jpg" alt="Gallery Image 9" style={{ width: '33%', borderRadius: "20px" }} />
        </div>
      </Carousel>

     <div className='ps-3'> <h3 className='header-list ms-md-5 mb-5  '><a href="/gallery" className='a1 '>Show More <FaLongArrowAltRight /></a></h3></div>

    </div>
  );
}

