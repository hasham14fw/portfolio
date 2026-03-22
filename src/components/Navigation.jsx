import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Mail, MapPin, Clock, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }) + ' (Pakistan Standard Time)';

  const navItems = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { to: '/contact', label: 'Contact', icon: <Mail size={18} /> }
  ];

  return (
    <nav className="navbar">
      {/* Left side: Location and Time Info */}
      <div className="nav-info">
        <div className="location-info">
          <MapPin size={16} className="accent-icon" />
          <span>Islamabad, Pakistan</span>
        </div>
        <div className="time-info">
          <Clock size={16} />
          <span>{timeString}</span>
        </div>
      </div>
      
      {/* Desktop Links */}
      <ul className="nav-links desktop-only">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink 
              to={item.to} 
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              <span className="nav-item-content">
                {item.icon} {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              className="mobile-menu glass-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-header">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>Ahmad Hasham</h3>
                  <span style={{ fontSize: '0.8rem', color: '#3b82f6' }}>Active Now</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="close-btn">
                  <X size={24} />
                </button>
              </div>

              <ul className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.to}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <NavLink 
                      to={item.to} 
                      className={({ isActive }) => (isActive ? 'mobile-nav-item active' : 'mobile-nav-item')}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mobile-nav-icon">{item.icon}</span> {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                className="mobile-menu-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem' }}>Profiles</p>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href="https://github.com/hasham14fw" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><i className="devicon-github-original"></i></a>
                  <a href="https://www.linkedin.com/in/muhammad-ahmad-hasham-ba25a6352" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><i className="devicon-linkedin-plain"></i></a>
                  <a href="https://x.com/hasham14fw" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><i className="devicon-twitter-original"></i></a>
                  <a href="mailto:hasham14fw@gmail.com" className="social-icon-btn"><Mail size={18} /></a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
