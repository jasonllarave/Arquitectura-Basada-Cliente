import React from 'react';

const Principal = () => {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Bienvenido a la gestión de notas</h1>
          <p style={styles.description}>Página principal</p>
          <button style={styles.button}>ver notas</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Cambiado a 'flex-start' para alinearlo en la parte superior
    height: '80vh', // Cambia la altura para que no esté en el centro
    backgroundColor: '#frgb(189, 238, 238)',
    paddingTop: '50px', // Espaciado superior para separarlo del header
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    marginBottom: '10px',
    fontSize: '1.5rem',
  },
  description: {
    marginBottom: '20px',
    fontSize: '1rem',
    color: '#555',
  },
  button: {
    backgroundColor: '#4b014b',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Principal;




