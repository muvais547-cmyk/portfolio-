"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./About.module.css";

const stats = [
  { id: "[01]", value: 50, suffix: "+", label: "Projects Completed" },
  { id: "[02]", value: 29, suffix: "+", label: "Videos Created" },
  { id: "[03]", value: 19, suffix: "+", label: "Happy Clients" },
  { id: "[04]", value: 1, suffix: "+", label: "Years Learning AI" },
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
      {/* Split Background to continue the Hero theme */}
      <div className={styles.splitBg}>
        <div className={styles.bgLeft} />
        <div className={styles.bgRight} />
      </div>

      <div className={styles.container}>
        {/* Left Column: Bio & Skills Badge cloud */}
        <div className={styles.leftCol}>
          <div className={styles.header}>
            <span className={styles.subtitle}>01 / BIOGRAPHY</span>
            <h2 className={styles.title}>About Me</h2>
          </div>
          
          <div className={styles.bioWrapper}>
            <p className={styles.bioText}>
              I'm <strong>Muhammed Uvais A</strong>, an AI Content Creator specializing in
              cinematic AI videos, luxury advertisements, videography, social media content, and prompt engineering.
            </p>
            <p className={styles.bioTextMuted}>
              I bridge the gap between creative storytelling and generative AI, crafting visual narratives that elevate brand identities.
            </p>
          </div>

        </div>

        {/* Right Column: Stat Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.rightCol}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
              className={styles.statCard}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardId}>{stat.id}</span>
                <span className={styles.cardDot} />
              </div>
              <div className={styles.statNumber}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
