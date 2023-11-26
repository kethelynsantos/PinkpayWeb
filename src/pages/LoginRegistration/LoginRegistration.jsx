import React, { useEffect } from 'react';
import './LoginRegistration.css'; 

function LoginRegistration() {
  useEffect(() => {
    const btnSignin = document.querySelector("#signin");
    const btnSignup = document.querySelector("#signup");
    const body = document.querySelector("body");

    const handleSigninClick = () => {
      body.className = "sign-in-js";
    };

    const handleSignupClick = () => {
      body.className = "sign-up-js";
    };

    btnSignin.addEventListener("click", handleSigninClick);
    btnSignup.addEventListener("click", handleSignupClick);

    // Limpando os ouvintes de eventos quando o componente é desmontado
    return () => {
      btnSignin.removeEventListener("click", handleSigninClick);
      btnSignup.removeEventListener("click", handleSignupClick);
    };
  }, []);

  return (
    <div className="container-login">
      {/* Conteúdo da primeira seção */}
      <div className="content first-content">
        <div className="first-column">
          <h2 className="title title-primary">Bem vindo de volta!</h2>
          <p className="description description-primary">Para se manter conectado conosco</p>
          <p className="description description-primary">por favor faça login com os seus dados</p>
          <button id="signin" className="btn btn-primary">Entrar</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Crie sua conta</h2>
          <p className="description description-second">Preencha os campos e solicite sua conta Pinkpay</p>
          <form className="form">
            <label className="label-input" htmlFor="">
              <input type="text" placeholder="Digite seu CPF" />
            </label>
            <label className="label-input" htmlFor="">
              <input type="password" placeholder="Crie uma senha" />
            </label>
            <button className="btn btn-second">Cadastre-se</button>
          </form>
        </div>
      </div>

      {/* Conteúdo da segunda seção */}
      <div className="content second-content">
        <div className="first-column">
          <h2 className="title title-primary">Olá, pessoa!</h2>
          <p className="description description-primary">Entre com os seus dados e abra</p>
          <p className="description description-primary">as portas para um mundo financeiro Pink</p>
          <button id="signup" className="btn btn-primary">Cadastre-se</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">faça login</h2>
          <p className="description description-second">e comece agora a desfrutar desse mundo Pink</p>
          <form className="form">
            <label className="label-input" htmlFor="">
              <input type="email" placeholder="Digite seu CPF" />
            </label>
            <label className="label-input" htmlFor="">            
              <input type="password" placeholder="Digite sua senha" />
            </label>
            <a className="password" href="#">Esqueci minha senha</a>
            <button className="btn btn-second">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegistration;
