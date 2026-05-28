import { Outlet, useLocation } from 'react-router-dom'

import NavBar from './componentes/NavBar'

import './App.css'

function App() {

  const location = useLocation()

  // rotas que NÃO devem mostrar navbar
  const hiddenRoutes = [
    '/login',
    '/forgot-password',
    '/register'
  ]

  const hideNavbar =
    hiddenRoutes.includes(location.pathname)

  return (
    <>

      {!hideNavbar && (
        <>
          <h1>
            Agência de Viagens Ascensão
          </h1>

          <p className="highlight">
            A agência mais abrangente desse lado da galáxia!
          </p>

          <NavBar />
        </>
      )}

      {/* conteúdo das páginas */}
      <Outlet />

      {/* footer opcionalmente escondido */}
      {!hideNavbar && (
        <footer className="footer">

          <p>
            <span className="aviso">
              AVISO:
            </span>

            {' '}
            Não nos responsabilizamos por danos espirituais
            devido a condições particulares de cada destino.
          </p>

          <p>
            &copy; 2023 Projeto Ascensão.
          </p>

          <p>
            Desenvolvido por Derek Ho Enterprises.
          </p>

        </footer>
      )}

    </>
  )
}

export default App