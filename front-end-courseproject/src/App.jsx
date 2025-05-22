import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MakingOf from "./pages/MakingOf";
import FairyTale from "./pages/fairytale";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="wrapper">
                <Header />
                <Home />
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
                <Header />
                <Projects />
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
                <Header />
                <MakingOf />
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
