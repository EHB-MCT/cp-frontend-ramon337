// src/pages/FairyTale.jsx
import ScrollImage from "../components/ScrollImage";
import "../style/Fairytale.css";
import background from "../assets/layer-back.png";
import forest from "../assets/layer-forest.png";
import ground from "../assets/layer-ground.png";
import pigs from "../assets/pigs.png";
import front from "../assets/layer-front.png";

const FairyTale = () => {
  return (
    <div className="fairytale">
      <div className="parallax-container">
        <h1>De 3 Biggetjes</h1>
        <ScrollImage imgPath={background} speed={-0.4} className="layer-back" />
        <ScrollImage imgPath={forest} speed={0.4} className="layer-forest" />
        <ScrollImage imgPath={ground} speed={0.6} className="layer-ground" />
        <ScrollImage imgPath={pigs} speed={0.8} className="layer-pigs" />
        <ScrollImage imgPath={front} speed={1} className="layer-front" />
      </div>
      <div className="end-section">
      </div>
    </div>
  );
};

export default FairyTale;
