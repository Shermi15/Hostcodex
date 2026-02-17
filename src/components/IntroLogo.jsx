import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function IntroLogo({ onFinish }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.img
          src={logo}
          alt="GB Code-X"
          className="h-24 md:h-32"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: [0.6, 1.05, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          onAnimationComplete={() => {
            setTimeout(onFinish, 600);
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
