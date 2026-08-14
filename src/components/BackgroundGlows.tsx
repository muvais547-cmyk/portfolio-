"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./BackgroundGlows.module.css";

export default function BackgroundGlows() {
  return (
    <div className={styles.glowContainer}>
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
