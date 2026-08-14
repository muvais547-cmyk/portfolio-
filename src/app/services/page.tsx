"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Video, 
  Sparkles, 
  Film, 
  Image as ImageIcon, 
  User, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  ArrowLeft,
  Mail,
  Send,
  Check
} from "lucide-react";

const InstagramIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import styles from "./page.module.css";

const services = [
  {
    number: "01",
    name: "AI Video Ads",
    description: "Create cinematic AI-powered advertisements for brands and products.",
    icon: Video,
    tag: "Production"
  },
  {
    number: "02",
    name: "AI Product Ads",
    description: "Create premium product visuals and advertisements using AI.",
    icon: Sparkles,
    tag: "Commercial"
  },
  {
    number: "03",
    name: "Brand Videos",
    description: "Create cinematic promotional videos that communicate a brand's identity and story.",
    icon: Film,
    tag: "Identity"
  },
  {
    number: "04",
    name: "Social Media Content",
    description: "Create engaging reels, promotional posts and creative content for social media.",
    icon: InstagramIcon,
    tag: "Social"
  },
  {
    number: "05",
    name: "AI Image Generation",
    description: "Create high-quality AI-generated images for products, brands and campaigns.",
    icon: ImageIcon,
    tag: "Assets"
  },
  {
    number: "06",
    name: "Personal Branding",
    description: "Create professional AI-powered content for creators, professionals and business owners.",
    icon: User,
    tag: "Influence"
  },
  {
    number: "07",
    name: "Creative Concept & Prompt Engineering",
    description: "Develop creative concepts, scripts and detailed AI prompts for image and video generation.",
    icon: Cpu,
    tag: "Technical"
  },
  {
    number: "08",
    name: "AI Content Strategy",
    description: "Help brands plan and create effective AI-powered content campaigns.",
    icon: TrendingUp,
    tag: "Strategy"
  }
];

export default function ServicesPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setEmailInput("");
        setShowContactModal(false);
      }, 2000);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Aurora glow backdrops */}
      <div className={styles.glowBg}>
        <div className={styles.glowPurple} />
        <div className={styles.glowCyan} />
      </div>

      {/* 1. Header/Navbar */}
      <header className={styles.header}>
        <Link href="/" className={styles.backBtn}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        
        <div className={styles.logo}>
          <span>AIWithUvais</span>
        </div>

        <button 
          className={styles.navbarCta}
          onClick={() => setShowContactModal(true)}
        >
          Let's Collaborate
        </button>
      </header>

      <main className={styles.mainContainer}>
        {/* 2. Hero Section */}
        <section className={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <span className={styles.heroLabel}>SERVICES</span>
            <h1 className={styles.heroTitle}>
              Creative Ideas.<br />
              <span>Powered by AI.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              From concepts to cinematic content, I create AI-powered visuals that help brands stand out.
            </p>
          </motion.div>
        </section>

        {/* 3. Services Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.servicesGrid}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={styles.glassCard}
              >
                {/* Border Glow element */}
                <div className={styles.cardGlowOverlay} />

                <div className={styles.cardHeader}>
                  <span className={styles.serviceNum}>{service.number}</span>
                  <span className={styles.serviceTag}>{service.tag}</span>
                </div>

                <div className={styles.cardIconWrapper}>
                  <Icon size={28} className={styles.cardIcon} />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.serviceName}>{service.name}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <button 
                    className={styles.exploreBtn}
                    onClick={() => setShowContactModal(true)}
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={14} className={styles.arrowIcon} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* 4. Final CTA Section */}
        <section className={styles.ctaSection}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.ctaBox}
          >
            <h2 className={styles.ctaTitle}>Have an idea? Let's create it.</h2>
            <p className={styles.ctaSubtitle}>
              Get in touch today to talk about your AI-powered project rates, strategy, and cinematic delivery.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={styles.ctaButton}
              onClick={() => setShowContactModal(true)}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </section>
      </main>

      {/* 5. Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <span className={styles.brandName}>AIWithUvais</span>
          <span className={styles.copyright}>© 2026 AIWithUvais. All Rights Reserved.</span>
        </div>
      </footer>

      {/* 6. Contact Modal overlay */}
      <AnimatePresence>
        {showContactModal && (
          <div className={styles.modalOverlay}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={styles.contactModal}
            >
              <button
                className={styles.closeModalBtn}
                onClick={() => setShowContactModal(false)}
              >
                ×
              </button>
              <h2>Start a Project</h2>
              <p>Leave your email and I will reach out with custom rates and schedules.</p>
              
              {formSubmitted ? (
                <div className={styles.successState}>
                  <Check size={32} className={styles.checkIcon} />
                  <h3>Message Sent!</h3>
                  <p>I'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className={styles.emailInput}
                  />
                  <button type="submit" className={styles.submitBtn}>
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
