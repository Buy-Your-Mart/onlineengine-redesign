"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Send,
  Clock,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 83696 97652",
    href: "tel:+918369697652",
    gradient: "from-[#ff2d2d] to-[#ff6b35]",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@onlinengine.in",
    href: "mailto:hello@onlinengine.in",
    gradient: "from-[#ff6b35] to-[#f7c531]",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Mumbai, Maharashtra, India",
    href: "#",
    gradient: "from-[#f7c531] to-[#00c9a7]",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 10AM - 7PM IST",
    href: "#",
    gradient: "from-[#00c9a7] to-[#845ef7]",
  },
];

const services = [
  { value: "web-development", label: "Web Development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "amazon-marketing", label: "Amazon Marketing" },
  { value: "content-strategy", label: "Content Strategy" },
  { value: "performance-ads", label: "Performance Ads" },
  { value: "social-media", label: "Social Media Management" },
  { value: "seo", label: "SEO Optimization" },
  { value: "other", label: "Other" },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary by service. For SEO, expect 3-6 months for significant improvements. For PPC and social media ads, you can see results within weeks. We'll provide realistic timelines based on your specific goals.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models including project-based, retainer, and performance-based options. During our initial consultation, we'll recommend the best model for your needs and budget.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely! We work with businesses of all sizes, from startups to enterprises. Our strategies are customized to your budget and growth goals.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We establish clear KPIs at the start of every engagement. You'll receive regular reports with transparent metrics including ROI, traffic, conversions, and other relevant data points.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden bg-white pt-[140px] md:pt-[180px] pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#ff2d2d]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#845ef7]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 border border-black/10 mb-8"
            >
              <MessageSquare className="w-4 h-4 text-[#ff2d2d]" />
              <span className="text-xs font-bold uppercase tracking-widest text-black/80">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 leading-tight"
            >
              Let&apos;s Build Your{" "}
              <span className="text-gradient">Digital Empire</span> Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-black/60 leading-relaxed"
            >
              Ready to transform your business? Get in touch with our team of experts for a
              free strategy consultation. We&apos;ll help you chart the path to digital dominance.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-[#fcfcfc] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/20 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                  Contact <span className="text-gradient">Information</span>
                </h2>
                <p className="text-black/60 leading-relaxed">
                  Have questions? Reach out through any of these channels and we&apos;ll get
                  back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-black/10 hover:bg-black/[0.01] transition-all duration-500"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-black/5`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-black/40 uppercase tracking-wider mb-1">
                      {info.title}
                    </p>
                    <p className="text-black font-bold group-hover:text-gradient transition-all">
                      {info.value}
                    </p>
                  </motion.a>
                ))}
              </div>

              <div className="gradient-border p-8 bg-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Free Strategy Session</h3>
                    <p className="text-black/60">
                      Book a 30-minute call with our experts to discuss your growth goals and
                      get actionable insights—completely free.
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+918369697652"
                  className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +91 83696 97652
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="gradient-border p-12 text-center bg-white">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00c9a7] to-[#845ef7] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-black/5">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-black mb-4">Thank You!</h3>
                  <p className="text-black/60 mb-8">
                    Your message has been received. Our team will get back to you within 24
                    hours with a personalized response.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "",
                        budget: "",
                        message: "",
                      });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="gradient-border p-8 bg-white">
                  <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-gradient-primary" />
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-black/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-black placeholder:text-black/30 focus:border-[#ff2d2d] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black/60 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-black placeholder:text-black/30 focus:border-[#ff2d2d] focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-black/60 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-black placeholder:text-black/30 focus:border-[#ff2d2d] focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black/60 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-black placeholder:text-black/30 focus:border-[#ff2d2d] focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-black/60 mb-2">
                        Service Interested In *
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-black focus:border-[#ff2d2d] focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black/60 mb-2">
                        Monthly Budget
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-black focus:border-[#ff2d2d] focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under ₹50,000</option>
                          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                          <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                          <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                          <option value="above-5l">Above ₹5,00,000</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-bold text-black/60 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-black/5 border border-black/10 text-black placeholder:text-black/30 focus:border-[#ff2d2d] focus:outline-none transition-colors resize-none"
                      placeholder="Describe your goals, challenges, and what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[#ff6b35]/5 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 border border-black/10 mb-8">
              <Sparkles className="w-4 h-4 text-[#ff2d2d]" />
              <span className="text-xs font-bold uppercase tracking-widest text-black/80">
                FAQs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border p-8 bg-white"
              >
                <h3 className="text-xl font-bold text-black mb-4">{faq.question}</h3>
                <p className="text-black/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#ff2d2d]/5 via-[#ff6b35]/3 to-[#845ef7]/5 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8"
            >
              Ready to <span className="text-gradient">Dominate</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-12"
            >
              Join 6500+ sellers and brands who have transformed their business with ONLINENGINE.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <a
                href="tel:+918369697652"
                className="btn-primary group flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call +91 83696 97652
              </a>
              <a
                href="mailto:hello@onlinengine.in"
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
