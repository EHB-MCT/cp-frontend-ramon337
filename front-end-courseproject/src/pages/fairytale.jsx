import ScrollImage from "../components/ScrollImage";
import ScrollText from "../components/ScrollText";
import SceneWrapper from "../components/SceneWrapper.jsx";
import "../style/fairytale.css";

const FairyTale = () => {
  return (
    <div className="fairytale">
      {/* Scene 1 */}
      <SceneWrapper className="scene1">
        <h1 className="scene-title">De 3 Biggetjes</h1>

        <ScrollImage imgPath="layer-back.png" speed={-0.4} className="layer-back" />
        <ScrollImage imgPath="layer-forest.png" speed={0.4} className="layer-forest" />
        <ScrollImage imgPath="layer-ground.png" speed={0.6} className="layer-ground" />
        <ScrollImage imgPath="pigs.png" speed={1} className="layer-pigs" />
        <ScrollImage imgPath="layer-front.png" speed={1} className="layer-front" />

        {/* Scroll Text */}
        <ScrollText top="70%" left="33%">
          <p>Er waren eens drie biggetjes...</p>
        </ScrollText>
      </SceneWrapper>
      {/* Scene 2 */}
      <SceneWrapper>
        <img src="wolf.png" alt="Wolf" style={{ width: "300px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <ScrollText top="80%" left="50%">
          <p>... en toen kwam de grote boze wolf!</p>
        </ScrollText>
      </SceneWrapper>
    </div>
  );
};

export default FairyTale;
