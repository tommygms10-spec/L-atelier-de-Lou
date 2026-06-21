"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Configuration simple : modifiez ces valeurs pour adapter la zone de déplacement.
const ZONE_CONFIG = {
  radiusKm: 20,
  zones: [
    {
      city: "Tours",
      nearby: ["Joué-lès-Tours", "Saint-Cyr-sur-Loire", "Saint-Avertin", "Chambray-lès-Tours", "Fondettes"],
    },
    {
      city: "Poitiers",
      nearby: ["Buxerolles", "Saint-Benoît", "Chasseneuil-du-Poitou", "Migné-Auxances", "Liguge"],
    },
    {
      city: "Orléans",
      nearby: ["Saint-Jean-de-Braye", "Olivet", "Fleury-les-Aubrais", "Saran", "Ormes"],
    },
  ],
};

export default function ZoneIntervention() {
  return (
    <section className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="eyebrow mb-4">Zone d&apos;intervention</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant mb-5 text-balance">
            Je me déplace directement chez vous.
          </h2>
          <p className="text-gris-chaud leading-relaxed max-w-xl mx-auto">
            Maison Lou intervient dans un rayon de {ZONE_CONFIG.radiusKm} km
            autour de <strong className="text-noir-elegant">Tours</strong>,{" "}
            <strong className="text-noir-elegant">Poitiers</strong> et{" "}
            <strong className="text-noir-elegant">Orléans</strong>. Aucun
            frais caché, ponctualité garantie : je m&apos;adapte à votre
            emploi du temps pour vous offrir une parenthèse beauté sans
            contrainte.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {ZONE_CONFIG.zones.map((zone, i) => (
            <motion.div
              key={zone.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 shadow-premium border border-taupe/20"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-poudre/15 flex items-center justify-center mb-5">
                <MapPin className="text-rose-poudre" size={20} />
              </div>
              <p className="font-display text-2xl text-noir-elegant mb-1">
                {zone.city}
              </p>
              <p className="text-xs text-dore-subtil font-semibold mb-4">
                Rayon de {ZONE_CONFIG.radiusKm} km
              </p>
              <div className="flex flex-wrap gap-2">
                {zone.nearby.map((city) => (
                  <span
                    key={city}
                    className="text-xs px-3 py-1.5 rounded-full bg-rose-poudre/10 text-gris-chaud"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
