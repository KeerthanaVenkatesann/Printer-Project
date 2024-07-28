import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import Footer from "../Home/Footer/Footer";
import { FaLongArrowAltRight } from "react-icons/fa";
import CoutClients from "../CountClients/CoutClients";
import Clients from "../ClientsLogo/Clients";
import "./Curved.css";
import "./ProductCard.css";
import { TbWaveSawTool } from "react-icons/tb";

const products = [
  {
    image: "/Assests/Gallery/IMG_20240625_184800.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Backlight",
  },
  {
    image: "/Assests/Gallery/DSC_4816-removebg-preview (1).png",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "direct Foam",
  },
  {
    image: "/Assests/Gallery/Coffeeco.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Round Lollipop",
  },
  {
    image: "/Assests/Gallery/beautysalon.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Acrylic sticker",
  },
  {
    image: "/Assests/Gallery/neon.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Neon",
  },
  {
    image: "/Assests/CarouselImage/image7.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "LED standy",
  },
  {
    image: "/Assests/CarouselImage/image8.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "LED solar light board",
  },
  {
    image: "/Assests/Gallery/open bar.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "neon board",
  },
  {
    image: "/Assests/glass wall sticker.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Glass Wall Sticker",
  },
  {
    image: "/Assests/Gallery/IMG-20240530-WA0035.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Gold acrylic",
  },
  {
    image: "/Assests/Gallery/IMG_20240625_111409.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Neon",
  },
  {
    image: "/Assests/Gallery/10 x 10 MS 1.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Flex Design",
  },
  {
    image: "/Assests/Gallery/3X3 FOAM.jpg",
    whatsappMessage: "HHello, I am interested in your product. ur product list",
    title: "Foam",
  },
  {
    image: "/Assests/Gallery/letterhead.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Letter Head",
  },
  {
    image: "/Assests/Gallery/bhat villa2.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "2d Light Board",
  },
  {
    image: "/Assests/Gallery/accrylic board.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Acrylic board",
  },
  {
    image: "/Assests/Gallery/rollupstandy.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Roll up standy",
  },
  {
    image:
      "/Assests/Gallery/aj-creations-jhilmil-colony-delhi-identity-card-manufacturers-2vhj2xwpnx-removebg-preview.png",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Id card robe",
  },
  {
    image: "/Assests/Gallery/outdoor led tv.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Outdoor LED TV",
  },
  {
    image: "/Assests/Gallery/idcard-removebg-preview.png",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Id Tag",
  },
  {
    image: "/Assests/LED Board.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Led Board",
  },
  {
    image: "/Assests/Gallery/relax.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Broucher",
  },
  {
    image: "/Assests/Gallery/stamp.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Stamb",
  },
  {
    image: "/Assests/Gallery/diecut.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Die cut",
  },
  {
    image: "/Assests/Gallery/recep book.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Bill book",
  },
  {
    image: "/Assests/promotion tent board.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Promotion Tent Board",
  },
  {
    image: "/Assests/Gallery/menucrd.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: " Menu card",
  },
  {
    image: "/Assests/Gallery/umbrella.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Beach Umbrella",
  },
  {
    image: "/Assests/Gallery/movieposter.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Movie Poster",
  },
  {
    image: "/Assests/Gallery/Sunpack2.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Sunpack",
  },
  {
    image: "/Assests/Gallery/Visiting Card.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Visiting Card",
  },

  {
    image: "/Assests/Glossy stainless steel.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Glossy Stainless Steel",
  },
  {
    image: "/Assests/led wall.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Led Wall",
  },
  {
    image: "/Assests/vehicle branding.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "Vehicle Branding",
  },
  {
    image: "/Assests/acp cutting.jpg",
    whatsappMessage: "Hello, I am interested in your product. ur product list",
    title: "acp cutting",
  },
];

const ProjectInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="print pro-info-over">
        <header className="text-center" data-aos="fade-down">
          <h1 className="header-list fs-1 mt-4">Products and Service</h1>
          <div>
            <TbWaveSawTool className="text-danger fs-3  mb-5 " />
          </div>
        </header>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="product-container">
            {products.map((product, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <ProductCard
                  image={product.image}
                  whatsappMessage={product.whatsappMessage}
                  title={product.title}
                />
              </div>
            ))}
          </div>
          <h3 className="my-4 ps-3" data-aos="fade-left">
            <a href="/gallery" className="a1 header-list ">
              Explore Our Gallery <FaLongArrowAltRight />
            </a>
          </h3>
        </div>
      </div>
      <div data-aos="fade-up">
        <CoutClients />
      </div>
      <div data-aos="fade-up">
        <Clients />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default ProjectInfo;
