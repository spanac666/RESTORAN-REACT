import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import TestContact from './pages/TestContact'
import AdminDashboard from './components/AdminDashboard'
import BasketProvider from './components/BasketProvider'
import { UserProvider } from './components/UserContext'
import './styles/global.css'

function App() {
  return (
    <BasketProvider>
      <UserProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/*" element={
                <>
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/menu" element={<Menu />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </BasketProvider>
  )
}

export default App
