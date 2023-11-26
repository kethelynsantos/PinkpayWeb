import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="black-background"  id="footer">
            <div id="contato" className="page-inner-content footer-content">
                <div className="links-footer">
                    <h3 className='contact-contact'>Contato</h3>
                    <ul className="contact-list">
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ marginLeft: '0', marginRight: '10' }} />
                            <span>(19) 99890-9605</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '0', marginRight: '10' }} />
                            <span>pinkpay@gmail.com</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGlobe} style={{ marginLeft: '0', marginRight: '10' }} />
                            <span>www.pinkpay.com</span>
                        </li>
                    </ul>
                </div>

                <div className="logo-footer">
                    <h1 className='logo'>Pinkpay</h1>
                    <p>Do jeito pink de pagar</p>
                </div>

                <div className="links-footer">
                    <h3>Links úteis</h3>
                    <ul>
                        <li>Cupons</li>
                        <li>Blog Post</li>
                        <li>Políticas</li>
                        <li>Torne-se afiliado</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <hr className="white-line" />
                <p className="copyright-text">Copyright 2023 - Kethelyn Santos - Todos Direitos Reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
