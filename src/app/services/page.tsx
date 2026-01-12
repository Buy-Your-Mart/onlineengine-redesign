"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Monitor,
  Target,
  ShoppingCart,
  Megaphone,
  TrendingUp,
  Users,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Search,
  PenTool,
  Globe,
  Smartphone,
  LineChart,
  ShieldCheck,
  Zap,
  ArrowRight,
  Rocket,
} from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Monitor,
    title: "Web Development",
    tagline: "Build Digital Experiences That Convert",
    gradient: "from-[#ff2d2d] via-[#ff6b35] to-[#f7c531]",
    description:
      "High-performance, custom-built websites that turn visitors into loyal customers with seamless UX/UI. We craft digital experiences that not only look stunning but drive real business results.",
    features: [
      "Custom Website Design & Development",
      "E-commerce Solutions (Shopify, WooCommerce)",
      "Progressive Web Apps (PWA)",
      "Landing Page Optimization",
      "Website Speed Optimization",
      "Responsive Mobile-First Design",
      "CMS Integration & Management",
      "Website Maintenance & Support",
    ],
    stats: [
      { value: "500+", label: "Websites Delivered" },
      { value: "3x", label: "Avg. Conversion Lift" },
      { value: "99.9%", label: "Uptime Guarantee" },
    ],
  },
  {
    id: "digital-marketing",
    icon: Target,
    title: "Digital Marketing",
    tagline: "Data-Driven Strategies for Explosive Growth",
    gradient: "from-[#ff6b35] via-[#f7c531] to-[#00c9a7]",
    description:
      "Data-driven growth strategies across all digital channels to amplify your brand's presence and impact. We combine creativity with analytics to deliver campaigns that outperform.",
    features: [
      "Comprehensive Digital Strategy",
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Email Marketing Automation",
      "Content Marketing",
      "Conversion Rate Optimization",
      "Analytics & Reporting",
    ],
    stats: [
      { value: "10M+", label: "Ad Spend Managed" },
      { value: "4.2x", label: "Avg. ROAS" },
      { value: "85%", label: "Client Retention" },
    ],
  },
  {
    id: "amazon-marketing",
    icon: ShoppingCart,
    title: "Amazon Marketing",
    tagline: "Dominate the World's Largest Marketplace",
    gradient: "from-[#f7c531] via-[#00c9a7] to-[#845ef7]",
    description:
      "End-to-end Amazon growth solutions from listing optimization to PPC management and brand registry. We help you become a category leader on Amazon India.",
    features: [
      "Amazon Account Setup & Management",
      "Product Listing Optimization",
      "Amazon PPC Campaign Management",
      "A+ Content & Brand Storefront",
      "Amazon Brand Registry",
      "Inventory Management",
      "Review & Rating Strategy",
      "Competitor Analysis & Research",
    ],
    stats: [
      { value: "2500+", label: "Accounts Managed" },
      { value: "150%", label: "Avg. Sales Growth" },
      { value: "6500+", label: "Sellers Trained" },
    ],
  },
  {
    id: "content-strategy",
    icon: Megaphone,
    title: "Content Strategy",
    tagline: "Stories That Resonate and Convert",
    gradient: "from-[#00c9a7] via-[#845ef7] to-[#ff2d2d]",
    description:
      "Compelling narratives that resonate with your audience and drive meaningful engagement. We create content that builds brand authority and nurtures customer relationships.",
    features: [
      "Content Strategy Development",
      "Blog Writing & Management",
      "Video Content Production",
      "Infographic Design",
      "Case Study Development",
      "Whitepaper & E-book Creation",
      "Social Media Content",
      "Content Distribution Strategy",
    ],
    stats: [
      { value: "1000+", label: "Content Pieces" },
      { value: "5x", label: "Engagement Boost" },
      { value: "60%", label: "Organic Traffic Growth" },
    ],
  },
  {
    id: "performance-ads",
    icon: TrendingUp,
    title: "Performance Ads",
    tagline: "ROI-Focused Advertising Excellence",
    gradient: "from-[#845ef7] via-[#ff2d2d] to-[#ff6b35]",
    description:
      "ROI-focused advertising campaigns across Google, Meta, and emerging platforms. Every rupee spent is tracked, optimized, and accountable for results.",
    features: [
      "Google Ads Management",
      "Meta (Facebook & Instagram) Ads",
      "LinkedIn Advertising",
      "YouTube Advertising",
      "Programmatic Display Ads",
      "Retargeting Campaigns",
      "A/B Testing & Optimization",
      "Conversion Tracking Setup",
    ],
    stats: [
      { value: "50Cr+", label: "Ad Spend Managed" },
      { value: "3.8x", label: "Avg. ROAS" },
      { value: "40%", label: "Cost Reduction" },
    ],
  },
  {
    id: "social-media",
    icon: Users,
    title: "Social Media Management",
    tagline: "Build Communities, Drive Engagement",
    gradient: "from-[#ff2d2d] via-[#845ef7] to-[#00c9a7]",
    description:
      "Build authentic communities and drive viral growth through strategic social presence. We help you become the voice of your industry on social platforms.",
    features: [
      "Social Media Strategy",
      "Community Management",
      "Influencer Marketing",
      "Social Media Advertising",
      "Content Calendar Management",
      "Crisis Management",
      "Social Listening & Monitoring",
      "Performance Analytics",
    ],
    stats: [
      { value: "100+", label: "Brands Managed" },
      { value: "10M+", label: "Followers Grown" },
      { value: "200%", label: "Engagement Increase" },
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Deep-market infiltration to identify growth opportunities.",
    gradient: "from-[#ff2d2d] to-[#ff6b35]",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Engineering custom growth frameworks tailored for dominance.",
    gradient: "from-[#ff6b35] to-[#f7c531]",
  },
  {
    step: "03",
    title: "Execution",
    desc: "Deploying surgical campaigns across the digital landscape.",
    gradient: "from-[#f7c531] to-[#00c9a7]",
  },
  {
    step: "04",
    title: "Optimization",
    desc: "24/7 data-driven tuning for peak performance metrics.",
    gradient: "from-[#00c9a7] to-[#845ef7]",
  },
  {
    step: "05",
    title: "Scale",
    desc: "Aggressive expansion to dominate and lead your market.",
    gradient: "from-[#845ef7] to-[#ff2d2d]",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-white pt-[160px] md:pt-[220px] pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-[#ff2d2d]/15 via-[#ff6b35]/10 to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-[#845ef7]/15 via-[#00c9a7]/10 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/5 border border-black/10 mb-10 backdrop-blur-md"
            >
              <Sparkles className="w-5 h-5 text-[#ff2d2d]" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-black/70">
                Our Digital Arsenal
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-10 leading-[0.9] tracking-tighter"
            >
              Tools for <br />
              <span className="text-gradient-vibrant">Market Dominance.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-black/50 max-w-2xl leading-tight font-medium"
            >
              We provide the high-octane engineering required to transform ambitious brands into category-leading empires.
            </motion.p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`relative py-32 md:py-48 overflow-hidden ${
            index % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
          }`}
        >
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div
                  className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-10 shadow-2xl shadow-black/10`}
                >
                  <service.icon className="w-12 h-12 text-white" />
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-none tracking-tighter">
                  {service.title}
                </h2>
                <p className="text-2xl font-black text-gradient-vibrant mb-8">{service.tagline}</p>
                <p className="text-xl text-black/50 leading-relaxed mb-10 font-medium">
                  {service.description}
                </p>

                <div className="grid grid-cols-3 gap-6 mb-12">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className="p-6 rounded-3xl bg-white border border-black/5 shadow-xl shadow-black/[0.02]">
                      <p className="text-3xl font-black text-black mb-1 tracking-tighter">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-black/30 font-black uppercase tracking-widest">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href={`/services/${service.id}`}
                    className="btn-primary flex items-center gap-3 px-8 py-4 text-lg shadow-xl shadow-black/5"
                  >
                    View Ops Detail
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary flex items-center gap-3 px-8 py-4 text-lg border-2 border-black/10"
                  >
                    Request Brief
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="p-12 md:p-16 rounded-[4rem] bg-white border border-black/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff2d2d]/10 to-transparent rounded-full blur-3xl" />
                  
                  <h3 className="text-2xl font-black text-black mb-10 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#ff2d2d] animate-pulse" />
                    Operational Capabilities
                  </h3>
                  <ul className="space-y-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#00c9a7]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[#00c9a7] transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-[#00c9a7] group-hover/item:text-white" />
                        </div>
                        <span className="text-black/60 font-medium group-hover/item:text-black transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section with High-Impact Gradient */}
      <section className="relative py-32 md:py-48 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff2d2d]/10 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#845ef7]/10 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Rocket className="w-5 h-5 text-white" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-white/70">The Protocol</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
              A Methodology for <br />
              <span className="text-gradient-vibrant">Sustained Dominance.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="space-y-32">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-24" : "md:text-left md:pl-24"
                  } pl-24 md:pl-0`}>
                    <span className="text-8xl md:text-9xl font-black text-white/5 block mb-6 group-hover:text-white/10 transition-colors">
                      {item.step}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black mb-6">{item.title}</h3>
                    <p className="text-xl text-white/40 leading-relaxed font-medium">{item.desc}</p>
                  </div>

                  {/* Marker */}
                  <div className="absolute left-12 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-white/10 flex items-center justify-center z-20">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.gradient} animate-pulse`} />
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-48 overflow-hidden bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-20 md:p-32 rounded-[4rem] bg-black text-white overflow-hidden shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#ff2d2d]/20 via-[#ff6b35]/10 to-transparent blur-[150px]"
            />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10">
                Ready to <br />
                <span className="text-gradient-vibrant">Go Atomic?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-12 py-6 rounded-2xl bg-white text-black text-2xl font-black hover:bg-[#ff2d2d] hover:text-white transition-all duration-500 shadow-2xl"
                >
                  Ignite Your Brand
                </Link>
                <a
                  href="tel:+918369697652"
                  className="px-12 py-6 rounded-2xl bg-white/10 backdrop-blur-xl text-white text-2xl font-black border border-white/20 hover:bg-white/20 transition-all duration-500"
                >
                  Consult the Center
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
