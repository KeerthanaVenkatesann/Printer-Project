import React, { useState } from "react";

function Mobile() {
  const phoneNumber = "8681000087";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <button
        className="bg-primary text-white rounded"
        onClick={handlePhoneCall}
      >
        Call Phone
      </button>
    </div>
  );
}

export default Mobile;
