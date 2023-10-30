import React from 'react';
import { Navbar, Footer } from '../../../src'
import { ibest, manAbout } from '../../index'
import './About.css';

function About() {
    return (
        <div>
            <Navbar />
            <div className="container-about">
                <div className="text-custom">
                    <section className="text-about">
                        <h1><strong>Com o PinkPay, suas finanças têm a cor certa para brilhar, trazendo beleza e simplicidade</strong></h1>
                    </section>
                </div>
            </div>

            <div className="container-info">
                <div className="section-info">
                    <strong> <h2>O PinkPay é um dos maiores bancos digitais do Brasil</h2> </strong>
                    <div className="list-info">
                        <div className="first-list">
                            <strong style={{ color: '#FF007F' }}><h2>35 milhões</h2></strong>
                            <p style={{ fontSize: '1.2rem' }}>de usuários ativos</p>
                        </div>
                        <div className="second-list">
                            <strong style={{ color: '#FF007F' }}><h2>+15 milhões</h2></strong>
                            <p style={{ fontSize: '1.2rem' }}>de estabelecimentos</p>
                        </div>
                        <div className="third-list">
                            <strong style={{ color: '#FF007F' }}><h2>+4100</h2></strong>
                            <p style={{ fontSize: '1.2rem' }}>colaboradores</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Section ibest start */}
            <section className="background-color">
                <div className="about">
                    <div className="trust-section">
                        <div className="ibest-text">
                            <h2>Temos o compromisso de tornar a vida dos nossos clientes e parceiros mais simples e eficaz. Nosso trabalho é reconhecido e já fomos agraciados com prêmios por nossa dedicação.</h2>
                        </div>
                        <div className="ibest-image">
                            <img src={ibest} alt="Ibest Image" />
                            <h2>Premio iBest</h2>
                            <p>Fomos eleitos Melhor Super App, Melhor Corretora de Investimentos e Melhor Banco Digital do Brasil pelo voto popular no Premio IBest 2023.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section ibest end */}

            {/* Section start */}
            <section className="containter-section">
                <div className="section-button-about">
                    <div className="about-side-left">
                        <img src={manAbout} alt="man-about" />
                    </div>

                    <div className="about-side-right">
                        <h2>Um sonho que ganhou vida</h2>
                        <p>Nossa jornada começou há 10 anos, quando um grupo de visionários fundou o PinkPay. Desde então, nos tornamos muito mais do que apenas um banco. Oferecemos um leque completo de serviços financeiros para simplificar a vida financeira das pessoas e empresas, com um foco inabalável na segurança.

                            Lançado em Campinas, São Paulo, o PinkPay cresceu rapidamente e agora conta com mais de 35 milhões de usuários ativos. Nossa missão é proporcionar mais poder ao dinheiro de nossos clientes, tornando-nos a principal escolha para suas necessidades diárias.</p>
                    </div>
                </div>
            </section>
            {/* Section end */}

            <Footer />
        </div>
    );
}

export default About;
