import ScrollImage from "../components/ScrollImage";
import ScrollText from "../components/ScrollText";
import SceneWrapper from "../components/SceneWrapper.jsx";
import "../style/fairytale.css";
import SlideInImage from "../components/slideInImage.jsx";

const FairyTale = () => {
  return (
    <div className="fairytale">
      <SceneWrapper className="scene1">
        <h1 className="scene-title">De 3 Biggetjes</h1>
        <ScrollImage imgPath="layer-back.png" speed={-0.4} className="layer-back" />
        <ScrollImage imgPath="layer-forest.png" speed={0.4} className="layer-forest" />
        <ScrollImage imgPath="layer-ground.png" speed={0.6} className="layer-ground" />
        <ScrollImage imgPath="pigs.png" speed={0.6} className="layer-pigs" />
        <ScrollImage imgPath="layer-front.png" speed={1} className="layer-front" />
        <ScrollText className="text1">
          <p>Er waren eens drie biggetjes...</p>
        </ScrollText>
        <ScrollText className="text2">
          <p>op een dag gingen ze hun eigen huis bouwen om alleen te gaan wonen</p>
        </ScrollText>
      </SceneWrapper>
      <SceneWrapper className="scene2">
        <SlideInImage src="straw house.png" className="straw-house" delay={0.2} threshold={0.4} />
        <ScrollText className="text3">
          <p>het eerste biggetje bouwde een huis van stro</p>
        </ScrollText>
        <SlideInImage src="wooden house.png" className="wooden-house" direction="left" delay={0.2} threshold={0.4} />
        <ScrollText className="text4">
          <p>het tweede biggetje bouwde een huis van hout</p>
        </ScrollText>
              <SlideInImage src="stone house.png" className="stone-house" direction="right" delay={0.2} threshold={0.4} />
        <ScrollText className="text5">
          <p>het derde biggetje bouwde een huis van steen</p>
        </ScrollText>
      </SceneWrapper>
    </div>
  );
};

export default FairyTale;
