import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  // chuyen mcolor khi click vao ptu do
  const [activeTab, setActiveTab] = useState('Home')

  // chuyen trang khi gan duong link tren url
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('Home')
    } else if (location.pathname === '/add') {
      setActiveTab('AddContact')
    } else if (location.pathname === '/about') {
      setActiveTab('About')
    }
  }, [location])

  return (
    <div className="header">
      <p className="logo div">Cantact App</p>
      <div className="header-right">
        <Link to="/">
          <div
            className={`${activeTab === 'Home' ? 'active' : ''} div`}
            onClick={() => setActiveTab('Home')}>
            Home
          </div>
        </Link>
        <Link to="/add">
          <div
            className={`${activeTab === 'AddContact' ? 'active' : ''} div`}
            onClick={() => setActiveTab('AddContact')}>
            Add Contact
          </div>
        </Link>
        <Link to="/about">
          <div
            className={`${activeTab === 'About' ? 'active' : ''} div`}
            onClick={() => setActiveTab('About')}>
            About
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
