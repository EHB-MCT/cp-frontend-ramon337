import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollText = ({ children, className = "", transform = true, transition = { duration: 1.0, ease: "easeOut" } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-250px" });

  return (
    <motion.div
      ref={ref} // <-- Verplaatst hierheen!
      className={`scroll-text ${className}`}
      style={{
        position: "absolute",
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default ScrollText;
