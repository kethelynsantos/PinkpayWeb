import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h1 className='logo'>Pinkpay</h1>

          <div className="menu-responsive">
            <ul className='menu-list'>
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
