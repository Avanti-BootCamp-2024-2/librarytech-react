import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const response = await api.post('/login', {...credentials});
      const token = response.data.token;
      
      
      // Simulando um login bem-sucedido
      localStorage.setItem('token', token);
      navigate('/BooksPage');
    } catch (error) {
      console.error('Erro no login:', error);
      // Aqui você poderia mostrar uma mensagem de erro para o usuário
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;