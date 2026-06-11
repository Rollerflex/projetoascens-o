import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './ClientArea.css'


export default function ClienteHome() {
    const navigate = useNavigate()


  return (
    <main className="cliente">

      <header className="cliente-header">

        <h1>
          Bem-vindo de volta, viajante astral
        </h1>

        <p>
          Sua consciência está pronta para novas jornadas.
        </p>

      </header>

        <nav className="cliente-nav">

            <Link to="/" className="back-btn">
            🏠 Início
            </Link>

            <button
                className="logout-btn"
                onClick={() => navigate('/login')}
                >
                🚪 Sair
            </button>

        </nav>

      <section className="astral-card">

        <h2 className="highlight2">
          Carteira de Viajante Astral
        </h2>

        <p><strong>Nível:</strong> Adepto</p>

        <p><strong>Viagens realizadas:</strong> 12</p>

        <p><strong>Status:</strong> Corpo físico localizado</p>

      </section>

      <section className="dashboard-grid">

        <div className="dashboard-card">

          <h3>Próxima Viagem</h3>

          <p>Lua</p>

          <p>18/06/2026</p>

        </div>

        <div className="dashboard-card">

          <h3>Milhas Astrais</h3>

          <p>14.320 pontos</p>

        </div>

        <div className="dashboard-card">

          <h3>Destino Favorito</h3>

          <p>Planeta Shan</p>

        </div>

      </section>

      <section>

        <h2 className="highlight2">
          Recomendações
        </h2>

        <ul>
          <li>Atlântida</li>
          <li>Biblioteca Akáshica</li>
          <li>Terra Oca</li>
          <li>Marte Colonial</li>
        </ul>

      </section>

      <section>

        <h2 className="highlight2">
          Avisos da Agência
        </h2>

        <p>
          Evite interagir com versões alternativas de si mesmo.
        </p>

        <p>
          O Inferno encontra-se temporariamente superlotado.
        </p>

      </section>

    </main>
  )
}