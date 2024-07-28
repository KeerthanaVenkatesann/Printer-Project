import React from "react";
import "./Whatsapp.css";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

export default function Whatsapp() {
  const handleWhatsAppRedirect = (phoneNumber) => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
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
            <div className="d-flex">  <div className="mb-3 me-auto">
                <h5>Vadapalani</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleWhatsAppRedirect("8681000087")}
                >
                  Message <PiWhatsappLogoDuotone />
                </button>
              </div>
              <div>
                <h5>Ashok Nagar</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleWhatsAppRedirect("8681000086")}
                >
                  Message <PiWhatsappLogoDuotone />
                </button>
              </div></div>
              <div className="d-flex"><div className="mb-3 me-auto ">
                <h5>Vadapalani</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleWhatsAppRedirect("8681000087")}
                >
                  Message <PiWhatsappLogoDuotone />
                </button>
              </div>
              <div>
                <h5>Ashok Nagar</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleWhatsAppRedirect("8681000086")}
                >
                  Message <PiWhatsappLogoDuotone />
                </button>
              </div></div>
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
}
