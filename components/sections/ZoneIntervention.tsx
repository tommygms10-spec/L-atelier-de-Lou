"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Configuration simple : modifiez ces valeurs pour adapter la zone de déplacement.
const ZONE_CONFIG = {
  centerCity: "Tours",
  radiusKm: 20,
  cities: ["Tours", "Joué-lès-Tours", "Saint-Cyr-sur-Loire", "Chambray-lès-Tours", "Saint-Avertin", "La Riche"],
};

export default function ZoneIntervention() {
  return (
    <section className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4">Zone d&apos;intervention</p>
          <h2 className="font-display text-4xl sm:text-5xl text-noir-elegant mb-6 text-balance">
            Je me déplace directement chez vous.
          </h2>
          <p className="text-gris-chaud leading-relaxed mb-8 max-w-md">
            Maison Lou intervient dans un rayon de {ZONE_CONFIG.radiusKm} km
            autour de {ZONE_CONFIG.centerCity}. Aucun frais caché, ponctualité
            garantie : je m&apos;adapte à votre emploi du temps pour vous
            offrir une parenthèse beauté sans contrainte.
          </p>
          <div className="flex flex-wrap gap-3">
            {ZONE_CONFIG.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-poudre/10 text-sm text-noir-elegant"
              >
                <MapPin size={13} className="text-rose-poudre" />
                {city}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-square rounded-[2rem] overflow-hidden shadow-premium bg-gradient-to-br from-nude to-rose-poudre/40 flex items-center justify-center"
        >
          {/* Carte schématique — remplacer par une intégration Google Maps en production */}
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <radialGradient id="zoneGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D8A2A8" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#D8A2A8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#D8A2A8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="#F8F5F2" />
            {[...Array(8)].map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="#C8B8A6" strokeOpacity="0.2" />
            ))}
            {[...Array(8)].map((_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" stroke="#C8B8A6" strokeOpacity="0.2" />
            ))}
            <circle cx="200" cy="200" r="160" fill="url(#zoneGradient)" />
            <circle cx="200" cy="200" r="160" fill="none" stroke="#D8A2A8" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="200" cy="200" r="8" fill="#2A2A2A" />
            <circle cx="200" cy="200" r="14" fill="none" stroke="#D4B483" strokeWidth="1.5" />
            <text x="200" y="232" textAnchor="middle" fontSize="13" fill="#2A2A2A" fontFamily="Poppins, sans-serif">
              {ZONE_CONFIG.centerCity}
            </text>
          </svg>
          <div className="absolute bottom-6 left-6 glass-card rounded-xl px-4 py-2">
            <p className="text-xs text-noir-elegant font-semibold">Rayon de {ZONE_CONFIG.radiusKm} km</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
