// src/components/ScrollImage.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollImage = ({ imgPath, speed = 1, xSpeed = 0, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${-100 * speed}%`]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * xSpeed}%`]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, x }}
      className={`scroll-image ${className}`}
    >
      <img
        src={`${imgPath}`}
        alt="Parallax laag"
        className="image"
      />
    </motion.div>
  );
};

export default ScrollImage;
