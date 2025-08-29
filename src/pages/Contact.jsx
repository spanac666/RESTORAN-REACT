import React, { useState, useEffect } from 'react'
import './Contact.css'

const Contact = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    poruka: ''
  })

  const images = [
    '/slike/slika-1.jpg',
    '/slike/slika-2.jpg',
    '/slike/slika-3.jpg',
    '/slike/slika-4.jpg',
    '/slike/slika-5.jpg',
    '/slike/slika-6.jpg',
    '/slike/slika-7.jpg',
    '/slike/slika-8.jpg',
    '/slike/slika-9.jpg',
    '/slike/slika-10.jpg'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Hvala ${formData.ime}! Vaša poruka je poslana: "${formData.poruka}"`)
    setFormData({ ime: '', email: '', telefon: '', poruka: '' })
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 4000) // Change image every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isAutoSliding, images.length])

  // Pause auto-slide when user interacts
  const handleManualNavigation = (action) => {
    setIsAutoSliding(false)
    action()
    // Resume auto-slide after 10 seconds
    setTimeout(() => setIsAutoSliding(true), 10000)
  }

  return (
    <div className="main-contact">
      <div className="contact-header" id="kontakt-header">
        <h1>Kontakt</h1>
        <p>Dobrodošli u Restoran Španac - najbolja hrana u gradu!</p>
        
        {/* Quick navigation menu */}
        <div className="quick-nav">
          <a href="#kontakt-forma" className="nav-link">📝 Forma</a>
          <a href="#kontakt-informacije" className="nav-link">📞 Info</a>
          <a href="#galerija" className="nav-link">🖼️ Galerija</a>
        </div>
      </div>

      <div className="contact-content" id="kontakt-info">
        <div className="contact-form-section" id="kontakt-forma">
          <h2>Pošaljite nam poruku</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="ime">Ime:</label>
              <input
                type="text"
                id="ime"
                name="ime"
                value={formData.ime}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefon">Telefon:</label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="poruka">Poruka:</label>
              <textarea
                id="poruka"
                name="poruka"
                value={formData.poruka}
                onChange={handleInputChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Pošalji poruku</button>
          </form>
        </div>

        <div className="contact-info-section" id="kontakt-informacije">
          <h2>Kontakt informacije</h2>
          <div className="info-item">
            <h3>📍 Adresa</h3>
            <p>Šantićeva 9<br />10298 Oborovo Bistransko<br />Croatia</p>
          </div>

          <div className="info-item">
            <h3>📞 Telefon</h3>
            <p>+385 91 5 406 406</p>
            <a 
              href="https://wa.me/385123456789?text=Pozdrav!%20Interesuje%20me%20rezervacija%20u%20Restoranu%20Španac."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              💬 WhatsApp Chat
            </a>
          </div>

          <div className="info-item">
            <h3>📧 Email</h3>
            <p>spanac666@gmail.com</p>
            <a 
              href="mailto:spanac666@gmail.com?subject=Upit - Restoran Španac&body=Pozdrav,%0A%0AŽelim da postavim upit o vašem restoranu.%0A%0AHvala!"
              className="email-button"
            >
              ✉️ Pošalji Email
            </a>
          </div>

          <div className="info-item">
            <h3>🕒 Radno vreme</h3>
            <p>Ponedeljak - Nedelja: 11:00 - 23:00</p>
          </div>
        </div>
      </div>

      <div className="gallery-section" id="galerija">
        <h2>Galerija restorana</h2>
        <div className="image-slider">
          <button 
            className="slider-btn prev" 
            onClick={() => handleManualNavigation(prevImage)}
            title="Prethodna slika"
          >
            ‹
          </button>
          <div className="slider-container">
            <img 
              src={images[currentImageIndex]} 
              alt={`Restaurant ${currentImageIndex + 1}`}
              className="slider-image"
              onError={(e) => {
                console.log(`Image not found: ${e.target.src}`)
                e.target.src = '/slike/logo.jpeg' // Fallback image
              }}
            />
          </div>
          <button 
            className="slider-btn next" 
            onClick={() => handleManualNavigation(nextImage)}
            title="Sledeća slika"
          >
            ›
          </button>
        </div>
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleManualNavigation(() => setCurrentImageIndex(index))}
              title={`Slika ${index + 1}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
