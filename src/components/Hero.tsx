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
                href="https://instagram.com" 
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
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.118-2.91-6.997-1.88-1.879-4.361-2.912-7.001-2.913-5.442 0-9.866 4.42-9.87 9.865-.001 1.745.456 3.453 1.32 4.964l-.995 3.634 3.731-.977zm11.368-6.44c-.29-.145-1.71-.845-1.975-.94-.266-.096-.46-.145-.653.145-.193.29-.748.94-.917 1.133-.169.193-.338.217-.627.072-1.29-.646-2.18-1.127-2.97-2.484-.21-.362.21-.336.6-.112.35.201.39.264.47.424.08.16.04.305-.02.45-.06.145-.653 1.573-.895 2.152-.236.57-.475.49-.652.482-.17-.008-.362-.01-.554-.01s-.507.072-.773.362c-.266.29-1.013.99-1.013 2.415 0 1.424 1.037 2.803 1.182 2.996.145.193 2.04 3.115 4.94 4.373.69.3 1.23.478 1.65.612.693.22 1.324.19 1.823.115.556-.083 1.71-.698 1.952-1.37.242-.674.242-1.253.17-1.37-.072-.119-.266-.193-.556-.338z"/>
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
