import React from 'react';
import './Team.css';

// --- Feature ---
function Feature({ title, text }) {
  return (
    <div className="feature">
      <h3 className="highlight2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

// --- Card de membro ---
function MemberCard({ name, role, image }) {
  return (
    <div className="member-card">
      <img src={image} alt={name} />
      <h3 className="highlight">{name}</h3>
      <p>{role}</p>
    </div>
  );
}

// --- Componente principal ---
export default function Team() {
  const members = [
    {
      name: 'Dr. Henrique Alves',
      role: 'Especialista em Projeção Astral',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Marina Costa',
      role: 'Consultora de Destinos Interdimensionais',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Lucas Ribeiro',
      role: 'Guia de Viagens Extraterrestres',
      image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
      name: 'Ana Souza',
      role: 'Atendimento Multiplanar',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  return (
    <main className="team-container">
      
      {/* HEADER */}
      <header className="header">
        <h1>Nossa Equipe</h1>
        <p>Conheça os especialistas por trás das suas viagens astrais</p>
      </header>

      {/* TEXTO */}
      <section className="team-description-section">
        <h2 className="highlight2">Bem-vindo à Nossa Equipe</h2>
        <p>
          Somos uma equipe dedicada e apaixonada por criar experiências de viagem
          inesquecíveis. Com mais de 15 anos de experiência no ramo de turismo extracorpóreo,
          nossos profissionais trabalham juntos para garantir que cada jornada
          seja única — seja no plano físico ou astral.
        </p>

        <div className="team-features">
          <Feature
            title="Experiência"
            text="Especialistas em destinos terrestres e extraterrestres, estamos aqui para te ajudar a escolher o melhor destino para você."
          />
          <Feature
            title="Dedicação"
            text="Atendimento personalizado 24h em qualquer lugar do universo e em todos os planos."
          />
          <Feature
            title="Qualidade"
            text="Todos os nossos profissionais são altamente qualificados, prontos para lhe auxiliar em qualquer etapa da sua viagem."
          />
        </div>
      </section>

      {/* SEÇÃO DE CARDS */}
      <section className="members-section">
        <h2 className="highlight2">Conheça nossos especialistas</h2>

        <div className="members-grid">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </section>

    </main>
  );
}