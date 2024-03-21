import Homepage from "./Homepage/Homepage";
import Lokacia from "./Lokacia/Lokacia";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/lokacia" element={<Lokacia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
