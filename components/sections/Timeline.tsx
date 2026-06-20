"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles, Gem, Brush, Scissors } from "lucide-react";

const steps = [
  {
    icon: GraduationCap,
    year: "2017 — 2018",
    title: "CAP Esthétique",
    desc: "Début de la formation en apprentissage, alliant institut et école.",
  },
  {
    icon: Award,
    year: "2018 — 2021",
    title: "Brevet Professionnel",
    desc: "Poursuite de la formation en alternance jusqu'à l'obtention du BP.",
  },
  {
    icon: Sparkles,
    year: "2021 — 2026",
    title: "Plus de 5 ans d'expérience",
    desc: "Signature d'un CDI et perfectionnement continu en institut.",
  },
  {
    icon: Gem,
    title: "Renforcement ongles naturels",
    desc: "Formation spécialisée en soin et renforcement de l'ongle naturel.",
  },
  {
    icon: Brush,
    title: "Pose gel & manucure russe",
    desc: "Techniques avancées de pose gel et de manucure russe précise.",
  },
  {
    icon: Scissors,
    title: "Perfectionnement professionnel",
    desc: "Formations continues en prothésie ongulaire et extensions de cils.",
  },
];

export default function Timeline() {
  return (
    <section className="py-28 bg-gradient-to-b from-ivory to-[#f3ece7]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Parcours &amp; expérience</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant text-balance">
            Une expertise construite avec exigence
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-dore-subtil via-rose-poudre/60 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const leftSide = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className={`relative flex sm:items-center gap-6 sm:gap-0 ${
                    leftSide ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-9 h-9 rounded-full bg-ivory border-2 border-dore-subtil flex items-center justify-center shadow-premium z-10">
                    <Icon size={16} className="text-rose-poudre" />
                  </div>

                  <div className={`pl-14 sm:pl-0 sm:w-1/2 ${leftSide ? "sm:pr-14 sm:text-right" : "sm:pl-14"}`}>
                    <div className="glass-card rounded-2xl p-6 inline-block w-full sm:w-auto sm:max-w-sm hover:shadow-premium transition-shadow duration-300">
                      {step.year && (
                        <p className="text-xs font-semibold text-dore-subtil tracking-wide mb-1">
                          {step.year}
                        </p>
                      )}
                      <p className="font-display text-xl text-noir-elegant mb-1">
                        {step.title}
                      </p>
                      <p className="text-sm text-gris-chaud leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
