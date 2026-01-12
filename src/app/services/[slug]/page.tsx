"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  Rocket,
  Shield,
  BarChart3,
  Star,
} from "lucide-react";
import { services } from "@/lib/services-data";
import { useEffect, useState } from "react";
import type { Service } from "@/lib/services-data";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const foundService = services.find((s) => s.id === params.slug);
    if (foundService) {
      setService(foundService);
    } else {
      router.push("/services");
    }
  }, [params.slug, router]);

  if (!service) return null;

  return (
    <>
      <section className="relative pt-[160px] md:pt-[220px] pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-[150px]`}
          />
          <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#845ef7]/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        </div>

          <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 md:mb-12"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-5 md:px-6 py-2 rounded-full bg-black/5 border border-black/10 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all group backdrop-blur-md"
                >
                  <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Services
                </Link>
              </motion.div>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 md:mb-10 shadow-2xl shadow-black/10`}
                >
                  <service.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </motion.div>
  
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black mb-6 leading-[0.9] tracking-tighter">
                  {service.title}
                </h1>
                <p className="text-lg md:text-3xl font-black text-gradient-vibrant mb-8 md:mb-10 leading-tight">
                  {service.tagline}
                </p>
                <p className="text-lg md:text-xl text-black/60 leading-tight mb-10 md:mb-12 max-w-xl font-medium">
                  {service.description}
                </p>
  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <Link href="/contact" className="btn-primary group flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-2xl shadow-black/10 w-full sm:w-auto">
                      Get Started
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                    <a href="tel:+918369697652" className="btn-secondary flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl rounded-xl md:rounded-2xl border-2 border-black/10 hover:border-black transition-all w-full sm:w-auto">
                      Contact Sales
                    </a>
                  </div>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="relative"
              >
                <div className="p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-[#fafafa] border border-black/5 relative z-10 shadow-2xl group hover:bg-white transition-all duration-700">
                  <div className="grid grid-cols-1 gap-10 md:gap-12">
                    {service.stats.map((stat, i) => (
                      <div key={stat.label} className="group/stat">
                        <p className="text-5xl md:text-7xl font-black text-black mb-2 group-hover/stat:text-gradient-vibrant transition-all tracking-tighter">
                          {stat.value}
                        </p>
                        <p className="text-[10px] md:text-xs font-black text-black/30 uppercase tracking-[0.3em]">
                          {stat.label}
                        </p>
                        {i < service.stats.length - 1 && (
                          <div className="h-px w-full bg-black/5 mt-8 md:mt-10" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none`}
                />
              </motion.div>
            </div>
          </div>
        </section>
  
        <section className="py-20 md:py-48 bg-[#fafafa] overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 mb-8 md:mb-10"
                    >
                      <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-[#ff2d2d] to-[#ff6b35]" />
                      <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#ff2d2d]">
                        Our Framework
                      </span>
                    </motion.div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-black mb-8 md:mb-12 leading-[0.9] tracking-tighter">
                      Why {service.title} <br />
                      <span className="text-black/30">Delivers Results.</span>
                    </h2>
                  
                  <p className="text-xl md:text-2xl text-black/60 leading-tight mb-12 md:mb-20 font-medium max-w-2xl">
                    {service.longContent.overview}
                  </p>
  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-24">
                    <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-black/5 shadow-xl shadow-black/[0.02] group hover:-translate-y-2 transition-all duration-500">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#ff2d2d]/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#ff2d2d] group-hover:text-white transition-colors">
                        <Target className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">The Challenge</h3>
                      <p className="text-base md:text-lg text-black/50 leading-relaxed font-medium">
                        {service.longContent.whyItMatters}
                      </p>
                    </div>
                    <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-black/5 shadow-xl shadow-black/[0.02] group hover:-translate-y-2 transition-all duration-500">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#00c9a7]/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#00c9a7] group-hover:text-white transition-colors">
                        <Zap className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Our Approach</h3>
                      <p className="text-base md:text-lg text-black/50 leading-relaxed font-medium">
                        {service.longContent.ourApproach}
                      </p>
                    </div>
                  </div>
  
                  <div className="space-y-12 md:space-y-20">
                    {service.longContent.sections.map((section, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-10 md:pl-16 group"
                      >
                        <div className="absolute left-0 top-0 w-8 md:w-12 h-[3px] bg-gradient-to-r from-[#ff2d2d] to-[#ff6b35] mt-5 md:mt-6 group-hover:w-12 md:group-hover:w-16 transition-all duration-500" />
                        <h3 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6 leading-tight">
                          {section.title}
                        </h3>
                        <p className="text-lg md:text-xl text-black/50 leading-relaxed font-medium">
                          {section.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
  
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:sticky lg:top-32"
                >
                  <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white border border-black/5 shadow-2xl">
                    <h3 className="text-xl md:text-2xl font-black text-black mb-8 md:mb-10 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#ff2d2d] animate-pulse" />
                      Core Capabilities
                    </h3>
                    <ul className="space-y-4 md:space-y-6">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-4 group"
                        >
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#00c9a7]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#00c9a7] transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#00c9a7] group-hover:text-white" />
                          </div>
                          <span className="text-black/60 font-medium group-hover:text-black transition-colors leading-tight text-base md:text-lg">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
  
                      <div className="mt-12 md:mt-16 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-black text-white relative overflow-hidden group">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 10, repeat: Infinity }}
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}
                        />
                        <div className="relative z-10">
                          <p className="text-xl md:text-2xl font-black mb-6 leading-tight">Ready to scale your business?</p>
                          <Link
                            href="/contact"
                            className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-[#ff2d2d] hover:text-white transition-all duration-500"
                          >
                            Contact Us
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                          </Link>
                        </div>
                      </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
  
        {/* High-Octane CTA */}
        <section className="py-20 md:py-48 bg-white overflow-hidden">
          <div className="container-custom">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-20 p-10 md:p-32 rounded-[2.5rem] md:rounded-[4rem] bg-black text-white relative overflow-hidden shadow-2xl"
            >
              {/* Animated BG for CTA */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.gradient} opacity-20 blur-[80px] md:blur-[120px]`}
              />
  
              <div className="relative z-10 text-center lg:text-left max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8 md:mb-10 mx-auto lg:mx-0"
                  >
                    <Rocket className="w-8 h-8 md:w-10 md:h-10 text-[#ff2d2d]" />
                  </motion.div>
                  <h2 className="text-4xl md:text-7xl font-black mb-8 md:mb-10 leading-[0.9] tracking-tighter">
                    Grow Your <br />
                    <span className="text-gradient-vibrant">Brand.</span>
                  </h2>
                  <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed">
                    Transform your digital presence with our expert {service.title} solutions.
                  </p>
                </div>
  
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
                  <Link href="/contact" className="px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white text-black text-xl md:text-2xl font-black hover:bg-[#ff2d2d] hover:text-white transition-all duration-500 shadow-2xl text-center">
                    Get Started
                  </Link>
                  <Link href="/services" className="px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl text-white text-xl md:text-2xl font-black border border-white/20 hover:bg-white/10 transition-all duration-500 text-center">
                    All Services
                  </Link>
                </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}
