import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Languages from './components/Languages.jsx'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <section id="about"><About /></section>

        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="certifications"><Certifications /></section>
        <section id="languages"><Languages /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
