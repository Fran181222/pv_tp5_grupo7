import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AlumnoForm from '../components/AlumnoForm';
import '../index.css';

const EditarAlumno = ({ alumnos, onEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const alumno = alumnos.find(a => a.lu === id);

  const handleUpdate = (actualizado) => {
    // Aquí deberías actualizarlo en el array original si fuese global o desde API
    onEdit(actualizado);
    alert('Alumno actualizado exitosamente');
    navigate('/alumnos');
  };

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div>
      <h2>Editar Alumno</h2>
      <AlumnoForm initialData={alumno} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditarAlumno;
