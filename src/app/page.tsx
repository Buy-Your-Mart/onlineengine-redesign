"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Monitor,
  Target,
  ShoppingCart,
  Megaphone,
  TrendingUp,
  Users,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe,
  Rocket,
  ArrowRight,
  Eye,
  Layers,
  Cpu,
} from "lucide-react";

const stats = [
  { value: "8+", label: "Years Experience", color: "#ff2d2d", gradient: "from-[#ff2d2d] to-[#ff6b35]" },
  { value: "6500+", label: "Sellers Trained", color: "#ff6b35", gradient: "from-[#ff6b35] to-[#f7c531]" },
  { value: "2500+", label: "Accounts Handled", color: "#845ef7", gradient: "from-[#845ef7] to-[#00c9a7]" },
];

const services = [
  {
    id: "web-development",
    icon: Monitor,
    title: "Web Development",
    desc: "High-performance, custom-built websites that turn visitors into loyal customers with seamless UX/UI.",
    gradient: "from-[#ff2d2d] via-[#ff6b35] to-[#f7c531]",
    shadow: "shadow-[#ff2d2d]/20",
    color: "#ff2d2d",
  },
  {
    id: "digital-marketing",
    icon: Target,
    title: "Digital Marketing",
    desc: "Data-driven growth strategies across all digital channels to amplify your brand's presence and impact.",
    gradient: "from-[#ff6b35] via-[#f7c531] to-[#00c9a7]",
    shadow: "shadow-[#ff6b35]/20",
    color: "#ff6b35",
  },
  {
    id: "amazon-marketing",
    icon: ShoppingCart,
    title: "Amazon Marketing",
    desc: "End-to-end Amazon growth solutions from listing optimization to PPC management and brand registry.",
    gradient: "from-[#f7c531] via-[#00c9a7] to-[#845ef7]",
    shadow: "shadow-[#f7c531]/20",
    color: "#f7c531",
  },
  {
    id: "content-strategy",
    icon: Megaphone,
    title: "Content Strategy",
    desc: "Compelling narratives that resonate with your audience and drive meaningful engagement.",
    gradient: "from-[#00c9a7] via-[#845ef7] to-[#ff2d2d]",
    shadow: "shadow-[#00c9a7]/20",
    color: "#00c9a7",
  },
  {
    id: "performance-ads",
    icon: TrendingUp,
    title: "Performance Ads",
    desc: "ROI-focused advertising campaigns across Google, Meta, and emerging platforms.",
    gradient: "from-[#845ef7] via-[#ff2d2d] to-[#ff6b35]",
    shadow: "shadow-[#845ef7]/20",
    color: "#845ef7",
  },
  {
    id: "social-media",
    icon: Users,
    title: "Social Media",
    desc: "Build authentic communities and drive viral growth through strategic social presence.",
    gradient: "from-[#ff2d2d] via-[#845ef7] to-[#00c9a7]",
    shadow: "shadow-[#ff2d2d]/20",
    color: "#ff2d2d",
  },
];

const team = [
  {
    name: "Rushabh",
    role: "Head of Strategy",
    description: "Mastermind of complex market infiltration strategies, specializing in multi-channel brand positioning.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop",
    gradient: "from-[#ff2d2d] to-[#ff6b35]",
  },
  {
    name: "Vishwas",
    role: "Head of Performance",
    description: "Data-driven optimization specialist focused on maximizing ROI through precision-targeted performance marketing.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
    gradient: "from-[#845ef7] to-[#00c9a7]",
  },
];

