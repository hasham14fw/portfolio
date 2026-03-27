import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Calendar, FileText, ChevronRight, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Leaflet.js', icon: 'devicon-javascript-plain colored' },
      { name: 'GDI+', icon: 'devicon-dot-net-plain colored' },
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'C#', icon: 'devicon-csharp-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
    ]
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: '.NET 9.0', icon: 'devicon-dotnetcore-plain colored' },
      { name: 'Flask', icon: 'devicon-flask-original colored' },
      { name: 'Twilio API', icon: 'devicon-slack-plain colored' },
      { name: 'Crow C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'Postman', icon: 'devicon-postman-plain colored' },
    ]
  },

  {
    title: 'Artificial Intelligence',
    skills: [
      { name: 'Machine Learning', icon: 'devicon-tensorflow-original colored' },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
      { name: 'XGBoost', icon: 'devicon-python-plain colored' },
      { name: 'Random Forest', icon: 'devicon-python-plain colored' },
      { name: 'OpenCV', icon: 'devicon-opencv-plain colored' },
      { name: 'Scikit-Learn', icon: 'devicon-python-plain colored' },
      { name: 'Neural Networks', icon: 'devicon-pytorch-original colored' },
      { name: 'Anaconda', icon: 'devicon-anaconda-original colored' },
    ]
  },
  {
    title: 'Deployment & Tools',
    skills: [
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'Git Bash', icon: 'devicon-git-plain colored' },
      { name: 'Vercel', icon: 'devicon-vercel-original' },
      { name: 'Render', icon: 'devicon-react-original' },
    ]
  }
];

const Home = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ paddingBottom: '100px', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      
      {/* Inspired Hero Layout */}
      <div style={{ display: 'flex', gap: '4rem', marginTop: '1.5rem', width: '100%' }} className="responsive-hero">
        
        {/* Left Sidebar */}
        <div style={{ flex: '0 0 240px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            className="profile-pic-wrapper"
          >
            <img src="/profile_photo.jpg" alt="M Ahmad Hasham" className="rounded-avatar" />
          </motion.div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontWeight: '500' }}>
            <Globe className="skill-icon" size={18} /> Asia/Islamabad
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
            <span className="language-pill">English</span>
            <span className="language-pill">Urdu</span>
          </div>
          
        </div>

        {/* Right Main Content */}
        <div className="hero-content-main">
          
          <div className="hero-btns-container">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="schedule-btn resume-btn">
              <FileText size={18} /> Resume
            </a>
          </div>

          <div className="intro-text-block">
            <p className="hey-iam-text">Hey, I am</p>
            <h1 className="hero-title-inspired" style={{ margin: 0, padding: 0 }}>M Ahmad Hasham</h1>
            <div className="typewriter-container" style={{ minHeight: '60px', marginTop: '0.2rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
                <TypeAnimation
                  sequence={[
                    'Full Stack Web Engineer',
                    2000,
                    'AI & ML Innovator',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="heading-accent"
                  style={{ 
                    display: 'inline-block' 
                  }}
                />
              </span>
            </div>
          </div>

          <div className="social-pills">
            <a href="https://github.com/hasham14fw" target="_blank" rel="noopener noreferrer" className="social-pill"><i className="devicon-github-original"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/muhammad-ahmad-hasham-ba25a6352" target="_blank" rel="noopener noreferrer" className="social-pill"><i className="devicon-linkedin-plain"></i> LinkedIn</a>
            <a href="https://x.com/hasham14fw" target="_blank" rel="noopener noreferrer" className="social-pill"><i className="devicon-twitter-original"></i> X</a>
            <a href="mailto:hasham14fw@gmail.com" className="social-pill"><Mail size={16} /> Email</a>
          </div>

          <p style={{ marginTop: '2rem', fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.8', maxWidth: '800px' }}>
            I am a Full Stack Web Engineer and AI Innovator who specializes in building intelligent, end-to-end systems. My work focuses on the convergence of AI/ML and robust web development, transforming complex technical challenges into scalable digital applications. Currently pursuing a BS degree in Artificial Intelligence at Air University.
          </p>

        </div>
      </div>

      {/* Categorized Skills Section */}
      <div style={{ width: '100%', marginTop: '4rem' }}>
        <h3 className="section-title" style={{ marginBottom: '3rem' }}>
          Professional <span className="heading-accent">Expertise</span>
        </h3>
        
        <div className="skills-categories-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className="skill-category-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{ padding: '1.5rem', borderTop: '4px solid #3b82f6' }}
            >
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#fff' }}>{category.title}</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-mini-item" title={skill.name} style={{ textAlign: 'center' }}>
                    <i className={skill.icon} style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.4rem' }}></i>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Home;
