"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const instagramUrl = SITE_CONFIG?.social?.instagram || "https://instagram.com/holisticpsyeducare";
  const instagramUsername = (() => {
    try {
      const parsed = new URL(instagramUrl);
      const username = parsed.pathname.replace(/^\/+|\/+$/g, "").split("/")[0];
      return username ? `@${username}` : "Instagram";
    } catch {
      return "Instagram";
    }
  })();

  const IconWhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );

  const contactOptions = [
    {
      id: "whatsapp",
      value: SITE_CONFIG.whatsappDisplay,
      icon: IconWhatsApp,
      colorClass: "bg-[#25D366]/10 text-[#25D366] ring-[#25D366]/30",
      hoverBg: "hover:bg-[#25D366]/10",
      href: `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        SITE_CONFIG.whatsappMessage
      )}`,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: "instagram",
      value: instagramUsername,
      icon: IconInstagram,
      colorClass: "bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 text-[#E1306C] ring-[#E1306C]/30",
      hoverBg: "hover:bg-white/5",
      href: instagramUrl,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: "email",
      value: SITE_CONFIG.email,
      icon: Mail,
      colorClass: "bg-blue-500/10 text-blue-400 ring-blue-500/30",
      hoverBg: "hover:bg-blue-500/10",
      href: `mailto:${SITE_CONFIG.email}`,
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!contactRef.current) return;
      if (!contactRef.current.contains(event.target as Node)) {
        setContactOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactOpen(false);
        setMobileContactOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 left-0 right-0 bg-primary/95 backdrop-blur-md shadow-lg py-0"
          : "top-2 lg:top-4 left-2 lg:left-4 right-2 lg:right-4 py-2 bg-transparent rounded-[2rem]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/images/logo/nvbar.png"
                alt="Holistic Psychology and Educare logo"
                fill
                sizes="(min-width: 768px) 112px, 96px"
                quality={100}
                unoptimized={true}
                className="object-contain"
              />
            </div>
            <span className="font-heading text-base md:text-lg font-bold text-cream-50">
              {SITE_CONFIG.name}
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-cream-200 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-secondary-light rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.a>
              ))}
            <div className="ml-4 relative" ref={contactRef}>
              <button
                onClick={() => setContactOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer bg-primary text-cream-50 hover:bg-primary-light shadow-sm"
                aria-haspopup="menu"
                aria-expanded={contactOpen}
                aria-controls="contact-dropdown"
              >
                Hubungi Kami
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    contactOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {contactOpen && (
                  <motion.div
                    id="contact-dropdown"
                    role="menu"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl border border-white/10 bg-primary/60 backdrop-blur-xl p-2 shadow-xl"
                  >
                    {contactOptions.map((option) => (
                      <a
                        key={option.id}
                        href={option.href}
                        target={option.target}
                        rel={option.rel}
                        role="menuitem"
                        onClick={() => setContactOpen(false)}
                        className={`group flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-cream-100 transition-all duration-300 ${option.hoverBg}`}
                      >
                        <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ring-1 shadow-sm transition-transform duration-300 group-hover:scale-110 ${option.colorClass}`}>
                          <option.icon className="w-5 h-5" />
                        </div>
                        <span className="truncate group-hover:text-white transition-colors">{option.value}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-cream-100 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10"
            id="mobile-navigation"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    setMobileContactOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-cream-100 hover:text-white hover:bg-white/5 py-3 px-4 text-sm font-medium rounded-lg transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <button
                onClick={() => setMobileContactOpen((prev) => !prev)}
                className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer bg-primary text-cream-50 hover:bg-primary-light shadow-sm"
                aria-haspopup="menu"
                aria-expanded={mobileContactOpen}
                aria-controls="mobile-contact-dropdown"
              >
                Hubungi Kami
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileContactOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileContactOpen && (
                  <motion.div
                    id="mobile-contact-dropdown"
                    role="menu"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden mt-2 rounded-2xl border border-white/10 bg-white/5 p-2"
                  >
                    {contactOptions.map((option) => (
                      <a
                        key={`mobile-${option.id}`}
                        href={option.href}
                        target={option.target}
                        rel={option.rel}
                        role="menuitem"
                        onClick={() => {
                          setMobileContactOpen(false);
                          setOpen(false);
                        }}
                        className={`group flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-cream-100 transition-all duration-300 ${option.hoverBg}`}
                      >
                        <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ring-1 shadow-sm transition-transform duration-300 group-hover:scale-110 ${option.colorClass}`}>
                          <option.icon className="w-5 h-5" />
                        </div>
                        <span className="truncate group-hover:text-white transition-colors">{option.value}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
