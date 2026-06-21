import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-noir-elegant text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          <div>
            <p className="font-display text-2xl mb-3">
              Maison <span className="text-rose-poudre">Lou</span>
            </p>
            <p className="text-sm text-ivory/60 leading-relaxed">
              Esthétique &amp; onglerie à domicile. L&apos;expertise esthétique
              au service de votre bien-être, directement chez vous.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="space-y-2 text-sm text-ivory/70">
              <li><a href="#a-propos" className="hover:text-rose-poudre">À propos</a></li>
              <li><a href="#prestations" className="hover:text-rose-poudre">Prestations</a></li>
              <li><a href="#galerie" className="hover:text-rose-poudre">Galerie</a></li>
              <li><a href="#avis" className="hover:text-rose-poudre">Avis clientes</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-dore-subtil" /> 06 65 56 20 07
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-dore-subtil" /> loulounejado@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-dore-subtil" /> Déplacement à domicile
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Suivez-moi</p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-ivory/20 rounded-full px-4 py-2 hover:border-rose-poudre hover:text-rose-poudre transition-colors"
            >
              <Instagram size={15} /> @maisonlou
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Maison Lou. Tous droits réservés.</p>
          <p>Esthétique &amp; Onglerie à domicile</p>
        </div>
      </div>
    </footer>
  );
}
