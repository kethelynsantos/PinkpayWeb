import React, { useEffect, useState } from 'react';
import { useUser } from '../../UserContext';
import axiosInstance from '../../sevices/axiosInstance';
import './Login.css';

function Login() {
  const { state, dispatch } = useUser();

  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Token atual:', state.token);
  }, [state.token]);

  const loginUser = async (event) => {
    event.preventDefault();
  
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
  
      alert('Login bem-sucedido!');
  
    } catch (error) {
      console.error('Erro ao fazer login:', error.response.data);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      // Verifica se há um token antes de chamar a função
      if (state.token) {
        await fetchBalance();
      }
    };
  
    fetchData();
  }, [state.token]);
  
  const fetchBalance = async () => {
    try {
      const response = await axiosInstance.get('balance/', {
        headers: {
          'Authorization': `Token ${state.token}`,
        },
      });
  
      console.log('Resposta do endpoint balance/', response.data);
  
      const currentBalance = response.data.current_balance;
  
      if (currentBalance !== undefined) {
        alert(`Seu saldo atual é: ${currentBalance}`);
      } else {
        console.error('Propriedade não encontrada na resposta.');
      }
  
    } catch (error) {
      console.error('Erro ao obter saldo:', error.response.data);
    }
  };
  

  return (
    <div className="container-login">
      {/* Conteúdo da primeira seção */}
      <div className="content first-content">
        <div className="first-column">
          <h2 className="title title-primary">Bem-vindo de volta!</h2>
          <p className="description description-primary"> Faça login e volte a desfrutar desse mundo</p>
          <p className="description description-primary">pink que vai melhorar sua vida financeira</p>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Login</h2>
          <p className="description description-second">Preencha os campos e conecte-se conosco</p>
          <form className="form" onSubmit={loginUser}>
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
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-second">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
