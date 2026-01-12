"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Shield,
  Star,
  Quote,
  Zap,
} from "lucide-react";

const stats = [
  { value: "8+", label: "Years of Excellence", color: "#ff2d2d" },
  { value: "6500+", label: "Sellers Trained", color: "#ff6b35" },
  { value: "2500+", label: "Accounts Handled", color: "#f7c531" },
  { value: "98.4%", label: "Success Rate", color: "#845ef7" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every strategy, every campaign, every line of code is designed with one goal: measurable results that impact your bottom line.",
    gradient: "from-[#ff2d2d] to-[#ff6b35]",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We don't follow trends—we set them. Our team constantly explores new technologies and strategies to keep you ahead of the competition.",
    gradient: "from-[#ff6b35] to-[#f7c531]",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description:
      "Your success is our success. We treat every client relationship as a true partnership, invested in your long-term growth.",
    gradient: "from-[#f7c531] to-[#00c9a7]",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "No hidden fees, no unclear metrics. We believe in complete transparency in everything we do, from reporting to pricing.",
    gradient: "from-[#00c9a7] to-[#845ef7]",
  },
];

const team = [
  {
    name: "Rushabh",
    role: "Head of Strategy",
    description: "Mastermind of complex market infiltration strategies, specializing in multi-channel brand positioning and long-term equity growth. Architect of precision-engineered performance marketing frameworks.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop",
    gradient: "from-[#f7c531] to-[#00c9a7]",
    specialty: "Strategic Warfare",
  },
  {
    name: "Vishwas",
    role: "Head of Performance",
    description: "Data-driven optimization specialist focused on maximizing ROI through precision-targeted performance marketing and behavioral analytics. Specialist in high-velocity market scaling.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
    gradient: "from-[#00c9a7] to-[#845ef7]",
    specialty: "ROI Optimization",
  },
];

const milestones = [
  {
    year: "2016",
    title: "The Genesis",
    description: "Founded with a single mission: To revolutionize the digital landscape for Indian businesses.",
  },
  {
    year: "2018",
    title: "Marketplace Mastery",
    description: "Became the leading authority in Amazon India marketplace growth and seller training.",
  },
  {
    year: "2020",
    title: "Scaling New Peaks",
    description: "Successfully navigated the pandemic era, helping 1000+ brands transition to robust e-commerce models.",
  },
  {
    year: "2022",
    title: "Full-Spectrum Dominance",
    description: "Expanded into a full-service powerhouse offering precision-engineered performance marketing.",
  },
  {
    year: "2024",
    title: "Global Ambition",
    description: "Now serving 2500+ accounts with a team of elite professionals across multiple regions.",
  },
];

