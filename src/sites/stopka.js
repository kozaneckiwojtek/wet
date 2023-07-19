import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Symbol from "../../src/img/symbol.png";
import Logo from "../../src/img/logo.png";
import "../../src/css/style_footer.css";

const Footer = () => {
    return (
     
            <footer className='footer'>


                <Container fluid>
                    <Row>
                        <Col className='list col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2 d-flex align-items-center justify-content-begin'>
                            <ul>
                                <li><Link className='nav_element_bot' to="/">O nas</Link> </li>
                                <li><Link className='nav_element_bot' to="/oferta">Oferta</Link> </li>
                                <li><Link className='nav_element_bot' to="/galeria">Galeria</Link> </li>
                                <li><Link className='nav_element_bot' to="/lokalizacja">Lokalizacja</Link> </li>
                                <li><Link className='nav_element_bot' to="/kontakt">Kontakt</Link> </li>

                            </ul>
                        </Col>
                        <Col className='adres_bot col-6 col-sm-4 col-md-4 col-lg-4 col-xl-8 d-flex align-items-center justify-content-end'>
                            <div className='footer-content'>
                                <p className='footer-address'>
                                    83-200, Starogard Gdański <br />
                                    ul. Lubichowska 91
                                </p>
                                <p className='footer-contact'>
                                    Telefon: 58 56 11 888
                                </p>
                            </div>
                        </Col>

                        <Col className='logo_bot col-12 col-sm-4 col-md-4 col-lg-4 col-xl-2 d-flex align-items-center justify-content-center'>
                            <div className='footer-content'>
                                <Link to='/' className='footer-logo'>
                                    <img src={Symbol} alt='logo' className='logo-image-bot' />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

    );
}

export default Footer;
