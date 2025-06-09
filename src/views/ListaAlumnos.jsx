import React, { useState } from 'react';
import AlumnoCard from '../components/AlumnoCard';

const ListaAlumnos = ({ alumnos, onDelete}) => {
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {alumnos.map(alumno => (
        <AlumnoCard key={alumno.lu} alumno={alumno} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ListaAlumnos;

