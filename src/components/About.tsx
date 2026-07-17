"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./About.module.css";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 29, suffix: "+", label: "Videos Created" },
  { value: 19, suffix: "+", label: "Happy Clients" },
  { value: 1, suffix: "+", label: "Years Learning AI" },
];

const skills = [
  "AI Video Creation",
  "AI Content Creation",
  "Prompt Engineering",
  "Content Strategy",
  "Social Media Marketing",
  "Personal Branding",
  "Creative Direction",
  "Brand Storytelling",
  "Short-form Video Creation",
];

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.subtitle}>WHO I AM</span>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.divider} />
        </motion.div>

        {/* Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={styles.bioWrapper}
        >
          <p className={styles.bioText}>
            I'm <strong>Muhammed Uvais A</strong>, an AI Content Creator specializing in
            cinematic AI videos, luxury advertisements, social media content, and prompt engineering.
            I bridge the gap between advanced artificial intelligence and high-end creative storytelling,
            crafting visuals that captivate and drive engagement.
          </p>
        </motion.div>

        {/* Stat Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.statsGrid}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(90, 103, 83, 0.15)" }}
              className={styles.statCard}
            >
              <div className={styles.statNumber}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary Tag Grid */}
        <div className={styles.skillsWrapper}>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            className={styles.skillsTitle}
          >
            Skills Summary
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.skillsGrid}
          >
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05, backgroundColor: "var(--olive-green)", color: "var(--bg-cream)", borderColor: "var(--olive-green)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={styles.skillTag}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
