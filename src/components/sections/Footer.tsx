"use client";

import { Mail, MapPin, Phone, Eye, EyeOff } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { useLayananToggle } from "@/context/LayananToggleContext";

export default function Footer() {
  const { showLayanan, toggleLayanan } = useLayananToggle();

  return (
    <footer className="bg-primary-dark text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold text-cream-50 mb-3">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm leading-relaxed text-cream-300">
              Membantu Anda memahami diri untuk masa depan yang lebih terarah.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-white transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-heading text-sm font-bold text-cream-50 uppercase tracking-wider mb-4">
              Menu
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-cream-300 hover:text-white transition-colors"
              >
                Beranda
              </a>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Layanan Tambahan Toggle */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <button
                onClick={toggleLayanan}
                className="group flex items-center gap-3 text-sm transition-all duration-300"
                title={showLayanan ? "Sembunyikan Layanan Tambahan" : "Tampilkan Layanan Tambahan"}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  showLayanan 
                    ? 'bg-secondary/20 border border-secondary/30 text-secondary-light' 
                    : 'bg-white/5 border border-white/10 text-cream-300'
                }`}>
                  {showLayanan ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </div>

              </button>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-heading text-sm font-bold text-cream-50 uppercase tracking-wider mb-4">
              Kontak
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-sm text-cream-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                className="flex items-center gap-3 text-sm text-cream-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {SITE_CONFIG.whatsappDisplay}
              </a>
              <div className="flex items-center gap-3 text-sm text-cream-300">
                <MapPin className="w-4 h-4 shrink-0" />
                {SITE_CONFIG.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300/60">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
