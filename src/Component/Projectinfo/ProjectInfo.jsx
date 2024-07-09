// // src/App.jsx
// import React from "react";
// import ProductCard from "./ProductCard";
// import Footer from "../Home/Footer/Footer";
// import { FaLongArrowAltRight } from "react-icons/fa";

// const products = [
//   {
//     image: "/Assests/Gallery/IMG_20240625_184800.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//   },

//   {
//     image: "/Assests/Gallery/DSC_4816-removebg-preview (1).png",
//     whatsappMessage: "Hello, I am interested in this product.",
//   },
//   {
//     image: "/Assests/Gallery/Coffeeco.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//   },
//   {
//     image: "/Assests/Gallery/beauty salon.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//   },

//   {
//     image: "/Assests/Gallery/bride to be.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//   },

//   {
//     image: "/Assests/CarouselImage/image7.jpg",
//     whatsappMessage: "Hello, I am interested in this product.",
//   },
// ];

// const ProjectInfo = () => {
//   return (
//     <>
//       <div className="print">
//         <header className="text-center">
//           <h1 className="header-list mb-5"> Products and Service</h1>
//         </header>
//         <div className="d-flex justify-content-center ">
//             <div className="w-50 d-flex justify-content-center  ">
// <img className="img-girl mb-5" src="/Assests/Gallery/firstimage-removebg.png" alt="firstimg" />
//             </div>
//        <div className="w-50"> <div className="album ">
//           {products.map((product, index) => (
//             <ProductCard
//               key={index}
//               image={product.image}
//               whatsappMessage={product.whatsappMessage}
//             />
//           ))}
//         </div>
//         <h3 className=" my-4 ps-3 "><a href="/gallery" className="a1 header-list ms-md-5 ">Explore Our Gallery <FaLongArrowAltRight /></a></h3>
        
//         </div>
        
        
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProjectInfo;


// src/App.jsx
import React from "react";
import ProductCard from "./ProductCard";
import Footer from "../Home/Footer/Footer";
import { FaLongArrowAltRight } from "react-icons/fa";
import CurvedText from "./CurvedText";
import "./Curved.css";
import "./ProductCard.css";
import CoutClients from "../CountClients/CoutClients";
import Clients from "../ClientsLogo/Clients";



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
    image: "/Assests/Gallery/beauty salon.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
      title: "Acrylic sticker"
  },
  {
    image: "/Assests/Gallery/bride to be.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
      title: "Neon"
  },
  {
    image: "/Assests/CarouselImage/image7.jpg",
    whatsappMessage: "Hello, I am interested in this product.",
      title: "LED standy"
  },
];

const ProjectInfo = () => {
  return (
    <>
      <div className="print">
        <header className="text-center">
          <h1 className="header-list mb-5">Products and Service</h1>
        </header>
        <div className="d-flex justify-content-center">
          <div className="w-50 d-flex justify-content-center position-relative mb-5">
            {/* <img className="img-girl mb-5 mt-4" src="/Assests/Gallery/firstimage-removebg.png" alt="firstimg" /> */}
            <CurvedText />
          </div>
          <div className="w-50 mt-2">
            <div className="album">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  whatsappMessage={product.whatsappMessage}
                  title={product.title}
                />
              ))}
            </div>
            <h3 className="my-4 ps-3">
              <a href="/gallery" className="a1 header-list ms-md-5">
                Explore Our Gallery <FaLongArrowAltRight />
              </a>
            </h3>
          </div>
        </div>
      </div>
      <CoutClients/>
      <Clients />
      <Footer />
    </>
  );
};

export default ProjectInfo;
