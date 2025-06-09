import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css'

const DetalleAlumno = ({ alumnos }) => {
  const { id } = useParams();
  const alumno = alumnos.find(a => a.lu === id);

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div id='student-detail'>
      <h2>Detalle del Alumno</h2>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Apellido:</strong> {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>
    </div>
  );
};

export default DetalleAlumno;
 