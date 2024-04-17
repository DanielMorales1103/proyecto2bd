import React, { useState } from 'react';
import imagenUserDef from '../images/user.png'
import '../styles/perfil.css'
import Tweets from './tweets';

function Profile({isOwnProfile }) {
    const profileData = {
        nombreUsuario: "JohnDoe",
        correoElectronico: "johndoe@example.com",
        fechaCreacion: "2021-04-01",
        esVerificado: true,
        seguidos: [
          { nombreUsuario: "User1", esVerificado: false, desdeFecha: "2023-01-15", esSilenciado: false, esBloqueado: false },
          { nombreUsuario: "User2", esVerificado: true, desdeFecha: "2023-02-20", esSilenciado: true, esBloqueado: false },
          { nombreUsuario: "User3", esVerificado: false, desdeFecha: "2023-03-05", esSilenciado: false, esBloqueado: true },
          { nombreUsuario: "User4", esVerificado: true, desdeFecha: "2023-04-10", esSilenciado: false, esBloqueado: false },
          { nombreUsuario: "User5", esVerificado: false, desdeFecha: "2023-05-15", esSilenciado: true, esBloqueado: true }
        ],
        seguidores: [
          { nombreUsuario: "Follower1", esVerificado: false, desdeFecha: "2023-01-10", esSilenciado: false, esBloqueado: false },
          { nombreUsuario: "Follower2", esVerificado: true, desdeFecha: "2023-02-25", esSilenciado: false, esBloqueado: true },
          { nombreUsuario: "Follower3", esVerificado: false, desdeFecha: "2023-03-30", esSilenciado: true, esBloqueado: false },
          { nombreUsuario: "Follower4", esVerificado: true, desdeFecha: "2023-04-05", esSilenciado: false, esBloqueado: false }
        ]
      };
    const [selectedTab, setSelectedTab] = useState('tweets'); 
    
    const actionButton = isOwnProfile ? (
        <button className="edit-button">✏️</button>
    ) : (
        <button className="follow-button">+</button>
    );

    const renderVerifiedIcon = (isVerified) => {
      if (isVerified) {
        return <span style={{ color: 'blue' }}>✔️</span>;
      }
      return null;
    };
  
    const renderUserList = (users) => {
      return users.map((user, index) => (
        <div key={index} className="user-list-item">
          <img src={imagenUserDef} alt="User" className="user-image" />
          <div className='user-info'>
            <div className='name-user-info'>
                <span>{user.nombreUsuario} {renderVerifiedIcon(user.esVerificado)}</span>
                <span>{user.esSilenciado ? 'Silenciado' : ''} {user.esBloqueado ? 'Bloqueado' : ''}</span>
            </div>            
            <span>{user.desdeFecha}</span>            
          </div>
        </div>
      ));
    };
  
    return (
      <div className="profile-container">
        <div className="profile-header">
          <img src={imagenUserDef} alt="Profile" className="profile-image" />
          <div>
            <h2>{profileData.nombreUsuario} {renderVerifiedIcon(profileData.esVerificado)}</h2>
            <p>{profileData.correoElectronico}</p>
            <p>{profileData.fechaCreacion}</p>
          </div>
          {/* <button className="edit-button">✏️</button> */}
          {actionButton}
        </div>
        <div className="profile-nav">
          <button onClick={() => setSelectedTab('tweets')} className={selectedTab === 'tweets' ? 'active' : ''}>Tweets</button>
          <button onClick={() => setSelectedTab('seguidos')} className={selectedTab === 'seguidos' ? 'active' : ''}>Seguidos</button>
          <button onClick={() => setSelectedTab('seguidores')} className={selectedTab === 'seguidores' ? 'active' : ''}>Seguidores</button>
        </div>
        <div className="profile-content">
        {selectedTab === 'tweets' && (
          <Tweets/>
        )}
        {selectedTab === 'seguidos' && (
          <div className="user-list">
            {renderUserList(profileData.seguidos)}
          </div>
        )}
        {selectedTab === 'seguidores' && (
          <div className="user-list">
            {renderUserList(profileData.seguidores)}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;