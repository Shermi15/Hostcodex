import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-[-200px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Creamos{" "}
              <span className="text-blue-500">productos digitales</span>
              <br />
            que escalan
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-xl">
             Desarrollo web, soluciones de software y sistemas escalables.
De la idea a la produccion.
            </p>

            
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative bg-black/60 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-[0_0_60px_rgba(59,130,246,0.15)]">
              <pre className="text-sm text-cyan-400 leading-relaxed">
{`const product = build({
  quality: "high",
  performance: true,
  scalability: true,
});`}
              </pre>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
