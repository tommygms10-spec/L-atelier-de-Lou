"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "Tous" | "French" | "Gel" | "Nail Art" | "Naturel" | "Saisonnier";

interface Photo {
  src: string;
  alt: string;
  category: Category[];
  tall?: boolean;
}

const photos: Photo[] = [
  { src: "/images/nail-marbre-or.jpg", alt: "Manucure marbrée blanche et dorée", category: ["Gel", "Nail Art"], tall: true },
  { src: "/images/nail-french.jpg", alt: "French manucure classique blanche", category: ["French", "Naturel"] },
  { src: "/images/nail-rouge.jpg", alt: "Gel rouge brillant", category: ["Gel"], tall: true },
  { src: "/images/nail-flocon.jpg", alt: "Nail art flocons de neige hivernal", category: ["Nail Art", "Saisonnier"] },
  { src: "/images/nail-olaf.jpg", alt: "Nail art Olaf et paillettes lilas", category: ["Nail Art", "Saisonnier"], tall: true },
  { src: "/images/nail-feuille.jpg", alt: "Nail art feuillage bordeaux et blanc", category: ["Nail Art"] },
  { src: "/images/nail-vert-strass.jpg", alt: "Manucure verte avec strass", category: ["Nail Art", "Gel"] },
  { src: "/images/nail-neon-swirl.jpg", alt: "Nail art néon jaune et rose tourbillon", category: ["Nail Art"], tall: true },
  { src: "/images/nail-arcenciel.jpg", alt: "Nail art coloré arc-en-ciel et smiley", category: ["Nail Art"] },
  { src: "/images/nail-fleurs.jpg", alt: "Nail art floral rose, orange et jaune", category: ["Nail Art"], tall: true },
  { src: "/images/nail-loser.jpg", alt: "Nail art thématique rouge pailleté", category: ["Nail Art"] },
];

const filters: Category[] = ["Tous", "French", "Gel", "Nail Art", "Naturel", "Saisonnier"];

export default function Gallery() {
  const [active, setActive] = useState<Category>("Tous");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = photos.filter((p) => active === "Tous" || p.category.includes(active));

  function next() {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  }
  function prev() {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  }

  return (
    <section id="galerie" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="eyebrow mb-4">Galerie</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant text-balance">
            Les réalisations de Lou
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border",
                active === f
                  ? "bg-noir-elegant text-ivory border-noir-elegant"
                  : "bg-transparent text-gris-chaud border-taupe/30 hover:border-dore-subtil hover:text-dore-subtil"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 [grid-auto-flow:dense]">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.button
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                onClick={() => setLightbox(i)}
                className={cn(
                  "relative rounded-2xl overflow-hidden group shadow-premium",
                  photo.tall ? "row-span-2 aspect-[3/4]" : "aspect-square"
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-noir-elegant/0 group-hover:bg-noir-elegant/20 transition-colors duration-300" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-noir-elegant/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-ivory/80 hover:text-ivory"
              aria-label="Fermer"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 sm:left-8 text-ivory/70 hover:text-ivory"
              aria-label="Précédent"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 sm:right-8 text-ivory/70 hover:text-ivory"
              aria-label="Suivant"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={filtered[lightbox].src}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-glow"
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                fill
                className="object-cover"
                sizes="600px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
