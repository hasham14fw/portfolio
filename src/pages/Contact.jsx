import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("");
    const formData = new FormData(event.target);

    // IMPORTANT: Replace with your actual Web3Forms Access Key
    formData.append("access_key", "c294cfc2-7dff-42c0-aca0-8e47f07f56ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Message sent successfully!");
      event.target.reset();
      setTimeout(() => {
        setStatus("idle");
        setResult("");
      }, 5000);
    } else {
      setStatus("error");
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
      <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '4rem' }}>
        <motion.h1 
          className="hero-title" 
          style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '0.5rem' }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let's <span className="heading-accent">Connect</span>
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          style={{ fontSize: '1.1rem' }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Feel free to reach out for collaborations or just a friendly chat
        </motion.p>
      </div>

      <div className="contact-content-wrapper">
      {/* Contact Form */}
      <motion.div 
        className="contact-form-container glass-panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="form-title">Send me a message</h2>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="Full Name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required placeholder="Email Address" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows="5" placeholder="Write Your Message..." className="form-input"></textarea>
          </div>
          <button type="submit" className="btn-primary form-submit-btn" disabled={status === 'loading'}>
            {status === 'idle' && <>Send Message <Send size={18} /></>}
            {status === 'loading' && <>Sending... <Loader2 size={18} className="spin-animation" /></>}
            {status === 'success' && <>Sent <CheckCircle size={18} /></>}
            {status === 'error' && <>Try Again <Send size={18} /></>}
          </button>
        </form>
        {result && status !== 'success' && <span className="form-result-message">{result}</span>}
      </motion.div>

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
      </div>
      
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
