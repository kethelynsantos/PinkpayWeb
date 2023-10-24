import React from 'react'
import imageMan from '../../assets/homem-rosa.png'
import './Section.css';

function Section() {
    return (
        <div className="containter-section">
            <div class="section-button">
                <div class="section-side-left">
                    <img src={imageMan} alt="logo-imageMan" />
                </div>

                <div className="section-side-right">
                    <h2>Pinkpay Empréstimos</h2>

                    <p>Crédito seguro, transparente e que cabe no seu bolso. Você pode simular em tempo real seu empréstimo e escolher a opção que mais funciona pra você.</p>

                    <button className='button-section'>Empréstimo Pinkpay</button>
                </div>

            </div>
        </div>

    )
}

export default Section