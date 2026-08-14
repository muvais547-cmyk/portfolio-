"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./ExperienceSkills.module.css";

const timelineItems = [
  {
    role: "AI Content Creator",
    type: "Full-Time / Freelance",
    year: "2025 - Present",
    desc: "Directing cinematic AI video generation, luxury brand advertisements, and end-to-end creative post-production."
  },
  {
    role: "Freelance AI Creator",
    type: "Independent",
    year: "2025",
    desc: "Delivering bespoke high-end digital art assets, generative images, and promotional video clips for worldwide clients."
  },
  {
    role: "AI Advertisement Creator",
    type: "Contract",
    year: "2025",
    desc: "Specializing in commercial product video synthesis using Runway Gen-3, Kling AI, Luma Dream Machine, and midjourney workflows."
  },
  {
    role: "Social Media Strategist",
    type: "Consulting",
    year: "2024",
    desc: "Designing short-form content frameworks, reels strategy, and prompt-driven assets optimized for high user engagement."
  },
  {
    role: "Prompt Engineer",
    type: "R&D",
    year: "2024",
    desc: "Optimizing text-to-image and text-to-video prompt recipes across Midjourney, Flux, Stable Diffusion, and OpenAI GPT engines."
  }
];

const skillsTags = [
  "AI Video Creation",
  "AI Content Creation",
  "Videography",
  "Prompt Engineering",
  "Content Strategy",
  "Social Media Marketing",
  "Personal Branding",
  "Creative Direction",
  "Brand Storytelling",
  "Short-form Video Creation"
];

const technicalSkills = [
  { name: "AI Content Creation", level: 95 },
  { name: "AI Video Production", level: 92 },
  { name: "Prompt Engineering", level: 95 },
  { name: "Content Strategy", level: 90 },
  { name: "Branding", level: 88 },
  { name: "Creative Direction", level: 90 },
  { name: "Video Editing", level: 85 },
  { name: "Social Media Marketing", level: 88 },
  { name: "Storytelling", level: 92 }
];

export default function ExperienceSkills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section id="experience-skills" className={styles.section}>
      {/* Split background (L-Linen, R-Green) */}
      <div className={styles.splitBg}>
        <div className={styles.bgLeft} />
        <div className={styles.bgRight} />
      </div>

      <div className={styles.container}>
        {/* Left Column: Timeline (on Linen background) */}
        <div className={styles.leftCol}>
          <div className={styles.colHeader}>
            <span className={styles.subtitle}>03 / MILESTONES</span>
            <h2 className={styles.title}>Experience</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.timeline}
          >
            {/* The vertical timeline bar */}
            <div className={styles.timelineLine} />

            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={styles.timelineItem}
              >
                {/* Timeline node dot */}
                <div className={styles.timelineNode} />

                {/* Card Container */}
                <div className={styles.timelineCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardYear}>{item.year}</span>
                    <span className={styles.cardType}>{item.type}</span>
                  </div>
                  <h3 className={styles.cardRole}>{item.role}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Skills & Progress (on Green background) */}
        <div className={styles.rightCol}>
          <div className={styles.colHeaderLight}>
            <span className={styles.subtitleLight}>04 / COMPETENCIES</span>
            <h2 className={styles.titleLight}>Skills</h2>
          </div>

          {/* Moved Skills Tag Cloud */}
          <div className={styles.tagsContainer}>
            <h3 className={styles.blockTitleLight}>Skills Summary</h3>
            <div className={styles.skillsGrid}>
              {skillsTags.map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#ffffff", 
                    color: "var(--olive-dark)", 
                    borderColor: "#ffffff" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={styles.skillTag}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Technical Progress Bars */}
          <div className={styles.progressContainer}>
            <h3 className={styles.blockTitleLight}>Technical Skills</h3>
            <div className={styles.progressGrid}>
              {technicalSkills.map((skill, idx) => (
                <div key={idx} className={styles.progressItem}>
                  <div className={styles.progressHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 * idx }}
                      className={styles.barFill}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
