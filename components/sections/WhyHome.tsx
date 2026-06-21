"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, Clock, Heart, BadgeCheck } from "lucide-react";

const cards = [
  {
    icon: Home,
    title: "Confort",
    desc: "Profitez de votre rendez-vous sans quitter votre domicile.",
  },
  {
    icon: Clock,
    title: "Gain de temps",
    desc: "Aucun déplacement, aucune attente.",
  },
  {
    icon: Heart,
    title: "Service personnalisé",
    desc: "Une prestation adaptée à vos besoins.",
  },
  {
    icon: BadgeCheck,
    title: "Qualité professionnelle",
    desc: "Le même niveau d'exigence qu'en institut.",
  },
];

function TiltCard({ icon: Icon, title, desc, index }: { icon: typeof Home; title: string; desc: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateZ(8px)`,
    });
  }

  function handleLeave() {
    setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)" });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-premium border border-taupe/20 transition-transform duration-200 ease-out will-change-transform"
    >
      <div className="w-14 h-14 rounded-2xl bg-rose-poudre/15 flex items-center justify-center mb-6">
        <Icon className="text-rose-poudre" size={24} />
      </div>
      <h3 className="font-display text-2xl text-noir-elegant mb-2">{title}</h3>
      <p className="text-sm text-gris-chaud leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function WhyHome() {
  return (
    <section className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="eyebrow mb-4">L&apos;expérience à domicile</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant text-balance">
            Pourquoi choisir une prestation à domicile
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <TiltCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
