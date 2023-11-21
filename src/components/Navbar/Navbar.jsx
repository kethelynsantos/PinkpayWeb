import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h1 className='logo'>Pinkpay</h1>

          <div className="mobile-menu" onClick={() => setMenuActive(!menuActive)}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="menu-navbar">
            <ul className='nav-list'>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/servicos">Serviços</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>


            <div className="buttons-navbar">
              <button className='button-register'>Cadastrar</button>
              <button className='button-nav'>Entrar</button>
            </div>


          </div>
          <div className={`menu-mobile-side ${menuActive && 'show'}`}>
            <div className="close-menu" onClick={() => setMenuActive(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>

            <div className="menu-responsive">
              <ul className='nav-list-responsive'>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/about">Sobre</Link>
                </li>
                <li>
                  <Link to="/servicos">Serviços</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
              </ul>


              <div className="buttons-navbar">
                <button className='button-register'>Cadastrar</button>
                <button className='button-nav'>Entrar</button>
              </div>
            </div>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
