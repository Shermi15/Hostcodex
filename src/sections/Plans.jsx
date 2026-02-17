import { motion } from "framer-motion";

const plans = [
  {
    name: "Landing Page",
    price: "Desde USD 300",
    description: "Ideal para validar ideas o campañas.",
    features: [
      "1 página optimizada",
      "Diseño moderno",
      "Responsive",
      "Formulario de contacto",
      "Carga rápida",
    ],
  },
  {
    name: "Sitio Institucional",
    price: "Desde USD 600",
    description: "Presencia profesional para empresas.",
    features: [
      "Hasta 5 secciones",
      "Diseño a medida",
      "SEO básico",
      "Escalable",
      "Soporte inicial",
    ],
    highlight: true,
  },
  {
    name: "Tienda Online",
    price: "Desde USD 900",
    description: "Vendé tus productos 24/7.",
    features: [
      "Catálogo de productos",
      "Carrito y pagos",
      "Panel de gestión",
      "Integración envíos",
      "Seguridad",
    ],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="bg-[#0B0B0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Web plans
        </motion.h2>

        <p className="text-gray-400 text-center mb-16">
          Simple, scalable solutions for every stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col
                ${
                  plan.highlight
                    ? "border-blue-500/50 bg-[#111114] shadow-[0_0_60px_rgba(59,130,246,0.15)]"
                    : "border-white/10 bg-[#111114]"
                }
              `}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-blue-500 text-black font-medium">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              <p className="text-2xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-blue-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto py-3 rounded-lg font-medium transition
                  ${
                    plan.highlight
                      ? "bg-blue-500 text-black hover:bg-blue-400"
                      : "border border-white/20 hover:border-blue-500/50"
                  }
                `}
              >
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
