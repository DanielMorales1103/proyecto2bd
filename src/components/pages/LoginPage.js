import React, { useState } from 'react';
import '../../styles/LoginPage.css';

const LoginPage = ({ onLoginSuccess }) => {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: useremail, password: password }), 
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        onLoginSuccess();
      } else {
        alert(data);
      }
    } catch (error) {
      alert('Error de conexión con el servidor');
    }
  };

  return (
    <div className="login-container">
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
    </div>
  );
};

export default LoginPage;
