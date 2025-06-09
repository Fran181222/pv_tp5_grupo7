import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";

const AlumnoCard = ({ alumno, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`¿Estás seguro de eliminar a ${alumno.nombre} ${alumno.apellido}?`)) {
      onDelete(alumno.lu); // Emite evento al padre
    }
  };

  return (
    <div id='student-card'>
      <h3>{alumno.nombre} {alumno.apellido}</h3>
      <p>Curso: {alumno.curso}</p>
      <button onClick={() => navigate(`/alumnos/${alumno.lu}`)}>Ver Detalles</button>
      <button onClick={() => navigate(`/alumnos/${alumno.lu}/editar`)}>Editar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default AlumnoCard;