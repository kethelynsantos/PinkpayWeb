import React, { useState } from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h1 className='logo'>Pinkpay</h1>

          <nav>
            <ul className='menu-list'>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>

          <button className='button-nav' >Abrir conta</button>
         
        </div>
      </nav>
    </>
  )
}

export default Navbar

