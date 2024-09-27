import React, { useState } from 'react';

const AgregarNota = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); // Estado para la descripción
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviarías la nota al estado global o base de datos
    console.log({ title, description, image });
  };

  return (
    <form className='AgregarNota' onSubmit={handleSubmit}>
      <h2>Agregar Nueva Nota</h2>
      
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label>Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          cols="50"
          required
        />
      </div>
      
      <div>
        <label>Imagen:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default AgregarNota;
