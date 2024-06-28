// import React from "react";
// import "./Gallery.css";
// export default function Gallery() {
//   return (
//     <div>
//       <div className="container-fluid p-5 ">
//         <div className="gallery p-5">
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/Coffeeco.jpg"
//               alt="coffeeshop"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/IMG_20240625_184800.jpg"
//               alt="Led name board"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/IMG_20240626_230016.jpg"
//               alt="Led light dog"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/neon board.jpg"
//               alt="neon board"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/shape_cutting-removebg-preview.png"
//               alt="shapecutting"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/rubber_stamp-removebg-preview.png"
//               alt="rubber stamp"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/DSC_4816-removebg-preview (1).png"
//               alt="dsc"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/IMG-20240530-WA0035.jpg"
//               alt="initial art"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/menu card.jpg"
//               alt="menu card"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/STANDY.jpg"
//               alt="standy"
//             />
//           </div>
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/IMG-20230323-WA0011.jpg"
//               alt="Advertisement"
//             />
//           </div>
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/FLAYER.jpg"
//               alt="flayer"
//             />
//           </div>
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/3X3 FOAM.jpg"
//               alt="foam"
//             />
//           </div>
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/10 x 10 MS 1.jpg"
//               alt="ads"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/idcard-removebg-preview.png"
//               alt="ID"
//             />{" "}
//           </div>
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/IMG_20240625_111409.jpg"
//               alt="Led light"
//             />
//           </div>
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/LETTER HEAD.jpg"
//               alt="Letter head"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/Untitled design_20240615_185024_0000.png"
//               alt="ads"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/recep book.jpg"
//               alt="recep book"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/0004726_roll-up-banners_540.jpeg-removebg-preview.png"
//               alt="roll up banners"
//             />
//           </div>
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/201809061536299272979-removebg-preview.png"
//               alt="stands"
//             />
//           </div>
//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/aj-creations-jhilmil-colony-delhi-identity-card-manufacturers-2vhj2xwpnx-removebg-preview.png"
//               alt="Id tag"
//             />
//           </div>

//           <div className="gallery-item">
//             <img
//               className="gallery-image"
//               src="/Assests/Gallery/41Ug99kWMkL._AC_UF894_1000_QL80__-_Copy-removebg-preview.png"
//               alt="stand"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Gallery.css";
import Footer from "../../Footer/Footer";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    {
      src: "/Assests/Gallery/IMG_20240625_111409.jpg",
      alt: "Led light",
      // width: "400px",
      // height: "220px",
    },
    {
      src: "/Assests/Gallery/IMG_20240625_184800.jpg",
      alt: "Led name board",
      // width: "400px",
      // height: "240px",
    },
    {
      src: "/Assests/Gallery/IMG_20240626_230016.jpg",
      alt: "Led light dog",
      // width: "450px",
      // height: "300px",
    },
    {
      src: "/Assests/Gallery/neon board.jpg",
      alt: "Neon board",
      // width: "450px",
      // height: "400px",
    },
    {
      src: "/Assests/Gallery/DSC_4816-removebg-preview (1).png",
      alt: "DSC",
      // width: "300px",
      // height: "300px",
    },
    {
      src: "/Assests/Gallery/IMG-20240530-WA0035.jpg",
      alt: "Initial art",
      // width: "350px",
      // height: "400px",
    },
    {
      src: "/Assests/Gallery/Coffeeco.jpg",
      alt: "Coffeeshop",
      // width: "400px",
      // height: "400px",
    },
    {
      src: "/Assests/Gallery/menu card.jpg",
      alt: "Menu card",
      // width: "500px",
      // height: "600px",
    },
    {
      src: "/Assests/Gallery/STANDY.jpg",
      alt: "Standy",
      // width: "310px",
      // height: "700px",
    },
    {
      src: "/Assests/Gallery/IMG-20230323-WA0011.jpg",
      alt: "Advertisement",
      // width: "470px",
      // height: "750px",
    },
    {
      src: "/Assests/Gallery/FLAYER.jpg",
      alt: "Flayer",
      // width: "400px",
      // height: "600px",
    },
    {
      src: "/Assests/Gallery/3X3 FOAM.jpg",
      alt: "Foam",
      // width: "400px",
      // height: "400px",
    },
    {
      src: "/Assests/Gallery/10 x 10 MS 1.jpg",
      alt: "Ads",
      // width: "550px",
      // height: "480px",
    },
    {
      src: "/Assests/Gallery/idcard-removebg-preview.png",
      alt: "ID",
      // width: "400px",
      // height: "400px",
    },
    {
      src: "/Assests/Gallery/shape_cutting-removebg-preview.png",
      alt: "Shape cutting",
      // width: "550px",
      // height: "320px",
    },
    {
      src: "/Assests/Gallery/LETTER HEAD.jpg",
      alt: "Letter head",
      // width: "600px",
      // height: "350px",
    },
    {
      src: "/Assests/Gallery/Untitled design_20240615_185024_0000.png",
      alt: "Ads",
      // width: "650px",
      // height: "320px",
    },
    {
      src: "/Assests/Gallery/recep book.jpg",
      alt: "Recep book",
      // width: "600px",
      // height: "300px",
    },
    {
      src: "/Assests/Gallery/0004726_roll-up-banners_540.jpeg-removebg-preview.png",
      alt: "Roll up banners",
      // width: "550px",
      // height: "300px",
    },
    {
      src: "/Assests/Gallery/201809061536299272979-removebg-preview.png",
      alt: "Stands",
      // width: "520px",
      // height: "370px",
    },
    {
      src: "/Assests/Gallery/rubber_stamp-removebg-preview.png",
      alt: "Rubber stamp",
      // width: "300px",
      // height: "300px",
    },
    {
      src: "/Assests/Gallery/aj-creations-jhilmil-colony-delhi-identity-card-manufacturers-2vhj2xwpnx-removebg-preview.png",
      alt: "ID tag",
      // width: "380px",
      // height: "270px",
    },
    {
      src: "/Assests/Gallery/41Ug99kWMkL._AC_UF894_1000_QL80__-_Copy-removebg-preview.png",
      alt: "Stand",
      // width: "300px",
      // height: "350px",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="container-fluid p-5">
        <div className="gallery p-5">
          {images.map((image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <img
                className="gallery-image"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="modal fade show"
          id="imageModal"
          tabIndex="-1"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedImage.alt}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}