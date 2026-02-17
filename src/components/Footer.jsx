import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0D]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-400"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">Host Code-X</span>.  
        All rights reserved.
      </motion.div>
    </footer>
  );
}
