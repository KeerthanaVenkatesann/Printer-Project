// src/components/Gallery/Gallery.jsx
import React from "react";
import "./Gallery.css";
import Footer from "../../Footer/Footer";
import images from "./ImagesContainer";  // Adjust the path accordingly

export default function Gallery() {
  return (
    <div>
      <div className="container-fluid p-5">
        <div className="gallery p-5">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                className="gallery-image"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
