import React, { useState } from 'react';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <HomePage onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
};

export default App;
