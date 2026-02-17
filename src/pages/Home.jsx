import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState("");

  // Única función que dispara el scroll y la selección
  const handlePlanSelection = (planTitle) => {
    setSelectedService(planTitle);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#0E0E10] text-gray-100">
        <Hero />

        {/* --- SECCIÓN PLANES (Con la lógica de selección) --- */}
        <section id="plans" className="relative bg-[#0B0B0D] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-32">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white">Planes web</h2>
              <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                Soluciones sencillas adaptadas a las necesidades de su negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Landing Page",
                  price: "Desde USD 300",
                  desc: "Perfecta para campañas, startups o validación de ideas..",
                  features: ["Página única", "Interfaz de usuario moderna", "Diseño adaptable", "Formulario de contacto", "Carga rápida"],
                },
                {
                  title: "Sitio web institucional",
                  price: "Desde USD 450",
                  desc: "Professional presence for growing businesses.",
                  highlight: true,
                  features: ["Hasta 5 secciones", "Diseño personalizado", "Fundamentos de SEO", "Estructura escalable", "Soporte inicial"],
                },
                {
                  title: "Tienda online",
                  price: "Desde USD 600",
                  desc: "Comience a vender sus productos en línea las 24 horas del día, los 7 días de la semana.",
                  features: ["Catálogo de productos", "Carrito y pagos", "Panel de administración", "Integración de envíos", "Configuración segura"],
                },
              ].map((plan, i) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative bg-[#111114] border rounded-2xl p-8 flex flex-col ${
                    plan.highlight ? "border-blue-500/50 shadow-[0_0_60px_rgba(59,130,246,0.15)]" : "border-white/10"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-blue-500 text-black font-medium">
                      Mas popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                  <p className="text-2xl font-bold text-white mb-6">{plan.price}</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="text-blue-500">✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePlanSelection(plan.title)}
                    className={`mt-auto py-3 rounded-lg font-medium transition ${
                      plan.highlight ? "bg-blue-500 text-black hover:bg-blue-400" : "border border-white/20 text-white hover:border-blue-500/50"
                    }`}
                  >
                    Empezar
                  </button>
                </motion.div>
              ))}
            </div>

            {/* --- SECCIÓN ADDONS (Tal cual me la pasaste) --- */}
            <section id="addons" className="relative max-w-7xl mx-auto px-6 py-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Complementos y soporte</h2>
                <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                  Todos los planes incluyen <span className="text-white">dominio y hosting</span>. Mejore su sitio web con soporte y optimizaciones continuas.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Mantenimiento mensual",
                    desc: "Mantenga su sitio web seguro, actualizado y funcionando sin problemas.",
                    badge: "Primer mes gratis",
                    features: ["Actualizaciones y correcciones", "Monitoreo de seguridad", "Cambios menores en el contenido", "Comprobaciones de rendimiento"],
                    highlight: true,
                  },
                  {
                    title: "SEO Starter",
                    desc: "Mejorar la visibilidad y la indexación en motores de búsqueda.",
                    features: ["Configuración de metaetiquetas", "Indexación de Google", "Mejores prácticas de SEO"],
                  },
                  {
                    title: "Integración de WhatsApp",
                    desc: "Increase conversions with direct contact.",
                    features: ["Botón flotante de WhatsApp", "Enlace de chat directo", "Optimizado para dispositivos móviles"],
                  },
                  {
                    title: "Optimización de la velocidad",
                    desc: "Sitios web de carga rápida con mejor UX.",
                    features: ["Optimización del rendimiento", "Limpieza de imágenes y código"],
                  },
                ].map((addon, i) => (
                  <motion.div
                    key={addon.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`relative bg-[#111114] border rounded-2xl p-6 ${
                      addon.highlight ? "border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.15)]" : "border-white/10"
                    }`}
                  >
                    {addon.badge && (
                      <span className="absolute -top-3 left-4 text-xs px-3 py-1 rounded-full bg-blue-500 text-black font-medium">{addon.badge}</span>
                    )}
                    <h3 className="text-lg font-semibold text-white mb-2">{addon.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{addon.desc}</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {addon.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="text-blue-500">✔</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN SERVICIOS (Qué hacemos - Tal cual me la pasaste) --- */}
        <section id="services" className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Que hacemos</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Diseñamos y construimos productos digitales centrándonos en el rendimiento, la escalabilidad y el código limpio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Desarrollo web",
                desc: "Sitios web y aplicaciones web modernos creados con tecnologías de vanguardia.",
              },
              {
                title: "Soluciones de software",
                desc: "Software personalizado adaptado a las necesidades y flujos de trabajo de su negocio.",
              },
              {
                title: "Arquitectura del sistema",
                desc: "Sistemas escalables y mantenibles diseñados para el crecimiento a largo plazo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative bg-[#111114] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Contact selectedService={selectedService} />
      </main>
      <Footer />
    </>
  );
}
