import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, AlertCircle, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AIPS - School Management Web Portal',
    desc: 'Comprehensive school portal with secure dashboards for teachers and students. Features include attendance marking & tracking, academic result viewing, digital admission forms, and real-time news announcements.',
    img: '/aips_project.png',
    tags: ['HTML', 'CSS', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'http://www.aips-hsp.com',
    sourceLink: 'https://github.com/hasham14fw/AIPS-'
  },
  {
    id: 3,
    title: 'AI - Fake News Verifier',
    desc: 'An AI-powered application combating misinformation via OCR and Machine Learning. It extracts text from uploaded images and cross-references claims against trusted global databases to generate an evaluated verification report.',
    img: '/news_verifier.png',
    tags: ['React', 'Python', 'Flask', 'Machine Learning'],
    demoLink: 'https://fake-news-verifier-rp4i.onrender.com/',
    sourceLink: 'https://github.com/hasham14fw/Fake-News-Verifier'
  },
  {
    id: 2,
    title: 'AIPS Portal (Desktop Application)',
    desc: 'A professional desktop application built with .NET 9.0 for school management. Features include automated WhatsApp notifications via Twilio, MongoDB Atlas integration, high-resolution PDF result card generation, and secure teacher credentials with BCrypt.',
    img: '/aips_portal_desktop.png',
    tags: ['.NET 9.0', 'C#', 'WinForms', 'MongoDB', 'Twilio API', 'iTextSharp'],
    sourceLink: 'https://github.com/hasham14fw/AIPS-Management-System-Desktop-Application',
    isDesktop: true,
    alertMsg: 'This is a desktop application. To explore the source or run it locally, please clone the repository from GitHub. A detailed manual is included in the repo for setup.'
  }
];

const Projects = () => {
  const [activeAlert, setActiveAlert] = useState(null);

  const handleDemoClick = (e, project) => {
    if (project.isDesktop) {
      e.preventDefault();
      setActiveAlert(project.alertMsg);
    }
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', position: 'relative' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem' }}>
          Development <span className="heading-accent">Showcase</span>
        </h1>
        <p className="hero-subtitle" style={{ marginBottom: '1rem' }}>Exploring the intersection of Web Dev & AI</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
          >
            <div className="img-container" style={{ overflow: 'hidden', borderRadius: '12px', marginBottom: '1rem' }}>
              <img src={project.img} alt={project.title} className="project-img" style={{ width: '100%', transition: 'transform 0.3s ease' }} />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            
            <div className="skills-tags" style={{ marginTop: 'auto', marginBottom: '1.5rem' }}>
              {project.tags.map(tag => (
                <span key={tag} className="skill-tag" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a 
                href={project.isDesktop ? '#' : project.demoLink} 
                target={project.isDesktop ? '' : '_blank'} 
                rel="noopener noreferrer" 
                onClick={(e) => handleDemoClick(e, project)}
                className="btn-primary" 
                style={{ padding: '8px 16px', fontSize: '0.9rem', flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              >
                <ExternalLink size={16} style={{ marginRight: '8px' }} /> Live Demo
              </a>
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem', flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Github size={16} style={{ marginRight: '8px' }} /> Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeAlert && (
          <motion.div 
            className="alert-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(5, 5, 16, 0.8)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
            onClick={() => setActiveAlert(null)}
          >
            <motion.div 
              className="alert-modal glass-panel"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '450px',
                width: '100%',
                padding: '2rem',
                border: '1px solid rgba(59, 130, 246, 0.5)',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'rgba(59, 130, 246, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#3b82f6'
              }}>
                <AlertCircle size={32} />
              </div>
              
              <h2 style={{ marginBottom: '1rem', color: '#fff' }}>Desktop Application</h2>
              <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.6' }}>
                {activeAlert}
              </p>
              
              <button 
                className="btn-primary" 
                onClick={() => setActiveAlert(null)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
