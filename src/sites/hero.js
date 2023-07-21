// Hero.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../src/css/style_hero.css";
import pies from "../../src/img/pies — kopia_skalowacz_pl.jpg";

export function Hero() {
    return (
        <div id='hero_all'>
        <Container className='hero'>
            <Row>
                <Col className='hero-text col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex align-items-center justify-content-end'>
                    <div>
                        <h1>Przychodnia weterynaryjna</h1>
                        <h3>Zbigniew Wojewódzki</h3>
                        <h4>Lekarz weterynarii</h4>
                        <h4>Specjalista chorób psów i kotów</h4>
                        <h4>Specjalista chirurg</h4>
                        <h4>Specjalista radiolog</h4>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Hero;
