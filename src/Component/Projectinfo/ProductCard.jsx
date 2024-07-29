// import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
// import './ProductCard.css';
// import { PiWhatsappLogoDuotone } from "react-icons/pi";

// const ProductCard = ({ image, title, whatsappMessage }) => {
//   const handleWhatsAppRedirect = (phoneNumber) => {
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
//     window.location.href = url;
//   };
//   return (
//     <div><div className="product-card">
//       <img src={image} alt={title} className="product-image" />

//     </div> <div className="product-info text-center">

//                 <a href="" target="_blank" rel="noopener noreferrer" className="whatsapp-button-two "   data-toggle="modal"
//         data-target="#whatsappModal">
//                   <FaWhatsapp className="whatsapp-icon fs-4" /> {title}
//                 </a>
//               </div>

//               <div
//         className="modal fade"
//         id="whatsappModal"
//         tabIndex="-1"
//         aria-labelledby="whatsappModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title header-list" id="whatsappModalLabel">
//               Choose Our Branches
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body ">
//               <div className="mb-3">
//                 <h5>Vadapalani</h5>

//                 <button
//                   className="btn btn-outline-danger"
//                   onClick={() => handleWhatsAppRedirect("8681000087")}
//                   data-dismiss="modal"
//                 >
//                   Message <PiWhatsappLogoDuotone />
//                 </button>
//               </div>
//               <div>
//                 <h5>Ashok Nagar</h5>

//                 <button
//                   className="btn btn-outline-danger"
//                   onClick={() => handleWhatsAppRedirect("8681000086")}
//                   data-dismiss="modal"
//                 >
//                   Message <PiWhatsappLogoDuotone />
//                 </button>
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-dark"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//               </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./ProductCard.css";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { SiMaildotru } from "react-icons/si";
import { LuArrowRightLeft } from "react-icons/lu";

const ProductCard = ({ image, title, whatsappMessage }) => {
  const handleWhatsAppRedirect = (phoneNumber) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info text-center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button-two"
          data-toggle="modal"
          data-target="#whatsappModal"
        >
          <FaWhatsapp className="whatsapp-icon fs-4" /> {title}
        </a>
      </div>
      <div
        className="modal fade"
        id="whatsappModal"
        tabIndex="-1"
        aria-labelledby="whatsappModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title header-list text-danger"
                id="whatsappModalLabel"
              >
                Contact Us
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5 className="modal-title  mb-4" id="whatsappModalLabel">
                Choose Our Branches:(Ashok Nagar)
              </h5>
              <div className="d-flex mb-4">
                <div className=" me-5">
                  <h6 className="mb-3 digital-words">
                    <SiMaildotru className="text-danger" /> Allwin Digital
                  </h6>
                  <button
                    className="btn btn-outline-danger "
                    onClick={() => handleWhatsAppRedirect("8681000086")}
                  >
                    Sathish <PiWhatsappLogoDuotone className="text-success" />
                  </button>
                </div>
                <div>
                  <h6 className="mb-3 digital-words">
                    <SiMaildotru className="text-danger " /> Allwin Prints
                  </h6>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleWhatsAppRedirect("8681000098")}
                  >
                    Vivek <PiWhatsappLogoDuotone className="text-success" />
                  </button>
                </div>
              </div>
              <h1 className=" "></h1>
              <h5 className="modal-title  mb-4" id="whatsappModalLabel">
                Choose Our Branches:
              </h5>
              <div className="d-flex ">
                <div className="  ">
                  <h6 className="mb-3 digital-words">
                    <SiMaildotru className="text-danger" /> Allwin Digital-100
                    Feet Road(Vadapalani)
                  </h6>
                  <div className="w-100">
                    {" "}
                    <button
                      className="btn btn-outline-danger  "
                      onClick={() => handleWhatsAppRedirect("8681000087")}
                    >
                      Naveen <PiWhatsappLogoDuotone className="text-success" />
                    </button>
                    <LuArrowRightLeft className="mx-2 text-danger" />
                    <button
                      className="btn btn-outline-danger "
                      onClick={() => handleWhatsAppRedirect("8681000097")}
                    >
                      Anbu <PiWhatsappLogoDuotone className="text-success" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
