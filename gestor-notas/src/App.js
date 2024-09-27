import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Principal from './components/Principal';
import Notas from './components/Notas';
import AgregarNota from './components/AgregarNota';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/agregar-nota" element={<AgregarNota />} />
      </Routes>
    </Router>
  );
}

export default App;

