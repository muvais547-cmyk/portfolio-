"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionDivider.module.css";

interface SectionDividerProps {
  label: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className={styles.dividerWrapper}>
      {/* Thin elegant horizontal line */}
      <div className={styles.line} />
      
      {/* Central Glassmorphic Badge Pill */}
      <motion.div 
        whileHover={{ scale: 1.05, borderColor: "var(--accent-card)" }}
        transition={{ type: "spring", stiffness: 350, damping: 15 }}
        className={styles.badge}
      >
        <span className={styles.crosshair}>+</span>
        <span className={styles.label}>{label}</span>
        <span className={styles.crosshair}>+</span>
      </motion.div>
    </div>
  );
}
