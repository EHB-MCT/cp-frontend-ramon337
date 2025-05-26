import { motion } from "framer-motion";
import { useState } from "react";

const StoneScene = () => {
  const [blowTriggered, setBlowTriggered] = useState(false);

  const handleClick = () => {
    if (!blowTriggered) {
      setBlowTriggered(true);
      setTimeout(() => setBlowTriggered(false), 1000); // reset animatie
    }
  };

  return (
    <div className="house-wolf-container">
      <motion.div
        className="wolf3"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
        onClick={handleClick}
      >
        <img src="wolf2.png" alt="Wolf" />
      </motion.div>

      {blowTriggered && (
        <motion.img
          src="blow.png"
          alt="Blaas effect"
          className="blow-effect2"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 100, 200] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}

      <motion.div
        className="stone-house-wrapper"
        initial={{ rotate: 0 }}
        animate={blowTriggered ? { rotate: [0, -1, 1, -1, 0] } : { rotate: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="stone house.png" alt="stone house" />
      </motion.div>
    </div>
  );
};

export default StoneScene;
