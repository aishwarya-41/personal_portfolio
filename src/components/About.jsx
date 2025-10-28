import { useEffect, useRef } from 'react'

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-section" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A blend of logic, creativity, and curiosity</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm <strong>Aishwarya A</strong>, an Artificial Intelligence and Data Science student at Shiv Nadar University, Chennai,
              driven by curiosity for how technology can solve real-world challenges. I love building systems that merge AI, 
              data, and design — transforming abstract ideas into practical, impactful solutions.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>🤖 AI & Data Science Enthusiast</h4>
                <p>Exploring machine learning, data-driven problem solving, and intelligent systems that learn and adapt.</p>
              </div>
              
              <div className="detail-item">
                <h4>🧩 Full-Stack Developer</h4>
                <p>Skilled in building responsive web applications using React, Flask, and Firebase — from frontend logic to backend integration.</p>
              </div>
              
              <div className="detail-item">
                <h4>📊 Analytical Thinker</h4>
                <p>Enjoy analyzing data, visualizing trends, and finding insights that can guide innovation and decision-making.</p>
              </div>
              
              <div className="detail-item">
                <h4>🌐 Lifelong Learner</h4>
                <p>Constantly experimenting with new tools, frameworks, and ideas — from AI ethics to generative models and beyond.</p>
              </div>
            </div>
            
            <div className="about-goals">
              <h3>My Goals</h3>
              <ul>
                <li>Advance in AI research and model development</li>
                <li>Build scalable and ethical AI systems</li>
                <li>Contribute to open-source projects and developer communities</li>
                <li>Bridge creativity and computation through innovative solutions</li>
                <li>Keep learning, sharing, and growing in the evolving AI landscape</li>
              </ul>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Tech Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9.09</div>
              <div className="stat-label">Current CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




