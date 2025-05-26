import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SlideInImage = ({ src, className = "", direction = "right", transition = { duration: 1.5, ease: "easeOut" }, delay, threshold, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true, // alleen eerste keer
  });

  const initialX = direction === "left" ? "-100%" : "100%";

  return (
    <div ref={ref} className={`slide-in-wrapper ${className}`} style={{ overflow: "hidden", position: "relative" }}>
      <motion.img
        src={src}
        initial={{ x: initialX, opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 1 } : { x: initialX, opacity: 0 }}
        transition={{ ...transition, delay }}
        style={{
          width: "100%",
          maxWidth: "800px",
          position: "relative",
          display: "block",
          margin: "0 auto",
          cursor: onClick ? "pointer" : "default",
        }}
        onClick={onClick}
      />
    </div>
  );
};

export default SlideInImage;
