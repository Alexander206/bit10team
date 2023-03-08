import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.scss';
import logo from '../assets/document/chef.png';

export const Header = () => {
  return (
    <header className='header'>
      <figure className='logo'>
        <img className='img-chef' src={logo} alt='chef' />
<<<<<<< HEAD
      </header>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/SobreNosotros' element={<SobreNosotros />}></Route>
        <Route path='/Login' element={<Registrate />}></Route>
        <Route path='/Registrate' element={<Registrate />}></Route>
       
      </Routes>
    </BrowserRouter>
=======
        <h1 className='titulo_sabrossapp'>
          Sabros<span>App</span>
        </h1>
      </figure>

      <nav className='navegacion'>
        <Link className='inicio' to='/'>
          Home
        </Link>

        <Link className='sobre' to='/SobreNosotros'>
          About
        </Link>
        
        <Link className='sobre' to='/NewRecipe'>
        NewRecipe
        </Link>
      </nav>

      <section className='botones'>
        <Link className='iniciar' to='/Login'>
          Login
        </Link>

        <Link className='registrar' to='/Registrate'>
          Register
        </Link>
      </section>
    </header>
>>>>>>> desarrollo
  );
};
