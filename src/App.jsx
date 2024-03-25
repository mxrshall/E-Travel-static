import Homepage from "./Stranky/Homepage";
import Info from "./Stranky/Info";
import Katalog from "./Stranky/Katalog";
import Pamiatka from "./Stranky/Pamiatka";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/pamiatka" element={<Pamiatka />} /> 
        <Route path="/katalog" element={<Katalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
