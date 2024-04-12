import React from 'react';

const HomePage = ({ onLogout }) => {
  return (
    <div>
      <h1>Bienvenido a la HomePage</h1>
      {/* Aquí puedes agregar más contenido para HomePage según sea necesario */}
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default HomePage;
