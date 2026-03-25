// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import OmOss from "./pages/OmOss";
import HvaSkjer from "./pages/HvaSkjer";
import Kurs from "./pages/Kurs";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/hva-skjer" element={<HvaSkjer />} />
        <Route path="/bestill-kurs" element={<Kurs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;