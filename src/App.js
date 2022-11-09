import "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Telemedicine from "./components/Telemedicine";
import Dashboard from "./components/Dashboard";
import LiveMap from "./components/LiveMap";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/live-map" element={<LiveMap />} />
        </Routes>
    </div>
  );
}

export default App;
