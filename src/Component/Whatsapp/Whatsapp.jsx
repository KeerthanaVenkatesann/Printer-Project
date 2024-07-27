// import React from "react";
// import "./Whatsapp.css"
// import { PiWhatsappLogoDuotone } from "react-icons/pi";
// export default function Whatsapp() {
//   const handleWhatsAppRedirect = () => {
//     const phoneNumber = "8681000087";
//     const url = `https://wa.me/${phoneNumber}`;
//     window.location.href = url;
//   };
//   return (
//     <div >
//       <button
//         className="btn btn-outline-black get-button-two  content-font  "
//         onClick={handleWhatsAppRedirect}
//       >
//        Direct whatsapp <PiWhatsappLogoDuotone />
//       </button>
//     </div>
//   );
// }

import React from "react";
import "./Whatsapp.css";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

export default function Whatsapp() {
  const handleWhatsAppRedirect = (phoneNumber) => {
    const url = `https://wa.me/${phoneNumber}`;
    window.location.href = url;
  };

  return (
    <div>
      <button
        className="btn btn-outline-black get-button-two content-font"
        data-toggle="modal"
        data-target="#whatsappModal"
      >
        Direct WhatsApp <PiWhatsappLogoDuotone />
      </button>

      <div className="modal fade" id="whatsappModal" tabIndex="-1" aria-labelledby="whatsappModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title header-list" id="whatsappModalLabel">Select Our Branch</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <h6>Vadapalani</h6>
               
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleWhatsAppRedirect("8681000087")}
                  data-dismiss="modal"
                >
                  Message <PiWhatsappLogoDuotone />
                </button>
              </div>
              <div>
                <h6>Ashok Nagar</h6>
               
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleWhatsAppRedirect("8681000086")}
                  data-dismiss="modal"
                >
                  Message <PiWhatsappLogoDuotone />
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
