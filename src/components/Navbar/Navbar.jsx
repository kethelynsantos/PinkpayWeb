import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  useEffect(() => {
    const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
    mobileNavbar.init();
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h1 className='logo'>Pinkpay</h1>

          <div className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          <div className="menu-responsive">
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

          <div className="nav-icon-container">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
