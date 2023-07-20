import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapComponent from './MapComponent';



export function Lokalizacja() {
  const [mapLoaded, setMapLoaded] = useState(false);  
    return (
        <>
        <Container className='lokalizacja'>
          <Row>
            <Col>
        <MapComponent mapLoaded={mapLoaded} setMapLoaded={setMapLoaded} />

            </Col>
          </Row>
        </Container>
        </>
    );
}

export default Lokalizacja;