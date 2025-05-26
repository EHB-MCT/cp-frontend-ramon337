import { motion } from "framer-motion";
import { useState } from "react";

const StrawScene = () => {
  const [blowTriggered, setBlowTriggered] = useState(false);
  const [destroyed, setDestroyed] = useState(false);

  const handleClick = () => {
    if (!blowTriggered) {
      setBlowTriggered(true);
      setTimeout(() => setDestroyed(true), 800);
    }
  };

  return (
    <div className="house-wolf-container" style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        className="wolf2"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
        onClick={handleClick}
        style={{ position: "absolute", left: "100px", bottom: "50px", zIndex: 2 }}
      >
        <img src="wolf2.png" alt="Wolf" />
      </motion.div>

      {blowTriggered && !destroyed && (
        <motion.img
          src="blow.png"
          alt="Blaas effect"
          className="blow-effect"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 100, 200] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            bottom: "37%",
            left: "500px",
            width: "150px",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />
      )}

      <motion.div
        className={`straw-house-wrapper ${destroyed ? "destroyed" : ""}`}
        initial={{ rotate: 0 }}
        animate={blowTriggered && !destroyed ? { rotate: [0, -5, 5, -5, 0] } : { rotate: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "absolute",
          top: destroyed ? "50px" : "0",
          right: "200px",
          width: "35%",
          zIndex: 1,
        }}
      >
        <img src={destroyed ? "straw-house-destroyed.png" : "straw house.png"} alt="straw house" />
      </motion.div>
    </div>
  );
};

export default StrawScene;
