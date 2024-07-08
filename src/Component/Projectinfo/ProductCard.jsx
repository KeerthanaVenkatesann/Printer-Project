// src/Components/ProductCard.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ image, title, whatsappMessage }) => {
  const whatsappLink = `https://wa.me/918681000087?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <div className="product-title">{title}</div>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button-two">
          <FaWhatsapp className="whatsapp-icon" /> {title}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
