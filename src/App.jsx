import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
