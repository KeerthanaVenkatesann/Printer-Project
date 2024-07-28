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
              <h5 className="modal-title header-list" id="whatsappModalLabel">
                Choose Our Branches
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
              <div className="mb-3">
                <h5>Vadapalani</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "8681000087"
       
                    )
                  }
                  data-dismiss="modal"
                >
                  Message <PiWhatsappLogoDuotone />
                </button>
              </div>
              <div>
                <h5>Ashok Nagar</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "8681000086"
                      
                    )
                  }
                  data-dismiss="modal"
                >
                  Message <PiWhatsappLogoDuotone />
                </button>
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
