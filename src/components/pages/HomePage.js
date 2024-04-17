import React, { useState } from 'react';
import '../../styles/HomePage.css';
import imagenUserDef from '../../images/user.png'
import logoutImg from '../../images/logout.png'
import Tweets from '../tweets';
import Profile from '../perfil';
import Twittear from '../twittear';

const HomePage = ({ onLogout }) => {
  const [activeView, setActiveView] = useState('Home');
  const [hoverItem, setHoverItem] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const userName = "Daniel1103"

  const changeView = (view) => {
    if (view !== 'Perfil') {
      setSelectedUser(null);
    }
    setActiveView(view);
  };
  const handleUserClick = (username) => {
    setSelectedUser(username);
    changeView('Perfil');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'Home':
        return <Tweets onUserClick={handleUserClick}/>
      case 'Perfil':
        return <Profile isOwnProfile={!selectedUser || selectedUser === userName}/>
      case 'Twittear':
        return <Twittear/>
      default:
        return <Tweets onUserClick={handleUserClick}/>
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Menú lateral */}
      <div style={{ width: '20%', backgroundColor: 'rgb(16, 160, 230)', height: '100%', overflowY: 'auto', textAlign: 'center', display:'flex', 
      flexDirection: 'column', alignItems:'center' }}>
        <div className="imagen-user">
          <img src={imagenUserDef} alt="user-icon"/>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, width: '70%' }}>
          <li style={{padding: '8px', cursor: 'pointer', borderRadius: '5px',
              backgroundColor: activeView === 'Home' ? '#00688B' : hoverItem === 'Home' ? '#B0E0E6' : '#ADD8E6',
              marginBottom: '2em'}}
            onMouseEnter={() => setHoverItem('Home')}
            onMouseLeave={() => setHoverItem(null)}
            onClick={() => changeView('Home')}>
            Home
          </li>
          <li
            style={{padding: '8px', cursor: 'pointer', borderRadius: '5px',
              backgroundColor: activeView === 'Perfil' ? '#00688B' : hoverItem === 'Perfil' ? '#B0E0E6' : '#ADD8E6',
              marginBottom: '2em'}}
            onMouseEnter={() => setHoverItem('Perfil')}
            onMouseLeave={() => setHoverItem(null)}
            onClick={() => changeView('Perfil')}>
            Perfil
          </li>
          <li
            style={{padding: '8px', cursor: 'pointer', borderRadius: '5px',
              backgroundColor: activeView === 'Twittear' ? '#00688B' : hoverItem === 'Twittear' ? '#B0E0E6' : '#ADD8E6',
              marginBottom: '2em'}}
            onMouseEnter={() => setHoverItem('Twittear')}
            onMouseLeave={() => setHoverItem(null)}
            onClick={() => changeView('Twittear')}>
            Twittear
          </li>
        </ul>
      </div>


      <div style={{ width: '80%', height: '100%' }}>
        <div style={{ height: '10%', backgroundColor: 'rgb(16, 160, 230)', padding: '0.5em', gap:'2em',display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          {userName}
          <button className='cerrar-sesion' onClick={onLogout}>
            Cerrar Sesión 
            <img src={logoutImg} alt="logout icon" /></button>
        </div>
        
        <div className="home-all-container">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
