import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScrollImage from "../components/ScrollImage";
import ScrollText from "../components/ScrollText";
import SceneWrapper from "../components/SceneWrapper.jsx";
import "../style/fairytale.css";
import SlideInImage from "../components/slideInImage.jsx";
import StrawScene from "../components/StrawScene";
import WoodScene from "../components/WoodScene";
import StoneScene from "../components/StoneScene";
import { useLocation } from "react-router-dom";

const FairyTale = () => {
  const [blowTriggered, setBlowTriggered] = useState(false);
  const [destroyed, setDestroyed] = useState(false);

  const [woodBlow, setWoodBlow] = useState(false);
  const [woodDestroyed, setWoodDestroyed] = useState(false);

  const [stoneBlow, setStoneBlow] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const handleWolfClick = (type) => {
    if (type === "straw" && !blowTriggered) {
      setBlowTriggered(true);
      setTimeout(() => setDestroyed(true), 800);
    }

    if (type === "wood" && !woodBlow) {
      setWoodBlow(true);
      setTimeout(() => setWoodDestroyed(true), 800);
    }

    if (type === "stone" && !stoneBlow) {
      setStoneBlow(true);
    }
  };

  return (
    <div className="fairytale">
      {/* Scene 1 */}
      <Link className="back-button" to="/making-of/ramon-de-raes-de-wolf-en-de-3-biggetjes">
        Back
      </Link>
      <SceneWrapper className="scene1">
        <h1 className="scene-title">De 3 Biggetjes</h1>
        <ScrollImage imgPath="layer-back.png" speed={-0.4} className="layer-back" />
        <ScrollImage imgPath="layer-forest.png" speed={0.4} className="layer-forest" />
        <ScrollImage imgPath="layer-ground.png" speed={0.6} className="layer-ground" />
        <button style={{cursor: "pointer"}}
          onClick={() => {
            const scream = new Audio("./pig-sound.wav");
            scream.volume = 0.9;
            scream.play();
          }}
        >
          <ScrollImage imgPath="pigs.png" speed={0.6} className="layer-pigs" />
        </button>
        <ScrollImage imgPath="layer-front.png" speed={1} className="layer-front" />
        <ScrollText className="text1">
          <p>Er waren eens drie biggetjes...</p>
        </ScrollText>
      </SceneWrapper>

      {/* Scene 2 */}
      <SceneWrapper className="scene2">
        <ScrollText className="text2">
          <p>Op een dag gingen ze hun eigen huis bouwen om alleen te gaan wonen</p>
        </ScrollText>
        <SlideInImage src="straw house.png" className="straw-house" delay={0.2} threshold={0.4} />
        <ScrollText className="text3">
          <p>Het eerste biggetje bouwde een huis van stro</p>
        </ScrollText>
        <SlideInImage src="wooden house.png" className="wooden-house" direction="left" delay={0.2} threshold={0.4} />
        <ScrollText className="text4">
          <p>Het tweede biggetje bouwde een huis van hout</p>
        </ScrollText>
        <SlideInImage src="stone house.png" className="stone-house" delay={0.2} threshold={0.4} />
        <ScrollText className="text5">
          <p>Het derde biggetje bouwde een huis van steen</p>
        </ScrollText>
      </SceneWrapper>

      {/* Scene 3 */}
      <SceneWrapper className="scene3">
        <img src="background-paralax-scene3.png" className="background-scene3" alt="" />
        <ScrollImage imgPath="wolf.png" speed={-2} xSpeed={-1.5} className="layer-wolf" />
        <ScrollText className="text6">
          <p>Maar het gevaar loert, er sluipt een boze wolf dichterbij</p>
        </ScrollText>
      </SceneWrapper>

      <SceneWrapper className="scene4">
        <StrawScene />
        <ScrollText className="text7">
          <p>De wolf naderde het strooien huisje en begon te blazen</p>
        </ScrollText>
        <ScrollText className="text8">
          <p>Het huisje was niet sterk genoeg, het biggetje kon nog net vluchten naar het houten huisje </p>
        </ScrollText>
      </SceneWrapper>

      <SceneWrapper className="scene5">
        <WoodScene />
        <ScrollText className="text9">
          <p>De wolf kwam bij dit huisje en blies erop los</p>
        </ScrollText>
        <ScrollText className="text10">
          <p>Ook dit huisje was nit sterk genoeg, de 2 biggetjes liepen snel naar het stenen huisje</p>
        </ScrollText>
      </SceneWrapper>

      <SceneWrapper className="scene6">
        <StoneScene />
        <ScrollText className="text11">
          <p>De wolf probeerde ook dit huis omver te blazen</p>
        </ScrollText>
        <ScrollText className="text12">
          <p>Het stenen huis was wel sterk genoeg. De 3 biggetjes waren veilig!</p>
        </ScrollText>
      </SceneWrapper>
      <SceneWrapper className="scene7">
        <img src="end.png" className="end" alt="" />
        <ScrollText className="text13">
          <p>En ze leefden nog lang en gelukkig...</p>
        </ScrollText>
      </SceneWrapper>
    </div>
  );
};

export default FairyTale;
