import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import '../styles/components/header.scss';
import logo from '../assets/document/chef.png';

export const Header = () => {
  return (
    <header className='header'>
      <Link className='inicio' to='/'>
        Inicio
      </Link>
      <Link className='sobre' to='/SobreNosotros'>
        Sobre Nosotros
      </Link>
      <Link className='iniciar' to='/Login'>
        Iniciar Sesión
      </Link>
      <Link className='registrar' to='/Registrate'>
        Registrate
      </Link>
      <img className='img-chef' src={logo} alt='chef' />
    </header>
  );
};
