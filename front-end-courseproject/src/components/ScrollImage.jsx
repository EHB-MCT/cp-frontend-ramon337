// src/components/ScrollImage.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollImage = ({ imgPath, speed, className }) => {
  const targetRef = useRef(null);

  // Gebruik useScroll om de scroll-voortgang te krijgen
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Beweeg de afbeelding omhoog bij scrollen met variabele snelheid
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y }}
      className={`scroll-image ${className}`}
    >
      <img
        src={`/images/${imgPath}`}
        alt="Parallax laag"
        className="image"
      />
    </motion.div>
  );
};

export default ScrollImage;
