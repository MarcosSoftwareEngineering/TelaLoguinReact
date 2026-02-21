import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

const Login = () => { // Padronizado para Login (sem o u)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os Dados: " + username + " " + password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Marvin Site Builders</h1>

        <div className="input-field">
          <input 
            type="email" 
            placeholder="E-mail"
            onChange={(e) => setUsername(e.target.value)} // Corrigido para value
          />
          <FaUser className="icon" />
        </div>

        <div className="input-field">
          <input 
            type="password" 
            placeholder="Senha" 
            onChange={(e) => setPassword(e.target.value)} // Corrigido para value
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button type="submit">Entrar</button>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
     </form>
    </div>
  );
}; // Certifique-se de que ESTA chave fecha a const Login

export default Login