import React, { useState } from 'react';
import '../styles/twittear.css'

function Twittear() {
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ contenido, imagen, hashtags });
  };

  return (
    <form className="twittear-container" onSubmit={handleSubmit}>
      <div className="twittear-prompt">¿Qué deseas compartir hoy?</div>
      <textarea 
        className="twittear-input" 
        placeholder="Escribe algo..."
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
      />
      <input 
        className="twittear-input" 
        placeholder="Link de la imagen (opcional)"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />
      <input 
        className="twittear-input" 
        placeholder="Hashtags (separados por espacios)"
        value={hashtags}
        onChange={(e) => setHashtags(e.target.value)}
      />
      <div className='button-container'>
        <button type="submit" className="twittear-button">Twittear</button>
      </div>
    </form>
  );
}

export default Twittear;
