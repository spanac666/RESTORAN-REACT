import React, { useState } from 'react'
import './Home.css'


const Home = () => {
  const [showMap, setShowMap] = useState(false)
  const [formData, setFormData] = useState({
    ime: '',
    poruka: ''
  })

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
    setFormData({ ime: '', poruka: '' })
  }

  return (
    <div className="main-about">
      <div className="hero-section">
        <img 
          src="/slike/logo.jpeg" 
          alt="Restaurant Logo" 
          className="hero-logo"
        />
        <h1 className="hero-title">Dobrodošli u naš restoran!</h1>
        <p className="hero-description">Uživajte u najboljoj hrani u gradu. Sviježi sastojci, tradicionalni recepti i savršen ukus!</p>
        <button className="hero-btn modern-btn" onClick={() => window.location.href = '/menu'}>
          <span>Pogledaj meni</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="content-sections">
        <div className="map-container modern-card">
          <div className="card-header">
            <h3 className="card-title">📍 Naša lokacija</h3>
            <p className="card-subtitle">Hover ovde da vidite mapu</p>
          </div>
          <div 
            className="map-overlay"
            onMouseEnter={() => setShowMap(true)}
            onMouseLeave={() => setShowMap(false)}
          >
            {showMap ? (
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.234567890123!2d15.8947234!3d45.8181234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU2FudGnEh2V2YSA5LCAxMDI5OCBPYm9yb3ZvIEJpc3RyYW5za28sIENyb2F0aWE!5e0!3m2!1sen!2s!4v1625234567890"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location - Šantićeva 9, 10298 Oborovo Bistransko, Croatia"
                ></iframe>
              </div>
            ) : (
              <div className="map-placeholder">
                <p>🗺️ Hover da vidite mapu restorana</p>
                <p className="address-text">Šantićeva 9, 10298 Oborovo Bistransko, Croatia</p>
              </div>
            )}
          </div>
        </div>

        <div className="registracija modern-card">
          <div className="card-header">
            <h2 className="card-title">💬 Kontaktiraj nas</h2>
            <p className="card-subtitle">Pošaljite nam poruku</p>
          </div>
          <form onSubmit={handleSubmit} className="modern-form">
            <div className="form-group modern-input-group">
              <label htmlFor="ime">Ime:</label>
              <input
                type="text"
                id="ime"
                name="ime"
                value={formData.ime}
                onChange={handleInputChange}
                placeholder="Unesite vaše ime..."
                required
              />
            </div>
            <div className="form-group modern-input-group">
              <label htmlFor="poruka">Poruka:</label>
              <textarea
                id="poruka"
                name="poruka"
                rows="4"
                value={formData.poruka}
                onChange={handleInputChange}
                placeholder="Vaša poruka..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary modern-submit-btn">
              <span>Pošalji poruku</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
