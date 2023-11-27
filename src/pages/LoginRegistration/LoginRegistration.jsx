import React, { useEffect, useState } from 'react';
import { useUser } from '../../UserContext';
import axiosInstance from '../../sevices/axiosInstance';
import './LoginRegistration.css';

function LoginRegistration() {
  const { state, dispatch } = useUser();

  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('Token atual:', state.token);
  }, [state.token]);

  const createUserAndLogin = async (event) => {
    event.preventDefault();

    try {
      // Criação do usuário
      const response = await axiosInstance.post(
        'customuser/register/',
        {
          cpf: cpf,
          password: password,
        },
        {
          headers: {
            'Authorization': 'Token fd478484c6a5192225e424c463b114ffe5143a30',
          },
        }
      );

      console.log('Usuário criado com sucesso:', response.data);

      // Atualiza o token no estado global
      dispatch({ type: 'SET_TOKEN', payload: response.data.token });

      // Realiza automaticamente o login após criar o usuário
      await loginUser();

    } catch (error) {
      console.error('Erro ao criar usuário:', error.response.data);
    }
  };

  const loginUser = async () => {
    try {
      const login = await axiosInstance.post(
        'auth/token/login/',
        {
          cpf: cpf,
          password: password,
        },
        {
          headers: {
            'Authorization': `Token fd478484c6a5192225e424c463b114ffe5143a30`,
          },
        }
      );

      // Atualiza o token no estado global
      dispatch({ type: 'SET_TOKEN', payload: login.data.auth_token });

    } catch (error) {
      console.error('Erro ao fazer login:', error.response.data);
    }
  };

  const createClient = async (event) => {
    event.preventDefault();

    try {
      const token = state.token;

      const response = await axiosInstance.post(
        'client/',
        {
          name: name,
          birth_date: birthdate,
          phone: phoneNumber,
          email: email,
        },
        {
          headers: {
            'Authorization': `Token ${token}`,
          },
        }
      );

      console.log('Cliente criado com sucesso:', response.data);

      alert('Cliente criado com sucesso!');

    } catch (error) {
      if (error.response) {
        console.error('Erro ao criar cliente:', error.response.data);
      } else {
        console.error('Erro ao criar cliente:', error.message);
      }
    }
  };

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
          <h2 className="title title-primary">Realize seu cadastro!</h2>
          <p className="description description-primary"> Realize seu cadastro e comece já essa aventura</p>
          <p className="description description-primary">cor de rosa com o melhor banco do Brasil</p>
          <button id="signin" className="btn btn-primary">Cadastrar</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Crie sua conta</h2>
          <p className="description description-second">Preencha os campos e solicite sua conta Pinkpay</p>
          <form className="form" onSubmit={createUserAndLogin}>
            <label className="label-input" htmlFor="cpf">
              <input
                id="cpf"
                type="text"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
              />
            </label>
            <label className="label-input" htmlFor="password">
              <input
                id="password"
                type="password"
                placeholder="Crie uma senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-second">
              Criar
            </button>
          </form>
        </div>
      </div>

      {/* Conteúdo da segunda seção */}
      <div className="content second-content">
        <div className="first-column">
          <h2 className="title title-primary">Olá, pessoa!</h2>
          <p className="description description-primary">Entre com os seus dados e abra</p>
          <p className="description description-primary">as portas para um mundo financeiro Pink</p>
          <button id="signup" className="btn btn-primary">Criar conta</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">cadastre-se</h2>
          <p className="description description-second">e comece agora a desfrutar desse mundo Pink</p>
          <form className="form" onSubmit={createClient}>
            <label className="label-input" htmlFor="name">
              <input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="label-input" htmlFor="birthdate">
              <input
                id="birthdate"
                type="text"
                placeholder="Digite sua data de nascimento (YYYY-MM-DD)"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </label>
            <label className="label-input" htmlFor="phoneNumber">
              <input
                id="phoneNumber"
                type="text"
                placeholder="Digite seu número de celular"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label className="label-input" htmlFor="email">
              <input
                id="email"
                type="text"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button className="btn btn-second">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegistration;
