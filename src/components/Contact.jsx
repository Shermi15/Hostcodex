import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact({ selectedService }) {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  // Cada vez que cambia selectedService en el Home, se actualiza el mensaje aquí
  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({
        ...prev,
        message: `Hola! Estoy interesado en el servicio: ${selectedService}`,
      }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    // Validamos que al menos haya un nombre
    if(!form.name) return alert("Por favor, ingresa tu nombre");

    const text = `Hola! Quiero un proyecto web 🚀\n\nNombre: ${form.name}\nMensaje: ${form.message}`;
    
    // Reemplaza XXXXXXXXXX con tu número real
    window.open(
      https://wa.me/5493465445431
,
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-[#0B0B0D] border-t border-white/10">
      <div className="max-w-3xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white text-center">Contacto</h2>
          <p className="mt-4 text-gray-400 text-center">Respondemos rápido por WhatsApp.</p>

          <div className="mt-12 space-y-6">
            <input
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500/50"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Contame sobre tu proyecto..."
              value={form.message}
              onChange={handleChange}
              className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white resize-none outline-none focus:border-blue-500/50"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={openWhatsApp}
              className="px-8 py-3 rounded-lg bg-blue-500 text-black font-medium hover:bg-blue-400 transition flex items-center gap-2"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
