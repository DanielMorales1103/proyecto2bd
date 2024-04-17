import React, { useState } from 'react';
import '../styles/tweets.css';
function Tweets({onUserClick }) {
    const tweetsData = [
        {
          usuario: "User1",
          contenido: "Este es un tweet de ejemplo sin imagen.",
          fechaPublicacion: "2024-04-15",
          numLikes: 5,
          tieneMedia: false,
          comentarios: [
            { usuario: "Comentador1", contenido: "¡Interesante tweet!", fechaComentario: "2024-04-16" },
            { usuario: "Comentador2", contenido: "No estoy de acuerdo.", fechaComentario: "2024-04-16" }
          ],
          hashtags: ["#Ejemplo", "#React"],
          imagen: null
        },
        {
          usuario: "User2",
          contenido: "Este tweet incluye una imagen.",
          fechaPublicacion: "2024-04-14",
          numLikes: 10,
          tieneMedia: true,
          comentarios: [
            { usuario: "Comentador3", contenido: "¡Qué buena foto!", fechaComentario: "2024-04-15" }
          ],
          hashtags: ["#Foto", "#Inspiración"],
          imagen: //"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
           "https://img.redbull.com/images/c_fill,w_1200,h_600,g_auto,f_auto,q_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon"
        }
    ];
      
  const [showComments, setShowComments] = useState({});

  const toggleComments = (index) => {
    setShowComments(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div>
      {tweetsData.map((tweet, index) => (
        <div key={index} className='tweet-container'>
          <div className='tweet-header'>
            <button className='user-button' onClick={() => onUserClick(tweet.usuario)}>{tweet.usuario}</button>
            <span>{tweet.fechaPublicacion}</span>
          </div>
          <div className='tweet-content'>
            {tweet.contenido}
            {tweet.tieneMedia && <img src={tweet.imagen} alt="Tweet media" className='tweet-image' />}
          </div>
          <div className='tweet-hashtags'>
            {tweet.hashtags.map((tag, i) => <span key={i} className='hashtag'>{tag} </span>)}
          </div>
          <div className='tweet-interactions' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button className='like-button' onClick={() => alert('Like added!')}>❤️ {tweet.numLikes}</button>
            <button className='comments-button' onClick={() => toggleComments(index)}>Comentarios ({tweet.comentarios.length})</button>
          </div>
          {showComments[index] && (
            <div className='comment-section'>
              {tweet.comentarios.map((com, i) => (
                <div key={i} className='comment'>
                  <strong>{com.usuario}</strong>, {com.fechaComentario}: {com.contenido}
                </div>
              ))}
              <button className='add-comment-button' onClick={() => alert('Agregar comentario!')}>Agregar comentario</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );  
}

export default Tweets;
