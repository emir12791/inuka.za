import React from 'react';
import { Card } from 'react-bootstrap';
import './event-card.scss';
import { FaWhatsapp } from 'react-icons/fa';

const EventCard = ({ name, title, price, image }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={`/images/events/${image}`} alt={title} className="img-fluid" />
      <Card.Body>
        <div className="product-card__details">
          <h2 className="product-card__name">{name}</h2>
          <div className='product-card__kutu'>
          <p className="product-card__title">{title}</p>
          </div>
          <p className="product-card__price">{price}₺</p>

          {/* WhatsApp Button with "Buy Now" Text */}
          <a href="https://wa.me/1234567890" className="product-card__whatsapp" target="_blank" rel="noopener noreferrer">
         <FaWhatsapp />   Buy Now 
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
