"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Camille R.",
    text: "Une prestation impeccable, à l'heure et avec un matériel irréprochable. Je recommande Maison Lou les yeux fermés.",
  },
  {
    name: "Inès M.",
    text: "Lou est minutieuse et de très bon conseil. Pouvoir profiter d'une manucure professionnelle chez moi, c'est un vrai luxe.",
  },
  {
    name: "Sarah B.",
    text: "Toujours un plaisir de la recevoir. Ambiance détendue, résultat magnifique, je suis cliente depuis plus d'un an.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section id="avis" className="py-28 bg-noir-elegant text-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-poudre/10 rounded-full blur-3xl" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <p className="eyebrow mb-4">Avis clientes</p>
        <h2 className="font-display text-4xl sm:text-5xl mb-3 text-balance">
          Elles ont vécu l&apos;expérience Maison Lou
        </h2>
        <div className="flex items-center justify-center gap-1 mb-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} className="fill-dore-subtil text-dore-subtil" />
          ))}
          <span className="ml-2 text-sm text-ivory/60">5.0</span>
        </div>

        <div className="relative min-h-[180px] flex items-center justify-center">
          <Quote className="absolute -top-2 left-1/2 -translate-x-1/2 text-rose-poudre/20" size={48} />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <p className="font-display text-xl sm:text-2xl leading-relaxed text-ivory/90 mb-6 text-balance">
                « {testimonials[index].text} »
              </p>
              <p className="text-sm text-dore-subtil tracking-wide">
                {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-rose-poudre hover:text-rose-poudre transition-colors"
            aria-label="Avis précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-rose-poudre" : "bg-ivory/20"
                }`}
                aria-label={`Avis ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:border-rose-poudre hover:text-rose-poudre transition-colors"
            aria-label="Avis suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="text-xs text-ivory/40 mt-10">
          Intégration des avis Google à venir prochainement.
        </p>
      </div>
    </section>
  );
}
