"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const onglerie = [
  { name: "Gel sur ongles naturels", price: "45 €" },
  { name: "Rallongement d'ongles", price: "60 €" },
  { name: "Vernis semi-permanent pieds", price: "35 €" },
  { name: "Supplément French", price: "3 €" },
];

const epilations = [
  { name: "Visage", price: "5 € / zone" },
  { name: "Aisselles", price: "10 €" },
  { name: "Demi-jambes ou cuisses", price: "16 €" },
  { name: "Jambes complètes", price: "24 €" },
  { name: "Maillot classique", price: "13 €" },
  { name: "Maillot intégral", price: "20 €" },
];

function PriceList({ title, items, delay }: { title: string; items: { name: string; price: string }[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay }}
      className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-premium border border-taupe/20"
    >
      <h3 className="font-display text-3xl text-noir-elegant mb-7">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline justify-between gap-4 border-b border-taupe/20 pb-3"
          >
            <span className="text-gris-chaud">{item.name}</span>
            <span className="font-display text-lg text-rose-poudre whitespace-nowrap">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="prestations" className="py-28 bg-gradient-to-b from-[#f3ece7] to-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-6"
        >
          <p className="eyebrow mb-4">Prestations &amp; tarifs</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant text-balance">
            Des soins sur mesure, chez vous
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-sm text-gris-chaud mb-14"
        >
          <CheckCircle2 size={16} className="text-dore-subtil" />
          Matériel professionnel fourni pour toutes les prestations
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <PriceList title="Onglerie" items={onglerie} delay={0} />
          <PriceList title="Épilations" items={epilations} delay={0.1} />
        </div>
      </div>
    </section>
  );
}
