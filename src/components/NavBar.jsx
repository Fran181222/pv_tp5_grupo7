import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const pages = [
  { name: "Lista de Alumnos", path: "/alumnos" },
  { name: "Nuevo Alumno", path: "/nuevo" },
  { name: "Acerca de", path: "/acerca" },
];

function NavBar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        alignItems: "center",
        zIndex: 1201,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 4,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
              '&:hover': {
                color: '#4CAF50',
              }
            }}
          >
            Grupo 7
          </Typography>

          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{
                color: "white",
                mx: 1.5,
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                '&:hover': {
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  borderRadius: '4px',
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              {page.name}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;