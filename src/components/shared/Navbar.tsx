"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight, Sparkles, Zap } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4 md:py-8">
      <div className="container-custom">
            <nav
              className={`flex items-center justify-between px-6 md:px-10 py-4 rounded-[2.5rem] transition-all duration-700 ${
                scrolled
                  ? "bg-white/95 backdrop-blur-3xl border-2 border-black/5 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)]"
                  : "bg-white/60 backdrop-blur-xl border-2 border-white/40 shadow-2xl"
              }`}
            >
              <Link href="/" className="flex items-center gap-4 relative z-[130] group">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-[#ff2d2d] via-[#ff6b35] to-[#f7c531] rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-[#ff2d2d]/40 p-0.5">
                  <div className="w-full h-full bg-black rounded-[0.9rem] flex items-center justify-center">
                    <svg
                      viewBox="0 0 40 40"
                      className="w-full h-full text-white transition-all duration-500 group-hover:rotate-[360deg] p-2.5"
                      fill="none"
                    >
                      <path d="M12 28V12L28 20L12 28Z" fill="currentColor" />
                      <path
                        d="M22 12L32 20L22 28"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-60"
                      />
                    </svg>
                  </div>
                </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-black leading-none uppercase">
                  ONLINE<span className="text-gradient-vibrant">NGINE</span>
                </span>
                <span className="text-[9px] md:text-[11px] font-black text-black/40 uppercase tracking-[0.4em] mt-1">
                  High Performance Agency
                </span>
              </div>
            </Link>

              <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-6 py-2.5 text-sm font-black text-black/60 hover:text-black transition-all rounded-full hover:bg-black/5 relative group uppercase tracking-widest"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-[#ff2d2d] via-[#ff6b35] to-[#f7c531] group-hover:w-1/2 transition-all duration-500 rounded-full" />
                  </Link>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-8">
                <a
                  href="tel:+918369697652"
                  className="flex items-center gap-4 text-sm font-black text-black/50 hover:text-black transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#ff2d2d] group-hover:to-[#ff6b35] group-hover:text-white transition-all shadow-lg group-hover:rotate-12">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="tracking-widest">+91 83696 97652</span>
                </a>
                  <Link
                    href="/contact"
                    className="h-16 px-12 rounded-[2rem] bg-black text-white text-sm font-black flex items-center gap-4 hover:bg-[#ff2d2d] transition-all shadow-[0_20px_40px_rgba(255,45,45,0.2)] hover:shadow-[#ff2d2d]/40 uppercase tracking-widest group border-2 border-transparent hover:scale-105"
                  >
                    Contact Us
                    <Zap className="w-5 h-5 fill-white group-hover:animate-bounce" />
                  </Link>
              </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-16 h-16 flex items-center justify-center rounded-[1.5rem] transition-all active:scale-90 bg-black text-white shadow-2xl relative overflow-hidden group"
              aria-label="Toggle Menu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d2d] to-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity" />
              {isOpen ? <X className="w-8 h-8 relative z-10" /> : <Menu className="w-8 h-8 relative z-10" />}
            </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="lg:hidden fixed inset-0 top-0 bg-white z-[90] pt-40 px-6"
            >
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff2d2d]/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#845ef7]/30 rounded-full blur-[100px]" />
              </div>

              <div className="container-custom relative z-10 flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-4xl sm:text-5xl md:text-6xl font-black text-black hover:text-gradient-vibrant transition-all tracking-tighter"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-black/5"
                  >
                    <a
                      href="tel:+918369697652"
                      className="flex items-center gap-4 text-xl md:text-2xl font-black text-black/40 mb-8 md:mb-10 group"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <Phone className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <span className="text-lg md:text-2xl">+91 83696 97652</span>
                    </a>
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="w-full h-16 md:h-20 rounded-2xl md:rounded-3xl bg-black text-white text-lg md:text-2xl font-black flex items-center justify-center gap-4 shadow-2xl"
                      >
                        Contact Us
                        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                      </Link>
                </motion.div>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
