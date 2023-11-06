import React from 'react'
import { Navbar, Card, ImageVariable, Footer } from '../../../src'
import { imageMan, card1, card2, card3, trustImage, image1, image2, image3, image4, image5 } from '../../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css'

const Home = () => (
  <main className="main-home">
    {/* Header start */ }
    <header>
      <Navbar />
    </header>
    {/* Header end */ }

    {/* Info start */ }
    <section className="container-info-main">
      <div className="containter-width">
        <div className="header-botton-side-left">
          <h2>Do jeito <span>Pink</span> de pagar - Facilitando sua vida financeira e tornando sonhos realidade</h2>

          <button className='button-header'>Abrir conta Pinkpay &#8594;</button>
        </div>
      </div>
    </section>
    {/* Info end */ }

    {/* Section start */ }
    <section className="containter-section">
      <div className="section-button">
        <div className="section-side-left">
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
    </section>
    {/* Section end */ }

    {/* Card start */ }
    <section className="card-main">
      <h1>Sua liberdade financeira em tons de <span>Pink</span></h1>
      <div className="card-container">
        <article className="card-item">
          <Card image={card1} />
          <h3>Conta digital</h3>
          <p>Abra uma conta digital de forma rápida e fácil, sem burocracia.</p>
        </article >
        <article className="card-item">
          <Card image={card2} />
          <h3>Cartão sem anuidade</h3>
          <p>Tenha um cartão PinkPay para fazer compras online e presenciais.</p>
        </article >
        <article className="card-item">
          <Card image={card3} />
          <h3>Investimentos</h3>
          <p>Acesse opções de investimentos para fazer seu dinheiro render.</p>
        </article >
      </div>
    </section>
    {/* Card end */ }

    {/* Section trust start */ }
    <section className="trust-section">
      <div className="trust-text">
        <h2>As maiores <span>empresas do mundo</span> confiam na gente</h2>
      </div>
      <div className="trust-image">
        <img src={trustImage} alt="Trust Image" />
      </div>
    </section>
    {/* Section trust start */ }

    {/* ImageVariable start */ }
    <section className="image-section">
      <ImageVariable width="240px" src={image1} alt="Image 1" />
      <ImageVariable width="153px" src={image2} alt="Image 2" />
      <ImageVariable width="263px" src={image3} alt="Image 3" />
      <ImageVariable width="208px" src={image4} alt="Image 4" />
      <ImageVariable width="78px" src={image5} alt="Image 5" />
    </section>
    {/* ImageVariable end */ }

    <Footer />

  </main >
);

export default Home