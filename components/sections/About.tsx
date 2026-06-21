"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="a-propos" className="py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-premium group">
            <Image
              src="/images/lou-portrait.jpg"
              alt="Lou, esthéticienne à domicile — Maison Lou"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 480px"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-dore-subtil/30 rounded-[2rem]" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:right-4 glass-card rounded-2xl px-6 py-4 shadow-premium">
            <p className="font-display text-3xl text-noir-elegant">5 ans+</p>
            <p className="text-xs text-gris-chaud uppercase tracking-wide">d&apos;expérience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="eyebrow mb-4">À propos de Lou</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant mb-6 text-balance">
            Une esthéticienne passionnée,<br /> à votre service
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-gris-chaud text-lg leading-relaxed mb-5">
            Lou est une esthéticienne passionnée spécialisée dans les
            prestations à domicile.
          </p>
          <p className="text-gris-chaud leading-relaxed mb-8">
            Elle met son expertise, son sens du détail et sa créativité au
            service de ses clientes afin de proposer des prestations
            personnalisées et de qualité dans un cadre confortable et
            rassurant.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-display text-2xl text-rose-poudre mb-1">CAP</p>
              <p className="text-sm text-gris-chaud">Esthétique</p>
            </div>
            <div>
              <p className="font-display text-2xl text-rose-poudre mb-1">BP</p>
              <p className="text-sm text-gris-chaud">Brevet Professionnel</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
