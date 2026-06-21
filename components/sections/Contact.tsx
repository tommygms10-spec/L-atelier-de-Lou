"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Send, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Branchez ici votre endpoint d'envoi (Formspree, Resend, API route...).
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant mb-5 text-balance">
            Réserver ma prestation à domicile
          </h2>
          <p className="text-gris-chaud">
            Un message, un appel, ou WhatsApp : choisissez ce qui vous convient.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="tel:0665562007"
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-rose-poudre/10 hover:bg-rose-poudre/20 transition-colors text-center"
              >
                <Phone className="text-rose-poudre" size={20} />
                <span className="text-sm text-noir-elegant font-medium">Appeler</span>
              </a>
              <a
                href="https://wa.me/33665562007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-rose-poudre/10 hover:bg-rose-poudre/20 transition-colors text-center"
              >
                <MessageSquare className="text-rose-poudre" size={20} />
                <span className="text-sm text-noir-elegant font-medium">WhatsApp</span>
              </a>
              <a
                href="mailto:loulounejado@gmail.com"
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-rose-poudre/10 hover:bg-rose-poudre/20 transition-colors text-center"
              >
                <Mail className="text-rose-poudre" size={20} />
                <span className="text-sm text-noir-elegant font-medium">Email</span>
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-premium aspect-[4/3] relative">
              <iframe
                title="Carte Maison Lou"
                src="https://www.google.com/maps?q=Tours,France&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gris-chaud">
              <MapPin size={15} className="text-dore-subtil" />
              Déplacement à domicile — zone configurée dans la section ci-dessus.
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-premium border border-taupe/20 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-gris-chaud font-medium mb-1.5 block">Nom</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-taupe/30 focus:border-rose-poudre outline-none text-sm"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="text-xs text-gris-chaud font-medium mb-1.5 block">Téléphone</label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-taupe/30 focus:border-rose-poudre outline-none text-sm"
                  placeholder="06 00 00 00 00"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gris-chaud font-medium mb-1.5 block">Email</label>
              <input
                required
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-ivory border border-taupe/30 focus:border-rose-poudre outline-none text-sm"
                placeholder="vous@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-gris-chaud font-medium mb-1.5 block">Prestation souhaitée</label>
              <select className="w-full px-4 py-3 rounded-xl bg-ivory border border-taupe/30 focus:border-rose-poudre outline-none text-sm">
                <option>Gel sur ongles naturels</option>
                <option>Rallongement d&apos;ongles</option>
                <option>Vernis semi-permanent pieds</option>
                <option>Épilation</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gris-chaud font-medium mb-1.5 block">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-ivory border border-taupe/30 focus:border-rose-poudre outline-none text-sm resize-none"
                placeholder="Adresse, créneau souhaité, précisions..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-noir-elegant text-ivory font-semibold text-sm hover:bg-rose-poudre transition-colors duration-300"
            >
              <Send size={16} />
              Réserver ma prestation à domicile
            </button>
            {submitted && (
              <p className="text-sm text-rose-poudre text-center">
                Merci ! Votre demande a bien été enregistrée, Lou vous recontacte rapidement.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
