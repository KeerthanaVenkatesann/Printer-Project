
import React, { useEffect } from "react";
import "./Gallery.css";
import Footer from "../../Footer/Footer";
import { BsEmojiHeartEyes } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbWaveSawTool } from "react-icons/tb";

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pt-3">
      <div className="text-center">
        <h2 className="header-list mx-auto fs-1 mt-md-3" data-aos="fade-up">
          Explore Our Gallery
        </h2>
        <h5 className="print mt-3 fs-5" data-aos="fade-up" data-aos-delay="100">
          If You Want to place order
          <a href="/proinfo" className="text-danger fs-6 ms-2 click">
            Click Here!
          </a>
        </h5>
        <div><TbWaveSawTool className="text-danger fs-3" /></div>

      </div>
      <div className="d-flex justify-content-center mt-md-5">
        <div>
          <div className="album">
            <div className="responsive-container-block bg">
              <div
                className="responsive-container-block img-cont"
                data-aos="fade-up"
              >
                <div className="network-card-two img-container rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/IMG_20240625_111409.jpg"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/IMG_20240625_184800.jpg"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/IMG-20230323-WA0011.jpg"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/3X3 FOAM.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/bhat villa.jpg" />
                </div>
              </div>
              <div
                className="responsive-container-block img-cont"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/IMG_20240626_230016.jpg"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/DSC_4816-removebg-preview (1).png"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/Coffeeco.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/beauty salon.jpg"
                  />
                </div>
              </div>
              <div
                className="responsive-container-block img-cont"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/menu card.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/FLAYER.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/LETTER HEAD.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/bride to be.jpg" />
                </div>
              </div>
            </div>

            <div className="responsive-container-block bg">
              <div
                className="responsive-container-block img-cont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/neon board.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/Untitled design_20240615_185024_0000.png"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/10 x 10 MS 1.jpg"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/mrg.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/open bar.jpg" />
                </div>
              </div>
              <div
                className="responsive-container-block img-cont"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/STANDY.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/white pebbles.jpg"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/stamp.jpg" />
                </div>
              </div>
              <div
                className="responsive-container-block img-cont"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/recep book.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img className="img" src="/Assests/Gallery/LETTER HEAD.jpg" />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/shape_cutting-removebg-preview.png"
                  />
                </div>
                <div className="network-card-two rounded">
                  <img
                    className="img"
                    src="/Assests/Gallery/customercake.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
