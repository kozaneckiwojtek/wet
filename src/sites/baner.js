import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Baner = () => {
  return (
    <>
        <ul className="baner_list">
              <li className="baner_elemen"><Link to="/">Witamy</Link></li>
              <li className="baner_elemen"><Link to="/oferta">Oferta</Link></li>
              <li className="baner_elemen"><Link to="/galeria">Galeria</Link></li>
              <li className="baner_elemen"><Link to="/lokalizacja">Lokalizacja</Link></li>
              <li className="baner_elemen"><Link to="/kontakt">Oferta</Link></li>
        </ul>
    </>
  );
}

export default Baner;