export default function AboutPage() {
  return (
    <>
        <section className="relative min-h-screen overflow-hidden bg-white pt-[140px] md:pt-[180px] pb-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-[1200px] h-[1200px] bg-gradient-to-br from-[#ff2d2d]/30 via-[#ff6b35]/20 to-transparent rounded-full blur-[160px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[1100px] h-[1100px] bg-gradient-to-tr from-[#845ef7]/30 via-[#00c9a7]/20 to-transparent rounded-full blur-[160px]" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white border-2 border-black mb-10 shadow-2xl hover:scale-105 transition-transform"
                >
                  <Sparkles className="w-5 h-5 text-[#ff2d2d]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black">
                    Inside ONLINENGINE
                  </span>
                </motion.div>

                  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-8 md:mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter">
                    We Are The <br />
                    <span className="text-gradient-vibrant drop-shadow-xl">Growth Engine.</span>
                  </h1>

                  <p className="text-lg md:text-2xl text-black leading-tight mb-10 md:mb-12 font-black max-w-xl">
                    Born in the heart of India's digital revolution, we've spent the last 8 years perfecting the art of <span className="text-[#ff2d2d]">market dominance</span>.
                  </p>

                  <div className="flex flex-wrap gap-4 md:gap-6">
                    <Link href="/contact" className="group flex items-center justify-center gap-4 bg-black text-white px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl rounded-2xl shadow-2xl hover:bg-[#ff2d2d] transition-all duration-500 font-black hover:scale-105 w-full sm:w-auto">
                      Join Our Mission
                      <ArrowUpRight className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-4 md:gap-6 text-black/50 bg-white/50 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-2xl border border-black/5 w-full sm:w-auto justify-center sm:justify-start">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[#f7c531] flex items-center justify-center bg-white shadow-xl flex-shrink-0">
                        <Star className="w-5 h-5 md:w-7 md:h-7 fill-[#f7c531] text-[#f7c531]" />
                      </div>
                      <span className="font-black uppercase tracking-[0.2em] text-[9px] md:text-[11px]">Rated 4.9/5 by 2500+ Brands</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white border-4 border-black hover:border-[#ff2d2d] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500 group relative overflow-hidden shadow-xl"
                      >
                        <p className="text-5xl md:text-6xl font-black text-black mb-2 md:mb-3 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                          {stat.value}
                        </p>
                        <p className="text-[10px] md:text-[11px] font-black text-black/40 uppercase tracking-[0.3em]">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Team Section - High Impact & Bright */}
          <section className="relative py-20 md:py-48 overflow-hidden bg-[#00c9a7]">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[160px]" />
              <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#845ef7] rounded-full blur-[160px]" />
            </div>

            <div className="container-custom relative z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8 md:gap-12">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8"
                  >
                    <div className="h-1 w-12 md:w-20 bg-black rounded-full" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-black">
                      The High-Command
                    </span>
                  </motion.div>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-black leading-[0.9] md:leading-[0.85] tracking-tighter">
                    Meet the <br />
                    <span className="text-white drop-shadow-2xl">Elite Force.</span>
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-black/70 max-w-sm lg:pb-6 font-black leading-tight">
                  A lethal combination of elite data-scientists and creative engineers led by Rushabh and Vishwas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden mb-6 md:mb-10 shadow-[0_40px_80px_rgba(0,0,0,0.3)] border-4 border-black bg-black">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90`} />
                      
                      <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:left-12">
                        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#ff2d2d] mb-2 md:mb-4">{member.role}</p>
                        <h3 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter mb-4 md:mb-6">{member.name}</h3>
                        <div className="inline-flex items-center gap-3 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-white text-black font-black">
                          <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ff2d2d] fill-[#ff2d2d]" />
                          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">{member.specialty}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-4 md:px-6">
                      <p className="text-black leading-relaxed text-lg md:text-xl group-hover:text-white transition-colors font-black">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 md:mt-40 p-8 md:p-20 rounded-[2.5rem] md:rounded-[3.5rem] bg-white/5 border border-white/5 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
            >
              <Quote className="absolute top-6 right-6 md:top-10 md:right-10 w-16 h-16 md:w-24 md:h-24 text-white/5 group-hover:text-[#ff2d2d]/5 transition-all duration-700" />
                <div className="max-w-4xl relative z-10">
                  <p className="text-lg md:text-3xl font-black text-white leading-tight mb-8 md:mb-12 tracking-tight italic">
                    "We didn't build ONLINENGINE to be just another agency. We built it to be the catalyst for the next generation of Indian global brands. Our success is measured solely by the empires we help build."
                  </p>
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex -space-x-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 border-[#ff2d2d] p-0.5 overflow-hidden shadow-xl relative z-20">
                        <Image
                          src={team[0].image}
                          alt="Rushabh"
                          width={64}
                          height={64}
                          className="w-full h-full rounded-[0.5rem] object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl border-2 border-[#ff6b35] p-0.5 overflow-hidden shadow-xl relative z-10">
                        <Image
                          src={team[1].image}
                          alt="Vishwas"
                          width={64}
                          height={64}
                          className="w-full h-full rounded-[0.5rem] object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-black tracking-tighter">Rushabh & Vishwas</h4>
                      <p className="text-[#ff2d2d] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] mt-0.5">Founders, ONLINENGINE</p>
                    </div>
                  </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Mission & Values with Color */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-white">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-[#ff2d2d]/10 border border-[#ff2d2d]/20 mb-8 shadow-lg"
            >
              <Rocket className="w-5 h-5 text-[#ff2d2d]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff2d2d]">Our Core Mission</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-black leading-[0.9] tracking-tighter mb-8">
              To Empower Indian Brands to <br />
              <span className="text-gradient-vibrant">Dominate the World.</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/40 leading-relaxed font-black max-w-3xl mx-auto">
              We provide the elite-level expertise, technology, and strategy that was previously only accessible to global conglomerates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-[#fafafa] border border-black/5 hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group shadow-xl"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-all`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-black mb-4 group-hover:text-gradient-vibrant transition-all tracking-tighter">
                  {value.title}
                </h3>
                <p className="text-black/40 leading-relaxed font-bold text-lg group-hover:text-black/70 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline with Impact */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-[#fafafa]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#845ef7] to-[#ff2d2d] rounded-full" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#845ef7]">
                  The Evolution
                  </span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
                8+ Years of <br />
                <span className="text-gradient-vibrant">Sustained Velocity.</span>
              </h2>
            </div>
            <p className="text-lg text-black/40 max-w-xs lg:pt-12 font-black leading-relaxed">
              From a single vision in 2016 to a digital powerhouse dominating international markets.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff2d2d] via-[#ff6b35] to-[#845ef7] opacity-20 rounded-full" />

            <div className="space-y-32">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-24" : "md:text-left md:pl-24"
                  } pl-16 md:pl-0`}>
                    <span className="text-6xl md:text-8xl font-black text-gradient-vibrant opacity-20 block mb-6 leading-none tracking-tighter">
                      {milestone.year}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-black mb-6 tracking-tighter">{milestone.title}</h3>
                    <p className="text-lg text-black/50 leading-relaxed font-bold">{milestone.description}</p>
                  </div>

                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-white border-4 border-black flex items-center justify-center z-10 shadow-xl">
                    <div className="w-3 h-3 rounded-full bg-[#ff2d2d] animate-pulse" />
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="container-custom">
          <div className="p-16 md:p-32 rounded-[3.5rem] bg-black text-white text-center relative overflow-hidden shadow-2xl">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#ff2d2d]/20 via-[#ff6b35]/10 to-transparent blur-[140px]" 
            />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-12">
                Ready to Join the <br />
                <span className="text-gradient-vibrant drop-shadow-[0_10px_30px_rgba(255,45,45,0.3)]">Success Story?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact" className="w-full sm:w-auto bg-white text-black text-2xl font-black px-12 py-6 rounded-2xl hover:bg-[#ff2d2d] hover:text-white transition-all duration-500 shadow-xl hover:scale-105">
                  Initiate Expansion
                </Link>
                <a href="tel:+918369697652" className="w-full sm:w-auto bg-white/5 backdrop-blur-3xl text-white text-2xl font-black px-12 py-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-500 hover:scale-105">
                  Call Command
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
