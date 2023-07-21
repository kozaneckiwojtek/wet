import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"

import Baner from './sites/baner';
import Witamy from './sites/witamy';
import Oferta from './sites/oferta';
import Galeria from './sites/galeria';
import Lokalizacja from './sites/lokalizacja';
import Kontakt from './sites/kontakt';
import Stopka from './sites/stopka';
import Hero from './sites/hero';

import './css/App.css'
function App() {
  return (
    <>
      <Baner />
      <Hero />
      <Routes>
        <Route path="/" element={<Witamy />} />
        <Route path="/oferta" element={<Oferta />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/lokalizacja" element={<Lokalizacja />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <Stopka />
    </>
  );
}

export default App;
