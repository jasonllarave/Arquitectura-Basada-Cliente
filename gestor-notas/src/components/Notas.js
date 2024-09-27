import React, { useState } from 'react';

const Notas = () => {
  const [notas, setNotas] = useState([
    { id: 1, title: 'Primera Nota', description: 'Esta es la descripción de la primera nota.', image: null },
    { id: 2, title: 'Segunda Nota', description: 'Aquí va el contenido de la segunda nota.', image: null },
  ]);

  return (
    <div className="Notas">
      <h2>Lista de Notas</h2>
      <div className="notas-container">
        {notas.map((nota) => (
          <div className="nota-card" key={nota.id}>
            <h3>{nota.title}</h3>
            {nota.image && <img src={URL.createObjectURL(nota.image)} alt={nota.title} width="100" />}
            <p>{nota.description.substring(0, 50)}...</p>
            <button className="ver-nota-btn">Ver Nota Completa</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notas;

