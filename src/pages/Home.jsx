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

        <div className="about-section modern-card">
          <div className="card-header about-header">
            <h2 className="card-title about-title">Nešto o nama</h2>
          </div>
          <div className="about-text">
            <p className="about-highlight">
              Naš restoran s dugom tradicijom mjesto je okupljanja za sve generacije. Nudimo raznovrsnu i jednostavnu ponudu hrane: pizza iz krušne peći, sočni burgeri, grill specijaliteti i domaći prilozi.
            </p>
            <p>
              Sva jela pripremamo od domaćih i prirodno uzgojenih namirnica, s posebnom pažnjom na kvalitetu, svježinu i autentičnost okusa. Naša filozofija je jednostavna: zdrava hrana, ugodna atmosfera i pristupačne cijene.
            </p>
            <p>
              Uživajte u modernom ambijentu s toplim bojama, dinamičnim svjetlima i ljubaznim osobljem. Organiziramo proslave, rođendane i druženja uz glazbu i posebne menije. Posjetite nas i osjetite zašto nas gosti biraju već generacijama!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
