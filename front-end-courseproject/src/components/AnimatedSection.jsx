// components/AnimatedSection.jsx
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-8 bg-purple-700 text-white"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
