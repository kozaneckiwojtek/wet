import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../src/css/style_kontakt.css";

export function Kontakt() {
    return (
        <Container className='kontakt'>
            <Row>
                <Col className="contact-info">
                    <h2>PRZYCHODNIA WETERYNARYJNA</h2>
                    <p>Zbigniew Wojewódzki</p>
                    <p>ul. Lubichowska 91</p>
                    <p>83-200 Starogard Gdański</p>
                    <div id='godziny'>
                    <p><strong>Godziny otwarcia:</strong></p>
                    <p>Poniedziałek - Piątek 10:00 - 18:00</p>
                    <p>Sobota 9:00 - 12:00</p>
                    <p id='telefon'><strong>Telefon: 58 56 11 888</strong></p>
                    </div>
                </Col>
            
            </Row>
        </Container>
    );
}

export default Kontakt;
