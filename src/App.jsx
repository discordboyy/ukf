// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OmOss from "./pages/OmOss";
import HvaSkjer from "./pages/HvaSkjer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/hva-skjer" element={<HvaSkjer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;