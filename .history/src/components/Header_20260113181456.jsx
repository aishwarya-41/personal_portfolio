import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
  const [active, setActive] = useState('about')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const sectionIds = ['about', 'resume', 'education', 'projects', 'skills', 'certifications', 'contact', 'languages']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible && visible.target && visible.target.id) {
        setActive(visible.target.id)
      }
    }, { rootMargin: '0px 0px -60% 0px', threshold: [0.2, 0.4, 0.6, 0.8] })
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <div className="brand">
          <span className="name">Aishwarya — Engineering Student</span>
        </div>
        <nav>
          <ul>
            <li><a className={active==='about'?'active':''} href="#about">About</a></li>
            <li><a className={active==='education'?'active':''} href="#education">Education</a></li>
            <li><a className={active==='projects'?'active':''} href="#projects">Projects</a></li>
            <li><a className={active==='skills'?'active':''} href="#skills">Skills</a></li>
            <li><a className={active==='certifications'?'active':''} href="#certifications">Certifications</a></li>
            <li><a className={active === 'languages' ? 'active' : ''} href="#languages">Languages</a></li>
            <li><a className={active==='resume'?'active':''} href="#resume">Resume</a></li>
            <li><Link to="/art">Art</Link></li>
            {/* <li 
              className="dropdown-nav"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a className="dropdown-trigger art-link">More</a>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/art">Art Gallery</Link>
                </div>
              )}
            </li> */}
            <li>
              {/* <ThemeToggle /> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


