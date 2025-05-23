import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollText = ({ children, className = "", top = "50%", left = "50%", transform = true, transition = { duration: 0.6, ease: "easeOut" } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <div className="scroll-text-wrapper">
      <motion.div
        ref={ref} // <-- Verplaatst hierheen!
        className={`scroll-text ${className}`}
        style={{
          position: "absolute",
          top,
          left,
          transform: transform ? "translate(-50%, -50%)" : "none",
        }}
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: -100 } : { opacity: 0, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollText;
