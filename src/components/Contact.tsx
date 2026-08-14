"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !message) return;

    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
      setName("");
      setMessage("");
    }, 800);
  };

  return (
    <section id="contact" className={styles.section}>
      {/* Editorial Split Background */}
      <div className={styles.splitBg}>
        <div className={styles.bgLeft} />
        <div className={styles.bgRight} />
      </div>

      <div className={styles.container}>
        {/* Left Column: Get In Touch Info */}
        <div className={styles.leftCol}>
          <div className={styles.header}>
            <span className={styles.subtitle}>05 / GET IN TOUCH</span>
            <h2 className={styles.title}>Let's Connect</h2>
            <p className={styles.desc}>
              Have a luxury brand advertisement, cinematic AI video project, or creative concept in mind? Let's build something extraordinary together.
            </p>
          </div>

          <div className={styles.contactMethods}>
            {/* Email link */}
            <a href="mailto:muvais547@gmail.com" className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <Mail size={20} />
                </div>
                <ArrowUpRight size={18} className={styles.arrow} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.methodLabel}>Email Direct</span>
                <h3 className={styles.methodValue}>muvais547@gmail.com</h3>
              </div>
            </a>

            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/919249039714" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12.031 0C5.393 0 0 5.393 0 12.03c0 2.115.547 4.172 1.587 5.99L0 24l6.135-1.61c1.78-.97 3.82 1.488 5.896 1.488 6.64 0 12.03-5.39 12.03-12.03C24.062 5.393 18.669 0 12.03 0zm6.988 17.15c-.266.75-1.558 1.458-2.146 1.527-.58.07-1.312.08-2.13-.18-3.176-1.02-5.706-4.22-6.523-5.3-.18-.24-.96-1.286-.96-2.455 0-1.17.61-1.74.83-1.972.22-.232.482-.29.642-.29.16 0 .32.01.46.015.148.006.346-.057.544.423.2.482.68 1.662.74 1.78.06.12.1.26.02.42-.08.16-.18.26-.3.4-.12.14-.252.312-.36.42-.12.12-.244.25-.1.5.14.24.63.1.37.5.3 1.25.96 2.37 1.65 2.97.7.6 1.28.92 1.96 1.22.68.3 1.08.26 1.48-.2.4-.46 1.73-2.01 1.95-2.7.22-.69.22-1.29.15-1.41-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                </div>
                <ArrowUpRight size={18} className={styles.arrow} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.methodLabel}>WhatsApp Chat</span>
                <h3 className={styles.methodValue}>+91 92490 39714</h3>
              </div>
            </a>

            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/aiwithuvaiiis/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <ArrowUpRight size={18} className={styles.arrow} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.methodLabel}>Instagram DM</span>
                <h3 className={styles.methodValue}>@aiwithuvaiiis</h3>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className={styles.rightCol}>
          <div className={styles.formContainer}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className={styles.form}
                >
                  <h3 className={styles.formTitle}>Send a Message</h3>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.inputLabel}>Full Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Muhammed Uvais"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-email" className={styles.inputLabel}>Email Address</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      required 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="uvais@creator.ai"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.inputLabel}>Message</label>
                    <textarea 
                      id="message"
                      required 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      placeholder="Tell me about your project concept..."
                      rows={5}
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.successState}
                >
                  <CheckCircle2 size={48} className={styles.checkIcon} />
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className={styles.resetBtn}
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer copyright note */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>© {new Date().getFullYear()} Muhammed Uvais A. All rights reserved.</p>
      </footer>
    </section>
  );
}
