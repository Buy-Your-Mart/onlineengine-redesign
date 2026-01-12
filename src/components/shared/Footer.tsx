"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Zap,
} from "lucide-react";

const services = [
  { name: "Web Development", slug: "web-development" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Amazon Marketing", slug: "amazon-marketing" },
  { name: "Content Strategy", slug: "content-strategy" },
  { name: "Social Media", slug: "social-media" },
  { name: "Performance Ads", slug: "performance-ads" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/onlinengine/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/onlinengine", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden border-t border-black/5">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#ff2d2d]/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#845ef7]/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10">
        <div className="container-custom py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center mb-16 md:mb-24">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 md:px-6 py-2 rounded-full bg-black/5 border border-black/10 mb-6 md:mb-8 backdrop-blur-md"
              >
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#ff2d2d]" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black/70">
                  Ready to Grow?
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-6xl md:text-7xl font-black text-black mb-8 md:mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter"
              >
                Let&apos;s Scale Your <br />
                <span className="text-gradient-vibrant">Digital Presence.</span>
              </motion.h2>
              <p className="text-lg md:text-2xl text-black/60 max-w-xl font-medium leading-tight">
                Join 6500+ brands that chose to scale with precision. Your growth starts with one conversation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:justify-end">
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center gap-3 justify-center px-8 md:px-12 py-4 md:py-6 text-xl md:text-2xl shadow-2xl shadow-[#ff2d2d]/20"
              >
                Get Started
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
              <a 
                href="tel:+918369697652" 
                className="btn-secondary inline-flex items-center gap-3 justify-center px-8 md:px-12 py-4 md:py-6 text-xl md:text-2xl border-2 border-black/10 hover:border-black transition-all"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                Call Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-4 mb-10 group">
                <div className="w-14 h-14 flex items-center justify-center bg-black rounded-2xl group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 40 40" className="w-full h-full text-white p-2" fill="none">
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
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tighter text-black leading-none uppercase">
                    ONLINE<span className="text-gradient-vibrant">NGINE</span>
                  </span>
                  <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em] mt-1">
                    High Performance Agency
                  </span>
                </div>
              </Link>
              <p className="text-black/50 mb-10 leading-relaxed font-medium text-lg">
                The engine behind India's High-Growth brands. We bridge the gap
                between imagination and digital results.
              </p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center text-black/40 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg shadow-black/[0.02]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-black font-black text-xl mb-10 uppercase tracking-widest">Our Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-black/50 hover:text-black transition-all flex items-center gap-3 group font-bold"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ff2d2d] scale-0 group-hover:scale-100 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-black font-black text-xl mb-10 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-black/50 hover:text-black transition-all flex items-center gap-3 group font-bold"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ff6b35] scale-0 group-hover:scale-100 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-black font-black text-xl mb-10 uppercase tracking-widest">Contact Us</h4>
              <ul className="space-y-6">
                <li>
                  <a
                    href="tel:+918369697652"
                    className="text-black/60 hover:text-black transition-all flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#ff2d2d]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff2d2d] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Phone</p>
                      <p className="font-bold text-black">+91 83696 97652</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@onlinengine.in"
                    className="text-black/60 hover:text-black transition-all flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6b35] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Email</p>
                      <p className="font-bold text-black text-sm md:text-base">hello@onlinengine.in</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#845ef7]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#845ef7] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Location</p>
                    <p className="font-bold text-black">Mumbai, MH, India</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-custom py-10 border-t border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-black/30 text-xs font-black uppercase tracking-widest">
              © {new Date().getFullYear()} ONLINENGINE. Performance Driven Marketing.
            </p>
            <div className="flex gap-10">
              <Link href="#" className="text-black/30 hover:text-black text-xs font-black uppercase tracking-widest transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-black/30 hover:text-black text-xs font-black uppercase tracking-widest transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
