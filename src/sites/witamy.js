// Witamy.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../src/css/style_witamy.css";

import zbyszek from "../../src/img/zbyszek.jpg"
import magda from "../../src/img/magda.jpg"

export function Witamy() {
    return (
        <Container className="witamy-container">
            <Row>
                <Col>
                    <div className="witamy-content">
                        <h1>Witam,</h1>
                        <p>
                            Nazywam się Zbigniew Wojewódzki. Jestem lekarzem weterynarii od 1998 roku.
                            Mam tytuł Specjalisty Chorób Psów i Kotów, od 2008 jestem Specjalistą Chirurgiem,
                            a w 2016 uzyskałem tytuł Specjalisty Radiologa Weterynaryjnego.
                        </p>
                        <p>
                            Specjalizacje te ukończyłem na Uniwersytecie Przyrodniczym we Wrocławiu.
                            Staram się cały czas podnosić swoje kwalifikacje i zdobywać kolejne doświadczenia
                            podczas sympozjów i konferencji organizowanych dla lekarzy weterynarii.
                        </p>
                        <p>
                            Własną praktykę weterynaryjną prowadzę od maja 2002 roku.
                            Zależy mi, aby klimat panujący w mojej przychodni był przyjazny zarówno dla pacjentów
                            jak i ich właścicieli. Jeśli macie Państwo problem ze swoim zwierzęciem, to zapraszam do przychodni.
                        </p>
                    </div>
                </Col>
            </Row>

            <Row>

                <Col className='tekst col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 col-xxl-9 d-flex align-items-center justify-content-center'>
                    <p>
                        <strong>Zbigniew Wojewódzki</strong> tytuł lekarza weterynarii uzyskał w 1998 r. na Akademii Rolniczo - Technicznej w Olsztynie. Tytuł Specjalisty Chorób Psów i Kotów otrzymał w 2005 r. Specjalizację odbywał na Uniwersytecie Warmińsko - Mazurskim w Olsztynie. W 2008 r., na Katedrze Chirurgii Uniwersytetu Przyrodniczego we Wrocławiu, uzyskał tytuł Specjalisty Chirurga. W 2016 r. ukończył specjalizację z Radiologii Weterynaryjnej na Uniwersytecie Przyrodniczym we Wrocławiu. Prywatnie ojciec dwóch synów - Jakuba i Jana i właściciel jamnika szorstkowłosego Tośki.
                    </p>
                </Col>
                <Col className='zdj col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3 d-flex align-items-center justify-content-center'>
                    <img src={zbyszek}></img>
                </Col>


            </Row>

            <Row>

                <Col className='tekst col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9 col-xxl-9 d-flex align-items-center justify-content-center'>
                    <p>
                        <strong>Magdalena Grabowska</strong> w Przychodni pracuje od 2010 r. Jest absolwentką Wydziału Medycyny Weterynaryjnej na Uniwersytecie Warmińsko - Mazurskim w Olsztynie, na którym w 2018 r. uzyskała tytuł Specjalisty Chorób Psów i Kotów. Prywatnie właścicielka adoptowanego mieszańca Plasterka, dwóch wesołych świnek morskich i rozśpiewanej papugi.
                    </p>
                </Col>
                <Col className='zdj col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3 d-flex align-items-center justify-content-center'>
                    <img src={magda}></img>

                </Col>

            </Row>
        </Container>
    );
}

export default Witamy;
