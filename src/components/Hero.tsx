"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Bookmark, ArrowUpRight, Check, Send, Mail } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");

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

  return (
    <section className={styles.heroContainer}>
      {/* 1. Split Background columns */}
      <div className={styles.splitBg}>
        <div className={styles.bgLeft} />
        <div className={styles.bgRight} />
      </div>

      {/* 2. Top Header / Navbar */}
      <header className={styles.navbar}>
        <div className={styles.navLeft}>
          <div className={styles.avatarWrapper}>
            <Image
              src="/profile.png"
              alt="Muhammed Uvais A"
              width={40}
              height={40}
              className={styles.avatarImage}
            />
          </div>
          <div className={styles.profileText}>
            <span className={styles.profileName}>Muhammed Uvais A.</span>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span className={styles.statusLabel}>Available for freelance</span>
            </div>
          </div>
          <button className={styles.followBtn}>Follow</button>
        </div>

        <div className={styles.navRight}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setLiked(!liked)}
            className={`${styles.iconBtn} ${liked ? styles.activeLike : ""}`}
            aria-label="Like"
          >
            <Heart size={20} fill={liked ? "currentColor" : "none"} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setBookmarked(!bookmarked)}
            className={`${styles.iconBtn} ${bookmarked ? styles.activeBookmark : ""}`}
            aria-label="Bookmark"
          >
            <Bookmark size={20} fill={bookmarked ? "currentColor" : "none"} />
          </motion.button>
          <button 
            className={styles.ctaBtn}
            onClick={() => setShowContactModal(true)}
          >
            Get in touch
          </button>
        </div>
      </header>

      {/* 3. Main Magazine-style Card Wrapper */}
      <div className={styles.contentWrapper}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className={styles.magazineCard}
        >
          {/* Card Top Row */}
          <div className={styles.cardTopRow}>
            <div className={styles.badgeList}>
              {/* Contact Badge */}
              <button 
                className={styles.badgePill}
                onClick={() => setShowContactModal(true)}
                title="Send an email"
              >
                <Mail size={13} />
                <span>Contact</span>
              </button>

              {/* Instagram Badge */}
              <a 
                href="https://www.instagram.com/aiwithuvaiiis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.badgePill}
                title="Visit Instagram Profile"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>

              {/* WhatsApp Badge */}
              <a 
                href="https://wa.me/919249039714" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.badgePill}
                title="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M12.031 0C5.393 0 0 5.393 0 12.03c0 2.115.547 4.172 1.587 5.99L0 24l6.135-1.61c1.78-.97 3.82 1.488 5.896 1.488 6.64 0 12.03-5.39 12.03-12.03C24.062 5.393 18.669 0 12.03 0zm6.988 17.15c-.266.75-1.558 1.458-2.146 1.527-.58.07-1.312.08-2.13-.18-3.176-1.02-5.706-4.22-6.523-5.3-.18-.24-.96-1.286-.96-2.455 0-1.17.61-1.74.83-1.972.22-.232.482-.29.642-.29.16 0 .32.01.46.015.148.006.346-.057.544.423.2.482.68 1.662.74 1.78.06.12.1.26.02.42-.08.16-.18.26-.3.4-.12.14-.252.312-.36.42-.12.12-.244.25-.1.5.14.24.63.1.37.5.3 1.25.96 2.37 1.65 2.97.7.6 1.28.92 1.96 1.22.68.3 1.08.26 1.48-.2.4-.46 1.73-2.01 1.95-2.7.22-.69.22-1.29.15-1.41-.07-.12-.27-.2-.57-.35z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
            <span className={styles.copyrightText}>©2026</span>
          </div>

          {/* Card Subheader metadata */}
          <div className={styles.cardSubheader}>
            <div className={styles.subCol}>
              <span className={styles.subLabel}>AI CONTENT</span>
              <span className={styles.subVal}>CREATOR</span>
            </div>
            <div className={styles.subCol}>
              <span className={styles.subLabel}>PROMPT</span>
              <span className={styles.subVal}>ENGINEER</span>
            </div>
            <div className={styles.subCol}>
              <span className={styles.subLabel}>SINCE</span>
              <span className={styles.subVal}>2024</span>
            </div>
          </div>

          {/* Typography Layer & Overlapping Portrait Container */}
          <div className={styles.portraitCanvas}>
            {/* The Big Bold Typographic Heading: UVAIS */}
            <motion.h1
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "-0.04em", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className={styles.hugeNameText}
            >
              Uvais
            </motion.h1>

            {/* Inner frame containing portrait and QR Code */}
            {/* Inner frame containing portrait, text and QR Code */}
            <div className={styles.photoFrame}>
              {/* Left Column: Specialization Label and Title */}
              <div className={styles.frameTextContent}>
                <span className={styles.frameCategoryLabel}>SPECIALIZATION</span>
                <h2 className={styles.frameTitle}>
                  AI Content <br />
                  Creation
                </h2>
                <p className={styles.frameDesc}>
                  Cinematic videos, luxury advertisements, and prompt engineering solutions.
                </p>
              </div>

              {/* Right Column: Square Portrait Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={styles.squarePortraitFrame}
              >
                <Image
                  src="/profile.png"
                  alt="Muhammed Uvais A"
                  width={320}
                  height={320}
                  priority
                  className={styles.grayscalePortraitImg}
                />
              </motion.div>

              {/* Decorative QR Code on Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.7 }}
                className={styles.qrCodeContainer}
              >
                <svg
                  viewBox="0 0 100 100"
                  className={styles.qrSvg}
                  aria-hidden="true"
                >
                  <rect width="100" height="100" fill="none" />
                  {/* Outer QR frames */}
                  <path
                    d="M10 10h25v10H20v15H10V10zM65 10h25v25H80V20H65V10zM10 65h10v15h15v10H10V65zM90 65v25H65V80h15V65h10z"
                    fill="currentColor"
                  />
                  {/* Internal grid patterns to look real */}
                  <rect x="25" y="25" width="10" height="10" fill="currentColor" />
                  <rect x="65" y="25" width="10" height="10" fill="currentColor" />
                  <rect x="25" y="65" width="10" height="10" fill="currentColor" />
                  <rect x="45" y="45" width="10" height="10" fill="currentColor" />
                  <rect x="55" y="55" width="10" height="10" fill="currentColor" />
                  <rect x="45" y="65" width="10" height="10" fill="currentColor" />
                  <rect x="65" y="45" width="10" height="10" fill="currentColor" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. Elegant Interactive Contact Modal overlay */}
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
                    placeholder="Enter your email"
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
    </section>
  );
}
