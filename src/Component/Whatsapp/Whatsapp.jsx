import React from "react";
import "./Whatsapp.css"
import { PiWhatsappLogoDuotone } from "react-icons/pi";
export default function Whatsapp() {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "8681000087";
    const url = `https://wa.me/${phoneNumber}`;
    window.location.href = url;
  };
  return (
    <div >
      <button
        className="btn btn-outline-light get-button-two  content-font  "
        onClick={handleWhatsAppRedirect}
      >
       Direct whatsapp <PiWhatsappLogoDuotone />
      </button>
    </div>
  );
}
