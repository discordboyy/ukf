// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

// lazy pages
const Home = lazy(() => import("./pages/Home"));
const OmOss = lazy(() => import("./pages/OmOss"));
const HvaSkjer = lazy(() => import("./pages/HvaSkjer"));
const Kurs = lazy(() => import("./pages/Kurs"));
const Priser = lazy(() => import("./pages/Priser"));
const Prosjekter = lazy(() => import("./pages/Prosjekter"));

function App() {
  return (
    <HashRouter>
      <Header />

      <Suspense fallback={<div style={{padding:20}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/hva-skjer" element={<HvaSkjer />} />
          <Route path="/bestill-kurs" element={<Kurs />} />
          <Route path="/priser" element={<Priser />} />
          <Route path="/prosjekter" element={<Prosjekter />} />
        </Routes>
      </Suspense>

      <Footer />
    </HashRouter>
  );
}

export default App;