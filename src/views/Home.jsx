import React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

const Home = () => {

  return (
    <div>
      <h1>Bienvenidos al sistema de gestión de alumnos</h1>
      <p>Utilizá el menú para comenzar y navegar a traves de nuestras funciones</p>
      <Typography level="h2" color="#ffff">En tan solo instantes!</Typography>
       <Stack spacing={4} sx={{ width: '100%' }}>
      <Stepper>
        <Step
          sx={{
            color: 'white',
            '&::after': {
              height: 2,
              borderRadius: '24px',
              background:
                'linear-gradient(to right, #002f61, #00507b, #006e8e, #008b98, #00a79c)',
            },
          }}
        >
          Carga un alumno
        </Step>
        <Step
          sx={{
            color: 'white',
            '&::after': {
              height: 2,
              borderRadius: '24px',
              background:
              
                'linear-gradient(to right, #00c395, #18dc82, #71ee65, #bbf942, #ffff00)',
            },
          }}
        >
          Revisa sus datos
        </Step>
        <Step sx={{
          color: 'white'
        }}>Y listo! </Step>
      </Stepper>
    </Stack>
    </div>
  );
};

export default Home;
