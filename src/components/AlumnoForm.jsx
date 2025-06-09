import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Textarea from '@mui/joy/Textarea';
import { Transition } from 'react-transition-group';
import { styled } from '@mui/system';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseIcon from '@mui/icons-material/Close';
import { Snackbar } from '@mui/base/Snackbar';


// Tema personalizado con mayor contraste y colores verdes
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:before': {
            borderBottomColor: 'rgba(255, 255, 255, 0.42)',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#4CAF50', // Verde en hover
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#2E7D32', // Verde al enfocar
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.87)', // Texto más oscuro
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#2E7D32', // Verde al enfocar
          },
          '& .MuiInputBase-input': {
            color: '#ffffff', // Texto más oscuro
            fontWeight: 500, // Mayor contraste
            fontSize: '1.1rem',
          },
        },
      },
    },
  },
});

const AlumnoForm = ({ initialData = {}, onSubmit }) => {
  const [alumno, setAlumno] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
    ...initialData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(alumno);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          padding: 2
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={3}>
          {/* Primera fila de campos */}
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="lu"
                label="LU"
                variant="standard"
                value={alumno.lu}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="nombre"
                label="Nombre"
                variant="standard"
                value={alumno.nombre}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          
          {/* Segunda fila de campos */}
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="apellido"
                label="Apellido"
                variant="standard"
                value={alumno.apellido}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="curso"
                label="Curso"
                variant="standard"
                value={alumno.curso}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          
          {/* Tercera fila de campos */}
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                variant="standard"
                value={alumno.email}
                onChange={handleChange}
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="domicilio"
                label="Domicilio"
                variant="standard"
                value={alumno.domicilio}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          
          {/* Cuarta fila de campos */}
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="telefono"
                label="Teléfono"
                variant="standard"
                value={alumno.telefono}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Espacio vacío para mantener la alineación */}
            </Grid>
          </Grid>
          
          {/* Botón centrado */}
          <Grid container item xs={12} justifyContent="center">
            <Button 
              type="submit" 
              variant="contained" 
              endIcon={<SendIcon />}
              sx={{ 
                width: '200px',
                backgroundColor: '#4CAF50',
                fontWeight: 'bold',
                fontSize: '1rem',
                py: 1.5,
                mt: 2,
                '&:hover': {
                  backgroundColor: '#2E7D32',
                  transform: 'scale(1.03)',
                  transition: 'transform 0.3s ease',
                }
              }}
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
        
      </Box>
    </ThemeProvider>
  );
};

export default AlumnoForm;