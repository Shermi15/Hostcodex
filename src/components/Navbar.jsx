import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const links = [
  
  { label: "Planes", id: "plans" },
  { label: "Add-ons", id: "addons" },
  { label: "Servicios", id: "services" },
  { label: "Contacto", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 140;

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-6"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div
          onClick={() => scrollTo("home")}
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={logo}
            alt="GB Code-X"
            className={`transition-all duration-300 ${
              scrolled ? "h-7" : "h-9"
            }`}
          />
        </motion.div>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative group transition
                ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              {link.label}

              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all
                  ${
                    active === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
