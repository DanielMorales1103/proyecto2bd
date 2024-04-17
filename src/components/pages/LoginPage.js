import React, { useState } from 'react';
import '../../styles/LoginPage.css';
import imagenTwitter from '../../images/twitter-logo.jpg'

const LoginPage = ({ onLoginSuccess }) => {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(true);

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
  const handleAccount = (e) =>{

  };
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='container'>
        <div className='container-mid'>
          <div className="contenedor">
            <div className="imagen">
              <img src={imagenTwitter} alt="icon-twitter"/>
            </div>
            <div className="texto">
              Twitter
            </div>
          </div>
        </div>
        <div className='container-mid'>     
          <div className="login-container">    
            <div className="forms-containter">
              {isActive ? (
                  <form onSubmit={handleLogin} className="login-form">
                  <h2>Login</h2>
                  <input
                    type="text"
                    placeholder="user email"
                    className="login-input"
                    value={useremail}
                    onChange={(e) => setUseremail(e.target.value)}/>
                  <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                  <button type="submit" className="login-button">Login</button>
                </form>
                ) : 
              (
                <form onSubmit={handleAccount} className="login-form">
                  <h2>Create Account</h2>
                  <input
                    type="text"
                    placeholder="user name"
                    className="login-input"/>
                  <input
                    type="text"
                    placeholder="user email"
                    className="login-input"/>
                  <input
                    type="password"
                    placeholder="Password"
                    className="login-input"/>
                  <button type="submit" className="login-button">Login</button>
                </form>
              )}
              <div className="switch">
                <button 
                  onClick={handleToggle} 
                  className={`change-button ${isActive ? 'active' : ''}`}>
                  {isActive ?  'Create Account':'Login'}
                </button>
              </div>
                
            </div> 
          </div>         
        </div>
    </div>
  );
};

export default LoginPage;

