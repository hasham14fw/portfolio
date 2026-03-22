import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4 } }
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <motion.h1 
          className="hero-title" 
          style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '0.5rem' }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let's <span className="heading-accent">Connect</span>
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Feel free to reach out for collaborations or just a friendly chat
        </motion.p>
      </div>

      <motion.div 
        className="contact-cards-grid"
        variants={containerVars}
        initial="hidden"
        animate="show"
      >
        {/* Email */}
        <motion.a 
          href="mailto:hasham14fw@gmail.com" 
          className="contact-card"
          variants={itemVars}
        >
          <div className="contact-icon-wrapper">
            <Mail size={40} />
          </div>
          <h3 className="contact-card-title">Email</h3>
          <p className="contact-card-value">hasham14fw@gmail.com</p>
        </motion.a>

        {/* WhatsApp */}
        <motion.a 
          href="https://wa.me/923270222414" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
          variants={itemVars}
        >
          <div className="contact-icon-wrapper">
            <MessageCircle size={40} />
          </div>
          <h3 className="contact-card-title">WhatsApp</h3>
          <p className="contact-card-value">+92 327 0222414</p>
        </motion.a>

        {/* LinkedIn */}
        <motion.a 
          href="https://www.linkedin.com/in/muhammad-ahmad-hasham-ba25a6352" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
          variants={itemVars}
        >
          <div className="contact-icon-wrapper">
            <i className="devicon-linkedin-plain" style={{ fontSize: '40px' }}></i>
          </div>
          <h3 className="contact-card-title">LinkedIn</h3>
          <p className="contact-card-value">M Ahmad Hasham</p>
        </motion.a>

        {/* GitHub */}
        <motion.a 
          href="https://github.com/hasham14fw" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card"
          variants={itemVars}
        >
          <div className="contact-icon-wrapper">
            <i className="devicon-github-original" style={{ fontSize: '40px' }}></i>
          </div>
          <h3 className="contact-card-title">GitHub</h3>
          <p className="contact-card-value">@hasham14fw</p>
        </motion.a>
      </motion.div>
      
      <motion.div 
        style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: '1.1rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <MapPin size={20} /> Based in Islamabad, Pakistan
      </motion.div>

    </motion.div>
  );
};

export default Contact;
