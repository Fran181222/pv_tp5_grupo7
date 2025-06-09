// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import ListaAlumnos from './views/ListaAlumnos';
import NuevoAlumno from './views/NuevoAlumno';
import EditarAlumno from './views/EditarAlumno';
import DetalleAlumno from './views/DetalleAlumno';
import AcercaDe from './views/AcercaDe';
import { alumnosIniciales } from './data/alumnos';
import './App.css'

function App() {
  const [alumnos, setAlumnos] = useState(alumnosIniciales);

  const agregarAlumno = (nuevo) => {
    setAlumnos([...alumnos, nuevo]);
  };

  const editarAlumno = (actualizado) => {
    setAlumnos(alumnos.map(a => a.lu === actualizado.lu ? actualizado : a));
  };

  const eliminarAlumno = (lu) => {
    setAlumnos(alumnos.filter(a => a.lu !== lu));
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<ListaAlumnos alumnos={alumnos} onDelete={eliminarAlumno} />} />
        <Route path="/nuevo" element={<NuevoAlumno onAdd={agregarAlumno} />} />
        <Route path="/alumnos/:id/editar" element={<EditarAlumno alumnos={alumnos} onEdit={editarAlumno} />} />
        <Route path="/alumnos/:id" element={<DetalleAlumno alumnos={alumnos} />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </>
  );
}

export default App;
