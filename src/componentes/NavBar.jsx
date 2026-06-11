import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav">

      {/* BOTÃO HAMBURGER */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* MENU */}
      <div className={`nav-links ${open ? 'active' : ''}`}>

        <NavLink to="/" onClick={closeMenu}>
          Início
        </NavLink>

        <NavLink to="destinations" onClick={closeMenu}>
          Destinos
        </NavLink>

        <NavLink to="packages" onClick={closeMenu}>
          Pacotes
        </NavLink>

        <NavLink to="team" onClick={closeMenu}>
          Nossa Equipe
        </NavLink>

        <NavLink to="faculties" onClick={closeMenu}>
          Estrutura
        </NavLink>

        <NavLink to="/login" onClick={closeMenu}>
          Portal do Viajante
        </NavLink>

      </div>

    </nav>
  );
}