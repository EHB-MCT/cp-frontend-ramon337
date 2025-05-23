import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MakingOf from "./pages/MakingOf";
import FairyTale from "./pages/fairytale";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="wrapper">
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Home searchTerm={searchTerm}/>
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <div className="wrapper">
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Projects searchTerm={searchTerm}/>
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/making-of/:id"
          element={
            <>
              <div className="wrapper">
                <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <MakingOf searchTerm={searchTerm}/>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route path="/fairytale" element={<FairyTale />} />
      </Routes>
    </div>
  );
}

export default App;
