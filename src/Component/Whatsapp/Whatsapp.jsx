import React from "react";
import "./Whatsapp.css";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { SiMaildotru } from "react-icons/si";
import { LuArrowRightLeft } from "react-icons/lu";

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
              <h5 className="modal-title header-list text-danger" id="whatsappModalLabel">
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
            <h5 className="modal-title   mb-4" id="whatsappModalLabel">
                Choose Our Branches:(Ashok Nagar)
              </h5>
            <div className="d-flex mb-4">  
           
              <div className=" me-5">
                <h6 className="mb-3"><SiMaildotru className="text-danger" /> Allwin Digital</h6>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleWhatsAppRedirect("8681000086")}
                >
                Sathish <PiWhatsappLogoDuotone className="text-success"/>
                </button>
              </div>
              <div>
                <h6 className="mb-3"><SiMaildotru className="text-danger" /> Allwin Prints</h6>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleWhatsAppRedirect("8681000098")}
                >
                  Vivek <PiWhatsappLogoDuotone className="text-success"/>
                </button>
              </div></div>
              <h1 className=""></h1>
              <h5 className="modal-title  mb-4" id="whatsappModalLabel">
                Choose Our Branches:
              </h5>
              <div className="d-flex ">
            
                <div className="  ">
                <h6 className="mb-3"><SiMaildotru className="text-danger" /> Allwin Digital-100 Feet Road(Vadapalani)</h6>
             <div className="w-100"> <button
                  className="btn btn-outline-danger "
                  onClick={() => handleWhatsAppRedirect("8681000087")}
                >
                Naveen <PiWhatsappLogoDuotone className="text-success"/>
                </button><LuArrowRightLeft className="mx-2 text-danger" />
                <button
                  className="btn btn-outline-danger "
                  onClick={() => handleWhatsAppRedirect("8681000097")}
                >
                 Anbu <PiWhatsappLogoDuotone className="text-success"/>
                </button></div>  
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
}
