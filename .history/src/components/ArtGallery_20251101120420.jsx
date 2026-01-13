import { useState } from 'react'

const artPieces = [
  {
    id: 1,
    title: 'Digital Landscape',
    category: 'digital',
    image: '/art/art1.png',
    description: 'A beautiful digital landscape created using digital art tools.',
    year: '2024'
  },
  {
    id: 2,
    title: 'Abstract Expression',
    category: 'abstract',
    image: '/art/art2.png',
    description: 'Exploring colors and forms in abstract art.',
    year: '2023'
  },
  {
    id: 3,
    title: 'Portrait Study',
    category: 'traditional',
    image: '/art/art3.png',
    description: 'Pencil sketch portrait focusing on light and shadow.',
    year: '2024'
  },
  {
    id: 4,
    title: "Nature's Harmony",
    category: 'digital',
    image: '/art/art4.png',
    description: 'Capturing the beauty of nature through digital art.',
    year: '2023'
  },
  {
    id: 5,
    title: 'Color Symphony',
    category: 'abstract',
    image: '/art/art5.png',
    description: 'A vibrant exploration of color relationships.',
    year: '2024'
  },
  {
    id: 6,
    title: 'Watercolor Dreams',
    category: 'traditional',
    image: '/art/art6.png',
    description: 'Delicate watercolor painting with soft tones.',
    year: '2023'
  },
   {
    id: 7,
    title: 'Watercolor Dreams',
    category: 'traditional',
    image: '/art/art6.png',
    description: 'Delicate watercolor painting with soft tones.',
    year: '2023'
  },
   {
    id: 8,
    title: 'Watercolor Dreams',
    category: 'traditional',
    image: '/art/art8.png',
    description: 'Delicate watercolor painting with soft tones.',
    year: '2023'
  },
   {
    id: 9,
    title: 'Watercolor Dreams',
    category: 'traditional',
    image: '/art/art6.png',
    description: 'Delicate watercolor painting with soft tones.',
    year: '2023'
  }
]

const categories = ['all', 'digital', 'traditional', 'abstract']

export default function ArtGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedArt, setSelectedArt] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredArt =
    selectedCategory === 'all'
      ? artPieces
      : artPieces.filter((art) => art.category === selectedCategory)

  const openModal = (art) => {
    setSelectedArt(art)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedArt(null), 300)
  }

  return (
    <div className="art-gallery">
      <div className="container">
        <h2 className="section-title fade-in-up">Art Gallery</h2>
        <p
          className="fade-in-up fade-in-up-delay-1"
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '1.1rem',
            color: 'var(--muted)',
          }}
        >
          Exploring creativity through various mediums and styles
        </p>

        {/* Category Filter */}
        <div className="gallery-filters fade-in-up fade-in-up-delay-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Art Grid */}
        <div className="art-grid fade-in-up fade-in-up-delay-3">
          {filteredArt.map((art, index) => (
            <div
              key={art.id}
              className="art-card card-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(art)}
            >
              <div className="art-image-wrapper">
                <img src={art.image} alt={art.title} className="art-image" />
                <div className="art-overlay">
                  <h3>{art.title}</h3>
                  <p>{art.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {isModalOpen && selectedArt && (
        <div className="art-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedArt.image}
              alt={selectedArt.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedArt.title}</h3>
              <p className="modal-year">{selectedArt.year}</p>
              <p className="modal-description">{selectedArt.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
