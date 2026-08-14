"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Film, Box, Tv, Share2, Sparkles, User, Cpu, LineChart, ArrowUpRight } from "lucide-react";
import styles from "./Services.module.css";

const servicesList = [
  {
    num: "01",
    icon: <Film size={22} />,
    meta: "[ MODEL: VEO / RUNWAY ]",
    title: "AI Video Ads",
    desc: "Create cinematic AI-powered advertisements for brands and products."
  },
  {
    num: "02",
    icon: <Box size={22} />,
    meta: "[ ENGINE: FLUX / MJ ]",
    title: "AI Product Ads",
    desc: "Create premium product visuals and advertisements using AI."
  },
  {
    num: "03",
    icon: <Tv size={22} />,
    meta: "[ CINEMATIC_V2.0 ]",
    title: "Brand Videos",
    desc: "Create cinematic promotional videos that communicate a brand's identity and story."
  },
  {
    num: "04",
    icon: <Share2 size={22} />,
    meta: "[ REELS / SHORTS SYNC ]",
    title: "Social Media Content",
    desc: "Create engaging reels, promotional posts and creative content for social media."
  },
  {
    num: "05",
    icon: <Sparkles size={22} />,
    meta: "[ MIDJOURNEY / LEONARDO ]",
    title: "AI Image Generation",
    desc: "Create high-quality AI-generated images for products, brands and campaigns."
  },
  {
    num: "06",
    icon: <User size={22} />,
    meta: "[ IDENTITY_AI_SYNC ]",
    title: "Personal Branding",
    desc: "Create professional AI-powered content for creators, professionals and business owners."
  },
  {
    num: "07",
    icon: <Cpu size={22} />,
    meta: "[ PROMPT: GPT-4o / GEMINI ]",
    title: "Creative Concept & Prompt Engineering",
    desc: "Develop creative concepts, scripts and detailed AI prompts for image and video generation."
  },
  {
    num: "08",
    icon: <LineChart size={22} />,
    meta: "[ NEURAL_CAMPAIGN_STRAT ]",
    title: "AI Content Strategy",
    desc: "Help brands plan and create effective AI-powered content campaigns."
  }
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 14
      }
    }
  };

  return (
    <section id="services" className={styles.servicesSection}>
      {/* Split background (alternating layout: Left is Green, Right is Cream) */}
      <div className={styles.splitBg}>
        <div className={styles.bgLeft} />
        <div className={styles.bgRight} />
      </div>

      <div className={styles.container}>
        {/* Left Column: Sticky Title & Description (on Green Pane) */}
        <div className={styles.leftCol}>
          <div className={styles.stickyIntro}>
            <span className={styles.subtitle}>02 / CAPABILITIES</span>
            <h2 className={styles.title}>Services</h2>
            <p className={styles.introText}>
              Leveraging advanced neural rendering models, deep prompt engineering pipelines, and visual storytelling to craft cinematic assets.
            </p>
            <div className={styles.ctaWrapper}>
              <a href="#contact" className={styles.ctaLink}>
                <span>Request Custom Pricing</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Scrollable Grid of cards (on Cream Pane) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.rightCol}
        >
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: "var(--olive-green)",
                boxShadow: "0 12px 30px rgba(90, 103, 83, 0.15)"
              }}
              className={styles.serviceCard}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>{service.num}</span>
                <span className={styles.cardMeta}>{service.meta}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
