import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='header'>
            <a href="/" className='logo'>GRUPO 7</a>
            <nav className="navbar">
            <a href="/">Inicio</a>
            <a href="/nuevo">Alumno nuevo</a>
            <a href="/lista">Listado de alumno</a>
            <Link OnClick='/'></Link>
            </nav>
        </header>
    )
}