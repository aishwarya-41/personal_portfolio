export default function Resume() {
  const handleDownload = () => {
    // You can replace this with your actual resume file
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Update this path to your actual resume
    link.download = 'Aishwarya_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="resume-section">
      <div className="container">
        <h2 className="section-title fade-in-up">Download My Resume</h2>
        <p className="fade-in-up fade-in-up-delay-1" style={{ marginBottom: '32px', fontSize: '1.1rem', color: 'var(--muted)' }}>
          Want to know more about my qualifications and experience? Download my resume!
        </p>
        <a 
          href="/resume.pdf" 
          download="Aishwarya_Resume.pdf"
          className="download-btn fade-in-up fade-in-up-delay-2"
          onClick={handleDownload}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  )
}


