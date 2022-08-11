import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <nav className="header__nav container__S container">
            <Link to="/" className="header__title">ALEXIS NESTEBY</Link>
        </nav>
    </header>
  )
}

export default Header