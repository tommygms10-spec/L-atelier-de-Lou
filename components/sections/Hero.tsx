"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const AmbientScene = dynamic(() => import("@/components/visual/AmbientScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-ivory via-[#f3e9e6] to-nude">
      {/* ambient gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-rose-poudre/30 blur-3xl animate-float-slow" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-dore-subtil/20 blur-3xl animate-float" />

      <AmbientScene />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-7"
          >
            <Sparkles size={14} className="text-dore-subtil" />
            <span className="text-xs font-semibold tracking-wide text-noir-elegant">
              Déplacement à domicile
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl text-noir-elegant leading-[1.05] mb-5 text-balance"
          >
            Maison <span className="gradient-gold-text italic">Lou</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl text-gris-chaud mb-6"
          >
            Esthétique &amp; Onglerie à domicile
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gris-chaud text-lg leading-relaxed mb-10 max-w-lg"
          >
            Profitez de prestations professionnelles d&apos;onglerie et
            d&apos;esthétique directement chez vous, dans le confort de votre
            environnement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-noir-elegant text-ivory font-semibold text-sm hover:bg-rose-poudre transition-all duration-300 shadow-premium"
            >
              Réserver un rendez-vous
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#prestations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-noir-elegant/20 text-noir-elegant font-semibold text-sm hover:border-dore-subtil hover:text-dore-subtil transition-colors duration-300"
            >
              Découvrir les prestations
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gris-chaud/60">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gris-chaud/60 to-transparent" />
      </div>
    </section>
  );
}
