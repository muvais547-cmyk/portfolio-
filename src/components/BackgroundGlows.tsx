"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./BackgroundGlows.module.css";

export default function BackgroundGlows() {
  return (
    <div className={styles.glowContainer}>
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -100, 120, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${styles.glowBlob} ${styles.blob1}`}
      />
      <motion.div
        animate={{
          x: [0, -120, 90, 0],
          y: [0, 60, -90, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${styles.glowBlob} ${styles.blob2}`}
      />
      <motion.div
        animate={{
          x: [0, 100, -70, 0],
          y: [0, 110, -60, 0],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${styles.glowBlob} ${styles.blob3}`}
      />
    </div>
  );
}
