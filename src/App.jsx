import Homepage from "./Stranky/Homepage";
import Lokacie from "./Stranky/Lokacie";
import Info from "./Stranky/Info";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/lokacie" element={<Lokacie />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
