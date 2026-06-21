"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#a-propos", label: "À propos" },
  { href: "#prestations", label: "Prestations" },
  { href: "#galerie", label: "Galerie" },
  { href: "#deroulement", label: "Déroulement" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/85 backdrop-blur-xl shadow-premium py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-wide text-noir-elegant">
          Maison <span className="text-rose-poudre">Lou</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-gris-chaud hover:text-noir-elegant transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-dore-subtil transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0665562007"
            className="flex items-center gap-2 text-sm text-noir-elegant hover:text-rose-poudre transition-colors"
          >
            <Phone size={15} />
            06 65 56 20 07
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-noir-elegant text-ivory text-sm font-semibold hover:bg-rose-poudre transition-colors duration-300"
          >
            Réserver
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-noir-elegant"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-ivory border-t border-taupe/30 mt-4"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-noir-elegant font-body"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-full bg-noir-elegant text-ivory text-center text-sm font-semibold"
            >
              Réserver
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
