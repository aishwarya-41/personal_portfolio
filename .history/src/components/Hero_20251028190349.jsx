import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [text, setText] = useState('')
  
  const fullText = "Third-Year B.Tech Student in Artificial Intelligence and Data Science"

  useEffect(() => {
    setIsVisible(true)
    
    // Typewriter effect
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 80)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      {/* Floating bubbles */}
      <div className="floating-bubbles">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>
      
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
          <h1 className="fade-in-up">
            Hi, I'm <span className="highlight">Aishwarya</span>
          </h1>
          <h2 className="hero-subtitle fade-in-up fade-in-up-delay-1">
            <span className="typewriter">{text}</span>
          </h2>
          <p className="hero-description fade-in-up fade-in-up-delay-2">
            Enthusiastic and driven student eager to apply analytical and problem-solving skills 
            to develop practical solutions for real-world challenges. Equipped with a strong foundation 
            in artificial intelligence, data analysis, data structures, and object-oriented programming, 
            with hands-on experience across multiple programming languages.
          </p>
          <div className="hero-buttons fade-in-up fade-in-up-delay-3">
            <a href="#about" className="btn btn-primary">
              Learn More
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'animate-in' : ''}`}>
          <img 
            src="/src/assets/Aishwary.jpeg" 
            alt="Aishwarya - AI and Data Science Student"
            className="profile-image card-3d"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator fade-in-up fade-in-up-delay-5">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
