import { Link } from 'react-router-dom'

export default function ProjectsHeader() {
  return (
    <header className="art-header">
      <div className="nav-wrap">
        <div className="brand">
          <span className="name">Aishwarya — Art Gallery</span>
        </div>
        <nav>
          <Link to="/" className="back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </nav>
      </div>
    </header>
  )
}


