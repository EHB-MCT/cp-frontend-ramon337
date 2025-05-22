// src/pages/FairyTale.jsx
import { div } from "framer-motion/client";
import ScrollImage from "../components/ScrollImage";
import "../style/Fairytale.css";

const FairyTale = () => {
  return (
    <div className="fairytale">
      <div className="fairytale-scene1">
        <div className="parallax-container">
          <h1>De 3 Biggetjes</h1>
          <ScrollImage imgPath="layer-back.png" speed={-0.4} className="layer-back" />
          <ScrollImage imgPath="layer-forest.png" speed={0.4} className="layer-forest" />
          <ScrollImage imgPath="layer-ground.png" speed={0.6} className="layer-ground" />
          <ScrollImage imgPath="pigs.png" speed={0.8} className="layer-pigs" />
          <ScrollImage imgPath="layer-front.png" speed={1} className="layer-front" />
        </div>
        <div className="end-section"></div>
      </div>
    </div>
  );
};

export default FairyTale;
