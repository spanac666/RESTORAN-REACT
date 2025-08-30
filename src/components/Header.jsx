import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BasketIcon from './BasketIcon'
import RegistrationModal from './RegistrationModal'
import { useUser } from './UserContext'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700)
  const { user, logout } = useUser()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  const openRegistrationModal = () => {
    setShowRegistrationModal(true)
  }

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false)
  }

  return (
    <header id="zaglavlje">
      <h1>RESTORAN ŠPANAC</h1>
      {isMobile ? (
        <>
          <button className="hamburger-btn" onClick={toggleMenu} aria-label="Otvori meni">
            <span className="hamburger-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="28" height="3" rx="1.5" fill="#ff6b35"/>
                <rect y="13" width="28" height="3" rx="1.5" fill="#ff6b35"/>
                <rect y="20" width="28" height="3" rx="1.5" fill="#ff6b35"/>
              </svg>
            </span>
          </button>
          {menuOpen && (
            <nav className="dropdown-menu" style={{marginTop: '10px', background: 'none', boxShadow: 'none', border: 'none'}}>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0, background: 'none', boxShadow: 'none', border: 'none'}}>
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>POČETNA</Link></li>
                <li><Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>MENI</Link></li>
                <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>KONTAKT</Link></li>
              </ul>
            </nav>
          )}
        </>
      ) : (
        <nav id="navigacija1">
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>POČETNA</Link>
            </li>
            <li>
              <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>MENI</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>KONTAKT</Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="header-actions">
        {user ? (
          <>
            <span className="user-name">{user.name}</span>
            <button className="logout-btn" onClick={logout} title="Odjava">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#ff6b35" strokeWidth="2" fill="#fff7e6" />
                <path d="M12 8v4" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1.5" fill="#ff6b35" />
              </svg>
            </button>
          </>
        ) : (
          <button className="register-btn" onClick={openRegistrationModal}>
            REGISTRACIJA
          </button>
        )}
        <BasketIcon />
      </div>
      {showRegistrationModal && (
        <RegistrationModal onClose={closeRegistrationModal} />
      )}
    </header>
  )
}

export default Header
