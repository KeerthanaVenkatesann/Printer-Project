// src/components/Gallery/Gallery.jsx
import React from "react";
import "./Gallery.css";
import Footer from "../../Footer/Footer";
import images from "./ImagesContainer"; // Adjust the path accordingly

export default function Gallery() {
  return (
    <div className="mt-5 pt-5">
      <div className="d-flex justify-content-center mt-5">
        <div>
          <div className="album">
            <div className="responsive-container-block bg">
              <div className="responsive-container-block img-cont">
                <img
                  className="img"
                  src="/Assests/Gallery/IMG_20240625_111409.jpg"
                />
                <img
                  className="img"
                  src="/Assests/Gallery/IMG_20240625_184800.jpg"
                />
                <img
                  className="img img-last"
                  src="/Assests/Gallery/IMG-20230323-WA0011.jpg"
                />
                <img
                  className="img img-last"
                  src="/Assests/Gallery/3X3 FOAM.jpg"
                />
                <img
                  className="img img-last"
                  src="/Assests/Gallery/bhat villa.jpg"
                />
              </div>
              <div className="responsive-container-block img-cont">
                <img
                  className="img img-big"
                  src="/Assests/Gallery/IMG_20240626_230016.jpg"
                />
                <img
                  className="img img-big img-last"
                  src="/Assests/Gallery/DSC_4816-removebg-preview (1).png"
                />
                <img
                  className="img img-big img-last"
                  src="/Assests/Gallery/Coffeeco.jpg"
                />
                <img
                  className="img img-big"
                  src="/Assests/Gallery/beauty salon.jpg"
                />
              </div>
              <div className="responsive-container-block img-cont">
                <img className="img" src="/Assests/Gallery/menu card.jpg" />
                <img className="img" src="/Assests/Gallery/FLAYER.jpg" />
                <img className="img" src="/Assests/Gallery/LETTER HEAD.jpg" />
                <img className="img" src="/Assests/Gallery/bride to be.jpg" />
              </div>
            </div>
            {/* </div>
<div className="album"> */}
            <div className="responsive-container-block bg">
              <div className="responsive-container-block img-cont">
                <img className="img" src="/Assests/Gallery/neon board.jpg" />
                <img
                  className="img"
                  src="/Assests/Gallery/Untitled design_20240615_185024_0000.png"
                />
                <img
                  className="img img-last"
                  src="/Assests/Gallery/10 x 10 MS 1.jpg"
                />
                 <img
                  className="img img-last"
                  src="/Assests/Gallery/mrg.jpg"
                />
                 <img
                  className="img img-last"
                  src="/Assests/Gallery/open bar.jpg"
                />
              </div>
              <div className="responsive-container-block img-cont">
            
                <img
                  className="img img-big img-last"
                  src="/Assests/Gallery/STANDY.jpg"
                />

<img
                  className="img img-big img-last"
                  src="/Assests/Gallery/white pebbles.jpg"
                />


<img
                  className="img img-big img-last"
                  src="/Assests/Gallery/imagee.jpg"
                />
              </div>
              <div className="responsive-container-block img-cont">
                <img className="img" src="/Assests/Gallery/recep book.jpg" />
                <img className="img" src="/Assests/Gallery/LETTER HEAD.jpg" />
                <img
                  className="img"
                  src="/Assests/Gallery/shape_cutting-removebg-preview.png"
                />
                    <img
                  className="img img-big img-last"
                  src="/Assests/Gallery/customercake.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
