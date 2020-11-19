import React from 'react'

const Header = ({ title, center }) => {
  return (
    <header className="header">
      <h1 style={{ textAlign: center }}>{title}</h1>
    </header>
  )
}

export default Header
