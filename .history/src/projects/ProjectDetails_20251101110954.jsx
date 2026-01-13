import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '../components/Projects.jsx'
import Header from '../components/Header.jsx'
import { HashLink } from 'react-router-hash-link';
// import Footer from '../components/Footer.jsx'

export default function ProjectDetails() {
  const { projectId } = useParams()
  const project = PROJECTS.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="app-container">
        <div className="details-header details-header--alt"><Header /></div>
        <div style={{ maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
          <div className="card-surface" style={{ padding: 18 }}>
            <h2>Project not found</h2>
            <p className="muted">The project you are looking for does not exist.</p>
            <HashLink smooth to="/#projects" className="btn">
  Back to Projects
</HashLink>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="details-header details-header--alt"><Header /></div>
      <div className="project-detail-container">
        <div className="card-surface project-detail-card">
          
          {/* ✅ Project image at the top */}
          {project.image && (
            <div className="project-detail-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-detail-image"
              />
            </div>
          )}

          <div className="pill">{project.tech.join(' · ')}</div>
          <h1>{project.title}</h1>
          <p className="muted">{project.summary}</p>
          {project.description && <p>{project.description}</p>}
          <ul>
            {project.features?.length ? (
              project.features.map((f, i) => <li key={i}>{f}</li>)
            ) : null}
          </ul>

          <div className="project-detail-actions">
            <Link className="btn" to="/#projects">Back to Projects</Link>
            {project.github && (
              <a 
                className="btn btn-primary" 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
