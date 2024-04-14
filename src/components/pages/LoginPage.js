import React, { useState } from 'react';
import '../../styles/LoginPage.css';
import imagenTwitter from '../../images/twitter-logo.jpg'

const LoginPage = ({ onLoginSuccess }) => {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Valores quemados para usuario y contraseña
    const hardcodedEmail = "usuario";
    const hardcodedPassword = "pass";

    if (useremail === hardcodedEmail && password === hardcodedPassword) {
      // alert("Inicio de sesión exitoso");
      onLoginSuccess();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className='container'>
        <div className='container-mid'>
          <div class="contenedor">
            <div class="imagen">
              <img src={imagenTwitter} alt="Descripción de la imagen"/>
            </div>
            <div class="texto">
              Login
            </div>
          </div>
        </div>
        <div className='container-mid'>     
          <div className="login-container">    
            <div className="forms-containter">
              <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <input
                  type="text"
                  placeholder="useremail"
                  className="login-input"
                  value={useremail}
                  onChange={(e) => setUseremail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button">Login</button>
              </form>
                <button type="submit" className="register-button">Create Account</button>
            </div> 
          </div>         
        </div>
    </div>
  );
};

export default LoginPage;

