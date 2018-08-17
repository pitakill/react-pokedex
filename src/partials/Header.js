import React from 'react'
import { Link } from 'react-router-dom'
import logo_pokemon from '../assets/logo_pokemon.svg'

const Header = _ =>
  <header className="header">
    <div className="container">
      <nav className="text-center navbar-dark">
        <Link className="navbar-brand" to="/">
          <img src={logo_pokemon} width="30" height="30" className="d-inline-block align-top" alt="" />
          {" Pokédex Virtual"}
        </Link>
      </nav>
    </div>
  </header>

export default Header
