import React from "react";

export default function Whatsapp() {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "8681000087";
    const url = `https://wa.me/${phoneNumber}`;
    window.location.href = url;
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <button
        className="bg-success text-white rounded "
        onClick={handleWhatsAppRedirect}
      >
        whatsapp
      </button>
    </div>
  );
}
