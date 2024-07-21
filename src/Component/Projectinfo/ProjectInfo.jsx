// import React from "react";
// import ProductCard from "./ProductCard";
// import Footer from "../Home/Footer/Footer";
// import { FaLongArrowAltRight } from "react-icons/fa";

// import "./Curved.css";
// import "./ProductCard.css";
// import CoutClients from "../CountClients/CoutClients";
// import Clients from "../ClientsLogo/Clients";

// const products = [
//   {
//     image: "/Assests/Gallery/IMG_20240625_184800.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//     title: "Backlight"
//   },
//   {
//     image: "/Assests/Gallery/DSC_4816-removebg-preview (1).png",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "direct Foam"
//   },
//   {
//     image: "/Assests/Gallery/Coffeeco.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Round Lollipop"
//   },
//   {
//     image: "/Assests/Gallery/beauty salon.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Acrylic sticker"
//   },
//   {
//     image: "/Assests/Gallery/bride to be.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Neon"
//   },
//   {
//     image: "/Assests/CarouselImage/image7.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "LED standy"
//   },
//   {
//     image: "/Assests/CarouselImage/image8.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "LED solar light board"
//   },
//   {
//     image: "/Assests/Gallery/open bar.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "neon board"
//   },
//   {
//     image: "/Assests/Gallery/mrg.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Backlight Board"
//   },

//   {
//     image: "/Assests/Gallery/IMG-20240530-WA0035.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Gold acrylic"
//   },
//   {
//     image: "/Assests/Gallery/IMG_20240625_111409.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Neon"
//   },
//   {
//     image: "/Assests/Gallery/10 x 10 MS 1.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Flex Design"
//   },
 
//   {
//     image: "/Assests/Gallery/3X3 FOAM.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Foam"
//   },
//   {
//     image: "/Assests/Gallery/LETTER HEAD.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Letter Head"
//   },
//   {
//     image: "/Assests/Gallery/bhat villa2.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "2d Light Board"
//   },
//   {
//     image: "/Assests/Gallery/41Ug99kWMkL._AC_UF894_1000_QL80__-_Copy-removebg-preview.png",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Acrylic board"
//   },
//   {
//     image: "/Assests/Gallery/0004726_roll-up-banners_540.jpeg-removebg-preview.png",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Roll up standy"
//   },

//   {
//     image: "/Assests/Gallery/aj-creations-jhilmil-colony-delhi-identity-card-manufacturers-2vhj2xwpnx-removebg-preview.png",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Id card robe"
//   },
//   {
//     image: "/Assests/Gallery/201809061536299272979-removebg-preview.png",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Outdoor LED TV"
//   },
//   {
//     image: "/Assests/Gallery/idcard-removebg-preview.png",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Id Tag"
//   },
//   {
//     image: "/Assests/Gallery/FLAYER.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//       title: "Visiting card"
//   },
// ]

// const ProjectInfo = () => {
//   return (
//     <>
//        <div className="print">
//         <header className="text-center">
//           <h1 className="header-list mb-5 fs-1 mt-4">Products and Service</h1>
//         </header>
//         <div className="d-flex justify-content-center flex-wrap">
//           <div className="product-container">
//             {products.map((product, index) => (
//               <ProductCard
//                 key={index}
//                 image={product.image}
//                 whatsappMessage={product.whatsappMessage}
//                 title={product.title}
//               />
//             ))}
//           </div>
//           <h3 className="my-4 ps-3">
//             <a href="/gallery" className="a1 header-list ms-lg-5">
//               Explore Our Gallery <FaLongArrowAltRight />
//             </a>
//           </h3>
//         </div>
//       </div>
//       <CoutClients />
//       <Clients />
//       <Footer />
//     </>
//   );
// };

// export default ProjectInfo;

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
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Backlight"
  },
  {
    image: "/Assests/Gallery/DSC_4816-removebg-preview (1).png",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "direct Foam"
  },
  {
    image: "/Assests/Gallery/Coffeeco.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Round Lollipop"
  },
  {
    image: "/Assests/Gallery/beautysalon.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Acrylic sticker"
  },
  {
    image: "/Assests/Gallery/neon.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Neon"
  },
  {
    image: "/Assests/CarouselImage/image7.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "LED standy"
  },
  {
    image: "/Assests/CarouselImage/image8.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "LED solar light board"
  },
  {
    image: "/Assests/Gallery/open bar.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "neon board"
  },
  {
    image: "/Assests/Gallery/madrasss1.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Backlight Board"
  },
  {
    image: "/Assests/Gallery/IMG-20240530-WA0035.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Gold acrylic"
  },
  {
    image: "/Assests/Gallery/IMG_20240625_111409.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Neon"
  },
  {
    image: "/Assests/Gallery/10 x 10 MS 1.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Flex Design"
  },
  {
    image: "/Assests/Gallery/3X3 FOAM.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Foam"
  },
  {
    image: "/Assests/Gallery/letterhead.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Letter Head"
  },
  {
    image: "/Assests/Gallery/bhat villa2.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "2d Light Board"
  },
  {
    image: "/Assests/Gallery/accrylic board.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Acrylic board"
  },
  {
    image: "/Assests/Gallery/rollupstandy.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Roll up standy"
  },
  {
    image: "/Assests/Gallery/aj-creations-jhilmil-colony-delhi-identity-card-manufacturers-2vhj2xwpnx-removebg-preview.png",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Id card robe"
  },
  {
    image: "/Assests/Gallery/outdoor led tv.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Outdoor LED TV"
  },
  {
    image: "/Assests/Gallery/idcard-removebg-preview.png",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Id Tag"
  },
  {
    image: "/Assests/Gallery/FLAYER.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Visiting card"
  },
  {
    image: "/Assests/Gallery/relax.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Broucher"
  },
  {
    image: "/Assests/Gallery/stamp.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Stamb"
  },
  {
    image: "/Assests/Gallery/diecut.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Die cut"
  },
  {
    image: "/Assests/Gallery/recep book.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Bill book"
  },
  {
    image: "/Assests/Gallery/menucrd.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: " Menu card"
  },
  {
    image: "/Assests/Gallery/umbrella.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Beach Umbrella",

  },
  {
    image: "/Assests/Gallery/movieposter.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: " Movie Poster",

  },
  {
    image: "/Assests/Gallery/Sunpack2.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Sunpack",

  },
  {
    image: "/Assests/Gallery/Visiting Card.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
    title: "Visiting Card",

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
          <div><TbWaveSawTool className="text-danger fs-3  mb-5 " /></div>
        </header>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="product-container">
            {products.map((product, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
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

