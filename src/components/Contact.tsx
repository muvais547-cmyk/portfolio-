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
            <a href="mailto:muhammeduvais@gmail.com" className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <Mail size={20} />
                </div>
                <ArrowUpRight size={18} className={styles.arrow} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.methodLabel}>Email Direct</span>
                <h3 className={styles.methodValue}>muhammeduvais@gmail.com</h3>
              </div>
            </a>

            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/919061596700" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.118-2.91-6.997-1.88-1.879-4.361-2.912-7.001-2.913-5.442 0-9.866 4.42-9.87 9.865-.001 1.745.456 3.453 1.32 4.964l-.995 3.634 3.731-.977zm11.368-6.44c-.29-.145-1.71-.845-1.975-.94-.266-.096-.46-.145-.653.145-.193.29-.748.94-.917 1.133-.169.193-.338.217-.627.072-1.29-.646-2.18-1.127-2.97-2.484-.21-.362.21-.336.6-.112.35.201.39.264.47.424.08.16.04.305-.02.45-.06.145-.653 1.573-.895 2.152-.236.57-.475.49-.652.482-.17-.008-.362-.01-.554-.01s-.507.072-.773.362c-.266.29-1.013.99-1.013 2.415 0 1.424 1.037 2.803 1.182 2.996.145.193 2.04 3.115 4.94 4.373.69.3 1.23.478 1.65.612.693.22 1.324.19 1.823.115.556-.083 1.71-.698 1.952-1.37.242-.674.242-1.253.17-1.37-.072-.119-.266-.193-.556-.338z"/>
                  </svg>
                </div>
                <ArrowUpRight size={18} className={styles.arrow} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.methodLabel}>WhatsApp Chat</span>
                <h3 className={styles.methodValue}>+91 90615 96700</h3>
              </div>
            </a>

            {/* Instagram Link */}
            <a 
              href="https://instagram.com/muhammed_uvais_a" 
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
                <h3 className={styles.methodValue}>@muhammed_uvais_a</h3>
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
