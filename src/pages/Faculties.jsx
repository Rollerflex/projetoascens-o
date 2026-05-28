import React from 'react'
import './Faculties.css'
import facilitiesimg from '../assets/images/facilities.jpg'

function Faculties() {
  const facilities = [
    {
      title: 'Sala de Meditação',
      description:
        'Ambiente silencioso e acolhedor para alinhar sua energia antes da viagem.',
      icon: '🧘‍♂️',
    },
    {
      title: 'Cabines Astrais',
      description:
        'Espaços exclusivos para clientes que compraram o pacote.',
      icon: '✨',
    },
    {
      title: 'Observatório Estelar',
      description:
        'Contamos com eventos especiais durante eventos celestes e noites de lua cheia.',
      icon: '🔭',
    },
    {
      title: 'Biblioteca Ashtar Sheran',
      description:
        'Livros raros sobre projeção astral, sonhos lúcidos e espiritualidade.',
      icon: '📚',
    },
    {
      title: 'Café afetivo',
      description:
        'Espaço de renovação da matéria, com café colonial',
      icon: '🌌',
    },
    {
      title: 'Sala de descanso',
      description:
        'Área confortável para compartilhar experiências após as viagens.',
      icon: '🛸',
    },
  ]

  return (
    <div className="faculties-container">
      <div className="faculties-header">
        <h1>
          Nossas Instalações
        </h1>

        <p>
          Ambientes preparados para proporcionar uma viagem inesquecível.
        </p>
      </div>

      <div className="faculties-section">
        <img
          src={facilitiesimg}
          alt="Instalações Astrais"
          className="faculties-image"
        />

        <div className="faculties-description">
          <h2 className="highlight2">Estrutura Abrangente</h2>

          <p>
            Nossa agência foi criada para unir tecnologia e 
            conforto para as suas viagens. Cada ambiente foi pensado para atender aos
            mais altos padrões internacionais de viagem astral.
          </p>

          <div className="faculties-features">
            <div className="facility-feature">
              <h3>🌠 Energia Harmônica</h3>
              <p>Ambientes preparados para equilíbrio energético.</p>
            </div>

            <div className="facility-feature">
              <h3>🛸 Tecnologia Astral</h3>
              <p>Equipamentos modernos para experiências imersivas.</p>
            </div>

            <div className="facility-feature">
              <h3>🌙 Relaxamento Total</h3>
              <p>Espaços acolhedores para descanso e meditação.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="facilities-title">
        Conheça nossos ambientes
      </h2>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div className="facility-card" key={index}>
            <span className="facility-icon">{facility.icon}</span>

            <h3 className="highlight">{facility.title}</h3>

            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faculties