const logos = ["ECONOMIC TIMES", "YOURSTORY", "BUSINESS STANDARD", "INC42", "MINT"];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section - Maximum Vibrancy */}
      <section
        ref={heroRef}
        className="relative min-h-[95vh] flex items-center overflow-hidden bg-white pt-[150px] pb-20"
      >
        <div className="absolute inset-0 pointer-events-none">
          {/* Extremely Bright Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 200, 0],
              y: [0, -100, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] right-[-10%] w-[1400px] h-[1400px] bg-gradient-to-br from-[#ff2d2d]/40 via-[#ff6b35]/30 to-transparent rounded-full blur-[180px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              x: [0, -200, 0],
              y: [0, 200, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-30%] left-[-15%] w-[1300px] h-[1300px] bg-gradient-to-tr from-[#845ef7]/40 via-[#00c9a7]/30 to-transparent rounded-full blur-[180px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <motion.div style={{ y, opacity }} className="container-custom relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white border border-black/5 mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform cursor-default"
            >
              <span className="flex h-3 w-3 rounded-full bg-[#ff2d2d] animate-ping" />
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-black">
                Performance Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-black mb-8 md:mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter"
            >
              Scale Your <br />
              <span className="text-gradient-vibrant drop-shadow-[0_20px_50px_rgba(255,45,45,0.5)]">Digital Growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black/80 max-w-[900px] mx-auto leading-tight font-black mb-12 md:mb-16"
            >
              Strategic performance marketing and high-precision growth systems for brands that demand measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-12 md:mb-20 w-full sm:w-auto"
            >
              <Link 
                href="/contact" 
                className="group flex items-center justify-center gap-4 text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-[2rem] bg-black text-white hover:bg-[#ff2d2d] transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.3)] hover:scale-105 font-black"
              >
                Get Started
                <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="group flex items-center justify-center gap-4 text-lg md:text-xl px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-[2rem] border-4 border-black text-black hover:bg-black hover:text-white transition-all duration-500 bg-white shadow-xl font-black hover:scale-105"
              >
                Our Services
                <Sparkles className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-45 transition-transform text-[#ff6b35]" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Results Section - Very Colorful */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-[#ff2d2d] group">
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(to bottom right, #ff2d2d, #ff6b35)",
              "linear-gradient(to bottom right, #ff6b35, #ff2d2d)",
              "linear-gradient(to bottom right, #ff2d2d, #ff2d2d)"
            ] 
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-50" 
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -1000],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute text-white/10 font-black text-9xl select-none"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-10%",
              }}
            >
              {Math.random() > 0.5 ? "ROI" : "GROWTH"}
            </motion.div>
          ))}
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center md:text-left text-white group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: [-1, 1, -1] }}
                  className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-4 md:mb-6 drop-shadow-2xl"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Dynamic & Colorful Background */}
      <section className="relative py-20 md:py-48 overflow-hidden bg-[#f7c531]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/30 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#ff6b35]/30 rounded-full blur-[160px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 px-6 md:px-8 py-2 md:py-3 rounded-full bg-black text-white mb-8 md:mb-10 shadow-2xl"
            >
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-[#f7c531] fill-[#f7c531]" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">Service Excellence</span>
            </motion.div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 md:mb-10">
              Strategic Services. <br />
              <span className="drop-shadow-lg">Proven Execution.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={`/services/${service.id}`}
                  className={`block h-full relative bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border-4 border-black hover:border-[#ff2d2d] transition-all duration-500 hover:-translate-y-5 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] shadow-[0_20px_40px_rgba(0,0,0,0.1)]`}
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 md:mb-10 shadow-xl group-hover:scale-110 group-hover:rotate-[10deg] transition-all`}>
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6 group-hover:text-[#ff2d2d] transition-all tracking-tighter leading-none">
                    {service.title}
                  </h3>
                  <p className="text-black/60 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 group-hover:text-black transition-colors font-bold">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#ff2d2d]">
                    Explore Service <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-3 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Very Colorful Logo Bar */}
      <section className="py-16 md:py-24 bg-white border-y-8 border-black">
        <div className="container-custom">
          <p className="text-center text-[10px] font-black text-black/20 uppercase tracking-[0.6em] mb-8 md:mb-12">Global Authority</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-30 hover:opacity-100 transition-opacity">
            {logos.map((logo) => (
              <span key={logo} className="font-black text-lg md:text-2xl text-black hover:text-[#ff2d2d] transition-all cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Extreme Vibrancy */}
      <section className="relative py-20 md:py-40 bg-[#845ef7] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#ff2d2d]/40 via-[#ff6b35]/20 to-transparent rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#00c9a7]/40 via-[#f7c531]/20 to-transparent rounded-full blur-[140px]"
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 md:mb-12">
            Ready to <br />
            <span className="drop-shadow-[0_15px_40px_rgba(255,255,255,0.3)]">Scale Together?</span>
          </h2>
          <p className="text-lg md:text-3xl text-white/80 max-w-2xl mx-auto font-black mb-12 md:mb-16 leading-tight">
            Partner with us to transform your digital presence and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#845ef7] text-xl md:text-2xl font-black px-10 md:px-12 py-5 md:py-6 rounded-2xl hover:bg-black hover:text-white transition-all duration-500 shadow-2xl hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="tel:+918369697652"
              className="bg-black/20 backdrop-blur-xl text-white border-2 border-white/20 text-xl md:text-2xl font-black px-10 md:px-12 py-5 md:py-6 rounded-2xl hover:bg-white hover:text-black transition-all duration-500 hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
