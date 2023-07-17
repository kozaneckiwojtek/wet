import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Symbol from "../../src/img/symbol.png";
import "../../src/css/style_baner.css";



const Baner = () => {
    const [expanded, setExpanded] = useState(false);

    const handleNavToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Container fluid className='baner'>
                <Row>
                    <Col className='logo col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 d-flex align-items-center justify-content-center'>
                        <a id="logotop" href="./">
                            <img src={Symbol} alt="logo" className="logo-image" style={{ width: "150px"}}/>
                        </a>
                    </Col>

                    <Col id='adres_kontener' className='logo col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 d-flex align-items-center justify-content-begin'>
                        <p id='adres'>83-200, Starogard Gdański <br/> ul. Lubichowska 91 <br/> Tel. 58 56 11 888</p>
                    </Col>

                    <Col className='logo col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 d-flex align-items-center justify-content-center'>
                        <Navbar expand="lg" expanded={expanded} onToggle={handleNavToggle}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-hamburger" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link className='baner_elemen' href="/"><Link className='nav_element' to="/">Witamy</Link></Nav.Link>
                                    <Nav.Link className='baner_elemen' href="/oferta"><Link className='nav_element' to="/oferta">Oferta</Link></Nav.Link>
                                    <Nav.Link className='baner_elemen' href="/galeria"><Link className='nav_element' to="/galeria">Galeria</Link></Nav.Link>
                                    <Nav.Link className='baner_elemen' href="/lokalizacja"><Link className='nav_element' to="/lokalizacja">Lokalizacja</Link></Nav.Link>
                                    <Nav.Link className='baner_elemen' href="/kontakt"><Link className='nav_element' to="/kontakt">Kontakt</Link></Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>

            </Container>

        </>
    );
}

export default Baner;
