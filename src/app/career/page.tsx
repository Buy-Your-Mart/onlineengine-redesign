"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Heart,
  Zap,
  ArrowRight,
  Globe,
  Rocket,
  Star,
  Coffee,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Zap,
    title: "Growth Culture",
    desc: "We prioritize learning and development, providing the resources you need to advance your career.",
    color: "#ff2d2d",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    desc: "Work with a diverse group of experts who are passionate about performance marketing.",
    color: "#00c9a7",
  },
  {
    icon: Heart,
    title: "Well-being",
    desc: "We support a healthy work-life balance and offer competitive benefits to our team members.",
    color: "#845ef7",
  },
  {
    icon: Globe,
    title: "Remote Friendly",
    desc: "Flexible work arrangements that allow you to do your best work from where you're most comfortable.",
    color: "#ff6b35",
  },
];

const jobs = [
  {
    title: "Performance Marketing Manager",
    department: "Marketing",
    location: "Mumbai / Remote",
    type: "Full-time",
  },
  {
    title: "Amazon Specialist",
    department: "E-commerce",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Senior Content Strategist",
    department: "Creative",
    location: "Mumbai / Remote",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareerPage() {
  return (
    <>
      {/* Hero Section */}
        <section className="relative pt-[140px] md:pt-[220px] pb-20 md:pb-24 overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-[#f7c531]/20 via-[#00c9a7]/10 to-transparent rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#845ef7]/10 rounded-full blur-[120px]" />
          </div>
  
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/5 border border-black/10 text-[10px] font-black uppercase tracking-[0.4em] text-black mb-6 md:mb-8"
            >
              <Briefcase className="w-4 h-4 text-[#ff2d2d]" />
              Careers at ONLINENGINE
            </motion.div>
  
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black text-black mb-6 md:mb-8 leading-[0.9] tracking-tighter"
            >
              Build the Future of <br />
              <span className="text-gradient-vibrant">Digital Marketing.</span>
            </motion.h1>
  
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-black/60 max-w-2xl mx-auto font-medium leading-tight md:leading-relaxed mb-10 md:mb-12"
            >
              Join a team of creators, strategists, and engineers dedicated to delivering measurable growth for brands worldwide.
            </motion.p>
          </div>
        </section>
  
        {/* Benefits Section */}
        <section className="py-20 md:py-48 bg-[#fafafa]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-black/5 shadow-xl shadow-black/[0.02] hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-colors group-hover:text-white"
                    style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}
                  >
                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">{benefit.title}</h3>
                  <p className="text-black/50 leading-relaxed font-medium text-base md:text-lg">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="py-20 md:py-48 bg-white overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black mb-8 md:mb-10 leading-[0.9] tracking-tighter">
                  Why Work <br />
                  <span className="text-black/30">With Us?</span>
                </h2>
                <div className="space-y-8 md:space-y-12">
                  <div className="flex gap-6 md:gap-8 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#f7c531]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f7c531] transition-colors">
                      <Star className="w-6 h-6 md:w-8 md:h-8 text-[#f7c531] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-black mb-2 md:mb-4">Innovation First</h3>
                      <p className="text-lg md:text-xl text-black/50 leading-tight md:leading-relaxed font-medium">
                        We stay ahead of the curve by experimenting with new tools and strategies that deliver results.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 md:gap-8 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#00c9a7]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00c9a7] transition-colors">
                      <Coffee className="w-6 h-6 md:w-8 md:h-8 text-[#00c9a7] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-black mb-2 md:mb-4">Ownership Culture</h3>
                      <p className="text-lg md:text-xl text-black/50 leading-tight md:leading-relaxed font-medium">
                        We trust our team members to lead projects and make decisions that impact our clients' success.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] bg-[#fafafa] border border-black/5"
              >
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-black/[0.02]">
                    <p className="text-lg md:text-xl font-bold text-black mb-2">"A great environment for growth."</p>
                    <p className="text-black/40">- Team Member</p>
                  </div>
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-black/[0.02] ml-6 md:ml-12">
                    <p className="text-lg md:text-xl font-bold text-black mb-2">"Collaborative and supportive."</p>
                    <p className="text-black/40">- Team Member</p>
                  </div>
                  <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl shadow-black/[0.02]">
                    <p className="text-lg md:text-xl font-bold text-black mb-2">"Exciting projects and clients."</p>
                    <p className="text-black/40">- Team Member</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#ff2d2d]/10 to-transparent rounded-full blur-[80px]" />
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Open Positions */}
        <section id="positions" className="py-20 md:py-48 bg-[#fafafa]">
          <div className="container-custom">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black mb-6 md:mb-8 leading-[0.9] tracking-tighter">
                Open <span className="text-black/30">Positions.</span>
              </h2>
              <p className="text-lg md:text-xl text-black/60 font-medium max-w-xl mx-auto">
                Find the role that's right for you and help us scale brands to new heights.
              </p>
            </div>
  
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white border border-black/5 hover:border-black transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-black mb-4 group-hover:text-[#ff2d2d] transition-colors tracking-tight">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 md:gap-6">
                        <div className="flex items-center gap-2 text-black/40 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                          <Users className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-2 text-black/40 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                          <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-black/40 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                          <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-black text-white font-black hover:bg-[#ff2d2d] transition-all duration-500 self-start md:self-center w-full md:w-auto"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

          <div className="mt-24 text-center">
            <p className="text-xl text-black/60 font-medium mb-8">
              Don't see a role that fits? We're always looking for talent.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-2xl font-black text-black border-b-4 border-black hover:text-[#ff2d2d] hover:border-[#ff2d2d] transition-all pb-2"
            >
              Send an Open Application
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-center gap-20 p-16 md:p-32 rounded-[4rem] bg-black text-white relative overflow-hidden shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#00c9a7]/30 to-transparent opacity-30 blur-[120px]"
            />

            <div className="relative z-10 text-center lg:text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-10 mx-auto lg:mx-0"
              >
                <Rocket className="w-10 h-10 text-[#f7c531]" />
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                Start Your <br />
                <span className="text-gradient-vibrant">Journey.</span>
              </h2>
              <p className="text-white/50 text-xl font-medium leading-relaxed">
                Be part of a team that's redefining digital growth for brands around the world.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="px-12 py-6 rounded-2xl bg-white text-black text-2xl font-black hover:bg-[#ff2d2d] hover:text-white transition-all duration-500 shadow-2xl">
                Join Us
              </Link>
              <Link href="/about" className="px-12 py-6 rounded-2xl bg-white/5 backdrop-blur-xl text-white text-2xl font-black border border-white/20 hover:bg-white/10 transition-all duration-500">
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
