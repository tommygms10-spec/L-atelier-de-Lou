"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Car, Sparkles, ThumbsUp } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Prise de contact", desc: "Vous me contactez par téléphone, email ou WhatsApp." },
  { icon: ClipboardList, title: "Choix de la prestation", desc: "Nous définissons ensemble la prestation adaptée à vos besoins." },
  { icon: Car, title: "Déplacement à domicile", desc: "Je me déplace chez vous, à l'heure convenue, avec mon matériel professionnel." },
  { icon: Sparkles, title: "Prestation beauté", desc: "Installation rapide et réalisation de votre soin dans le confort de votre intérieur." },
  { icon: ThumbsUp, title: "Conseils personnalisés", desc: "Je vous transmets mes conseils pour prolonger les bienfaits du soin." },
];

export default function Process() {
  return (
    <section id="deroulement" className="py-28 bg-gradient-to-b from-ivory to-[#f3ece7]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="eyebrow mb-4">Comment ça se passe</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant text-balance">
            Le déroulement d&apos;un rendez-vous
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dore-subtil/60 to-transparent" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-ivory border-2 border-dore-subtil flex items-center justify-center mb-5 shadow-premium relative z-10">
                  <Icon size={20} className="text-rose-poudre" />
                </div>
                <p className="text-xs font-semibold text-dore-subtil mb-2">
                  Étape {i + 1}
                </p>
                <p className="font-display text-lg text-noir-elegant mb-2">
                  {step.title}
                </p>
                <p className="text-sm text-gris-chaud leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
