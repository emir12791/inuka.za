// header.js
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import './ust.scss';

const Ust = () => {
  return (
    <header>
      <Container className="header-container">

        <Nav.Link className="sollogo">
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </Nav.Link>

        <Nav.Link className="vatsap">
          <FaWhatsapp/> {/* Icon boyutunu istediğin gibi ayarlayabilirsin */}
        </Nav.Link>

      </Container>
    </header>
  );
};

export default Ust;
