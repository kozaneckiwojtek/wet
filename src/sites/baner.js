import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Symbol from "../../src/img/symbol.png";
import Logo from "../../src/img/logo.png";
import "../../src/css/style_baner.css";



const Baner = () => {
    const [expanded, setExpanded] = useState(false);

    const handleNavToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <>
        <div className='baner'>
            <Container fluid>
                <Row>
                    {/* <Col className='logo col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center'>
                        <a id="logotop" href="./">
                            <img src={Symbol} alt="logo" className="logo-image" />
                        </a>
                    </Col> */}

                    <Col className='logo col-12 col-sm-9 col-md-9 col-lg-12 col-xl-4 col-xxl-4 d-flex align-items-center justify-content-center'>
                    <Link to='/' className='footer-baner'>
                        <img id='logo_img' src={Logo} alt='logo' />
                        </Link>
                    </Col>

                    <Col className='logo col-12 col-sm-3 col-md-3 col-lg-12 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center'>
                        <Navbar expand="lg" expanded={expanded} onToggle={handleNavToggle}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-hamburger" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link className='nav_element' to="/"><Nav.Link className='baner_elemen' href="/">O nas</Nav.Link></Link>
                                    <Link className='nav_element' to="/oferta"><Nav.Link className='baner_elemen' href="/oferta">Oferta</Nav.Link></Link>
                                    <Link className='nav_element' to="/galeria"><Nav.Link className='baner_elemen' href="/galeria">Galeria</Nav.Link></Link>
                                    <Link className='nav_element' to="/lokalizacja"><Nav.Link className='baner_elemen' href="/lokalizacja">Lokalizacja</Nav.Link></Link>
                                    <Link className='nav_element' to="/kontakt"><Nav.Link className='baner_elemen' href="/kontakt">Kontakt</Nav.Link></Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>

                    <Col id='adres_kontener' className='logo col-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xl-2 d-flex align-items-center justify-content-center'>
                        <p id='adres'>83-200, Starogard Gdański <br /> ul. Lubichowska 91 <br /> Tel. 58 56 11 888</p>
                        <p id='tel'>Telefon: 58 56 11 888</p>
                    </Col>

                </Row>

            </Container>
            </div>

        </>
    );
}

export default Baner;
