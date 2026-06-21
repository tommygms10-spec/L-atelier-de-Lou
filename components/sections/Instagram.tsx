"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const igPhotos = [
  "/images/nail-marbre-or.jpg",
  "/images/nail-feuille.jpg",
  "/images/nail-flocon.jpg",
  "/images/nail-olaf.jpg",
  "/images/nail-fleurs.jpg",
  "/images/nail-neon-swirl.jpg",
];

export default function InstagramSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#f3ece7] to-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">Instagram</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant mb-5 text-balance">
            @maisonlou
          </h2>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-noir-elegant text-ivory text-sm font-semibold hover:bg-rose-poudre transition-colors"
          >
            <Instagram size={16} /> Suivre
          </a>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
          {igPhotos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <Image
                src={src}
                alt="Réalisation Maison Lou sur Instagram"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="200px"
              />
              <div className="absolute inset-0 bg-noir-elegant/0 group-hover:bg-noir-elegant/30 transition-colors flex items-center justify-center">
                <Instagram className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-gris-chaud/60 mt-8">
          Flux Instagram en direct — intégration prochaine.
        </p>
      </div>
    </section>
  );
}
