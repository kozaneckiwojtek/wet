import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../src/css/style_oferta.css";

const Oferta = () => {
    return (
        <Container className='oferta'>
            <Row>
                <Col md={6}>
                    <h2>Profilaktyka:</h2>
                    <ul>
                        <li>Szczepienie przeciwko wściekliźnie</li>
                        <li>Szczepienie przeciwko chorobom zakaźnym psów, kotów, fretek, królików</li>
                        <li>Profilaktyka przeciw pchelna, przeciw kleszczowa</li>
                        <li>Profilaktyka przeciwko pasożytom wewnętrznym</li>
                        <li>Profilaktyczne badanie kału</li>
                        <li>Czipowanie z wpisem do Międzynarodowej Bazy Danych "Safe-Animal"</li>
                        <li>Szczepienia przeciwko chorobom odkleszczowym</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <h2>Choroby wewnętrzne:</h2>
                    <ul>
                        <li>Pełna diagnostyka i leczenie chorób układu pokarmowego, oddechowego, krążenia, moczowego, rozrodczego, nerwowego, endokrynologicznego</li>
                    </ul>
                    <h2>Chirurgia:</h2>
                    <ul>
                        <li>Chirurgia tkanek miękkich – pełny zakres usług</li>
                        <li>Chirurgia twarda – ortopedia ( operacyjne leczenie złamań, chorób stawów, więzadeł, ścięgien)</li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h2>Dermatologia:</h2>
                    <ul>
                        <li>Diagnostyka i leczenie chorób skóry</li>
                        <li>Testy alergiczne ( różnicowanie atopii i alergii pokarmowej)</li>
                        <li>Badanie cytologiczne</li>
                        <li>Badane zeskrobin skóry w kierunku pasożytów</li>
                        <li>Badanie w kierunku świerzbowca usznego</li>
                        <li>Otoskopowe badanie zewnętrznego kanału słuchowego</li>
                        <li>Badanie włosa (Trichogram)</li>
                        <li>Badania mikrobiologiczne (bakterie, grzyby)</li>
                    </ul>
                    <h2>Okulistyka:</h2>
                    <ul>
                        <li>Pełne badanie narządu wzroku (w tym badanie oftalmoskopowe)</li>
                        <li>Testy diagnostyczne</li>
                        <li>Zabiegi chirurgiczne w obrębie gałki ocznej i powiek</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <h2>Laboratorium:</h2>
                    <ul>
                        <li>Badanie morfologiczne krwi</li>
                        <li>Badanie rozmazu krwi np. w kierunku Babeszjozy</li>
                        <li>Badania biochemiczne krwi ( próby wątrobowe, nerkowe, diagnostyka chorób trzustki, oznaczanie poziomu elektrolitów i pierwiastków)</li>
                        <li>Badanie moczu wraz z osadem</li>
                        <li>Badanie kału</li>
                        <li>Badanie zeskrobin</li>
                        <li>Badanie cytologiczne</li>
                        <li>Badania mikrobiologiczne</li>
                        <li>Badanie histopatologiczne</li>
                        <li>Badania specjalistyczne – przy współpracy zewnętrznych laboratoriów weterynaryjnych</li>
                    </ul>

                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h2>Stomatologia:</h2>
                    <ul>
                        <li>Ultradzwiękowe usuwanie kamienia nazębnego wraz z polerowaniem i lakierowaniem zębów</li>
                        <li>Ekstrakcje zębów stałych oraz mlecznych</li>
                        <li>Leczenie chorób przyzębia</li>
                        <li>Chirurgiczne leczenie złamań szczęki i żuchwy</li>
                        <li>Korekta zgryzu u zajęczaków i gryzoni domowych</li>
                    </ul>
                    <h2>Dietetyka:</h2>
                    <ul>
                        <li>Program zwalczania otyłości wśród psów i kotów</li>
                        <li>Porady żywieniowe</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <h2>Ginekologia i Położnictwo:</h2>
                    <ul>
                        <li>Badanie ginekologiczne psów i kotów</li>
                        <li>Badanie poziomu hormonów płciowych</li>
                        <li>Ustalanie terminu krycia suk poprzez badanie poziomu progesteronu oraz badanie cytologiczne wymazów z pochwy</li>
                        <li>Ultrasonograficzne i radiologiczne diagnozowanie i prowadzenie ciąży</li>
                        <li>Ultrasonograficzne i radiologiczne diagnozowanie chorób narządów układu rozrodczego</li>
                        <li>Zabiegi cesarskiego cięcia</li>
                        <li>Zabiegi chirurgiczne w obrębie narządów płciowych samców oraz samic pełny zakres usług</li>
                    </ul>

                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <h2>Ponadto:</h2>
                    <ul>
                        <li>Badania rozpoznawcze w kierunku wścieklizny (obserwacje po pogryzieniach)</li>
                        <li>Wystawiamy paszporty dla psów, kotów i fretek</li>
                        <li>Współpracujemy z Ośrodkami Naukowymi</li>
                        <li>Współpracujemy z Weterynaryjnymi Laboratoriami Diagnostycznymi ( Idexx, Laboklin)</li>
                        <li>Przeprowadzamy badania RTG w kierunku dysplazji stawów biodrowych oraz łokciowych z wpisem do rodowodu</li>
                        <li>Możliwość konsultacji z najlepszymi specjalistami w kraju</li>
                    </ul>
                    
                </Col>
            </Row>

        </Container>
    );
}

export default Oferta;
