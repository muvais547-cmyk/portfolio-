"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

      {/* Floating Torus 3D Shape (Right side) */}
      <motion.div
        animate={{
          y: [0, -25, 25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
        }}
        className={styles.torusWrapper}
      >
        <Image
          src="/torus_3d.jpg"
          alt="3D Iridescent Torus"
          width={180}
          height={180}
          className={styles.blendImage}
          priority
        />
      </motion.div>

      {/* Floating Glass Pyramid 3D Shape (Left side) */}
      <motion.div
        animate={{
          y: [0, 20, -20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
        }}
        className={styles.pyramidWrapper}
      >
        <Image
          src="/pyramid_3d.jpg"
          alt="3D Glass Pyramid"
          width={130}
          height={130}
          className={styles.blendImage}
          priority
        />
      </motion.div>
    </div>
  );
}
