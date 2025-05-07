import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MakingOf from "./pages/MakingOf";
import "./App.css";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/making-of" element={<MakingOf />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
