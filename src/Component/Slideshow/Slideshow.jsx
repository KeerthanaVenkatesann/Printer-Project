import React, { useEffect, useState } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      if (slides.length === 0 || dots.length === 0) {
        return;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      setSlideIndex((prev) => (prev + 1) % slides.length);

      if (slides[slideIndex]) {
        slides[slideIndex].style.display = "block";
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      if (dots[slideIndex]) {
        dots[slideIndex].className += " active";
      }
    };

    const interval = setInterval(showSlides, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      

      <div className="w-25" >
       
          <img
            src="/Assests/slide/1.jpg"
            
            alt="Nature"
             className="mySlides fade"
          />
   

      
          <img
            src="/Assests/slide/2.jpg"
            
            alt="Snow"
             className="mySlides fade"
          />
  
          <img
            src="/Assests/slide/3.jpg"
            
            alt="Mountains"
             className="mySlides fade"
          />
       
          <img
            src="/Assests/slide/4.jpg"
            
            alt="Nature"
             className="mySlides fade"
          />
      
          <img
            src="/Assests/slide/5.jpg"
            
            alt="Nature"
             className="mySlides fade"
          />
       
          <img
            src="/Assests/slide/6.jpg"
            
             className="mySlides fade"
            alt="Nature"
          />
    
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Slideshow;
