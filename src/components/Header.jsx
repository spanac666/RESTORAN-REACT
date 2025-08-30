import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BasketIcon from './BasketIcon'
import RegistrationModal from './RegistrationModal'
import { useUser } from './UserContext'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const { user, logout } = useUser()

  const openRegistrationModal = () => {
    setShowRegistrationModal(true)
  }

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false)
  }

  return (
    <header id="zaglavlje">
      <h1>RESTORAN ŠPANAC</h1>
      <nav id="navigacija1">
        <ul>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              POČETNA
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={location.pathname === '/menu' ? 'active' : ''}
            >
              MENI
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              KONTAKT
            </Link>
          </li>
        </ul>
      </nav>
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
