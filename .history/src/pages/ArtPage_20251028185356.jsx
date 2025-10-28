import ArtHeader from '../components/ArtHeader.jsx'
import ArtGallery from '../components/ArtGallery.jsx'
// import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'

export default function ArtPage() {
  return (
    <div className="app-container">
      <ArtHeader />
      <main>
        <ArtGallery />
      </main>
      {/* <Footer /> */}
      <BackToTop />
    </div>
  )
}