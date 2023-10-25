import React from 'react'
import { Navbar } from '../../components'
import imageMan from '../../assets/homem-rosa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

const Home = () => (
  <div className="main-home">
    <Navbar />
    {/* Header start */}
    <div class="container-header">
      <div className="containter-width">
        <div class="header-botton-side-left">
          <h2>Do jeito <span>Pink</span> de pagar - Facilitando sua vida financeira e tornando sonhos realidade</h2>

          <button className='button-header'>Abrir conta Pinkpay &#8594;</button>
        </div>
      </div>
    </div>
    {/* Header end */}

    {/* Section start */}
    <div className="containter-section">
      <div class="section-button">
        <div class="section-side-left">
          <img src={imageMan} alt="logo-imageMan" />
        </div>

        <div className="section-side-right">
          <h2>Pinkpay Empréstimos</h2>

          <p>Crédito seguro, transparente e que cabe no seu bolso. Você pode simular em tempo real seu empréstimo e escolher a opção que mais funciona pra você.</p>

          <a href="">
            <h3>Empréstimo Pinkpay <FontAwesomeIcon icon={faArrowRight} />
            </h3>
          </a>

        </div>

      </div>
    </div>
    {/* Section end */}

    



  </div>
);

export default Home