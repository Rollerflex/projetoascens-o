import React from 'react'
import './Dashboard.css'
import casa from '../assets/images/casa1.jpg'

// --- Dados separados ---
const vantagens = [
  "Todos os destinos disponíveis em universos infinitos e dimensões desconhecidas.",
  "Tempo de chegada no destino quase instantâneo, adeus às filas em aeroportos.",
  "Experiência tranquila, sem burocracia e sem complicações.",
  "Dispensa a necessidade de reservas de passagens e hotel.",
  "Fique quanto tempo quiser, volte quando quiser.",
  "Viagem sem limites físicos, viaje sem o peso de carregar seu corpo terreno.",
  "Viagem sem limites financeiros, acessível para todos."
]


const testemunhos = [
  {
    texto: "A viagem astral mudou minha vida! Fui a lugares que nunca imaginei.",
    autor: "Maria S.",
    destino: "Macapá"
  },
  {
    texto: "Experiência incrível e segura. Recomendo a todos.",
    autor: "João P.",
    destino: "Superfície do sol"
  },
  {
    texto: "Descobri conhecimentos profundos que transformaram minha perspectiva.",
    autor: "Ana L.",
    destino: "Farol do Saber"
  },
  {
    texto: "Estive no centro do Rio de Janeiro e saí renovado espiritualmente.",
    autor: "Carlos M.",
    destino: "Rio de Janeiro"
  },
  {
    texto: "Não sei se posso descrever a experiência.",
    autor: "Jonas L.",
    destino: "Área 51"
  }
]

// --- Componentes menores ---
function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className= "highlight2">{title}</h2>
      {children}
    </section>
  )
}

function Lista({ items, ordered = false }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className="lista">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Tag>
  )
}

function Testemunho({ texto, autor, destino }) {
  return (
    <p className="testemunho">
      "{texto}" — {autor} <span className="destino">(Após viagem para {destino})</span>
    </p>
  )
}

// --- Componente principal ---
function Dashboard() {
  return (
    <main className="dashboard">
      <header className="header">
        <h1>Bem-vindo à sua experiência de viagem astral</h1>
        <p>Oferecemos uma experiência segura e exclusiva</p>
      </header>

      <section className="historia">
  <img
    src={casa}
    alt="Fachada da agência astral"
    className="historia-img"
  />

  <div className="historia-texto">
    <h2 className="highlight">
      Nossa História
    </h2>

    <p>
      Fundada em 1973, a Projeto Ascensão começou em uma antiga
      residência adaptada para estudos espirituais e projeções astrais.
      O pequeno grupo inicial de exploradores rapidamente se tornou
      referência em viagens interdimensionais.
    </p>

    <p>
      Nossa fachada preserva até hoje a aparência clássica da construção
      original, mantendo viva a tradição e a energia acumulada ao longo
      das décadas.
    </p>
  </div>
</section>

      <Section title="Vantagens da Viagem Astral">
        <Lista items={vantagens} />
      </Section>


      <Section title="Testemunhos de Clientes">
        <div className="testemunhos">
          {testemunhos.map((t, index) => (
            <Testemunho key={index} {...t} />
          ))}
        </div>
      </Section>
    </main>
  )
}

export default Dashboard