import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Destinations.css';
import pelourinho from '../assets/images/Pelourinho.jpg';
import lua from '../assets/images/lua.jpg';
import planet from '../assets/images/planet-shan.jpg';
import inferno from '../assets/images/inferno.jpg';
import parque from '../assets/images/parque.jpg';


// --- Card ---
function DestinationCard({ name, description, image, onClick }) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-image" />

      <div className="card-content">
        <h2 className="highlight2">{name}</h2>
        <p>{description}</p>
        <button className="btn" onClick={onClick}>
          Explorar
        </button>
      </div>
    </div>
  );
}

// --- Modal ---
function Modal({ destination, onClose }) {
    const navigate = useNavigate();

  if (!destination) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>

        <img src={destination.image} alt={destination.name} />

        <h2>{destination.name}</h2>
        <p>{destination.description}</p>

        <button
        className="btn"
        onClick={() => navigate('/login')}
        >
            Reservar viagem astral
        </button>
      </div>
    </div>
  );
}

// --- Componente principal ---
const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'Praia de Copacabana',
      description: 'Uma das praias mais famosas do Rio de Janeiro, conhecida por sua areia dourada e vida noturna vibrante.',
      image: 'https://images.unsplash.com/photo-1698320856830-246e897b8e9b?w=400'
    },
    {
      id: 2,
      name: 'Pelourinho',
      description: 'Centro histórico de Salvador com arquitetura colonial preservada e rica cultura afro-brasileira.',
      image: pelourinho
    },
    {
      id: 3,
      name: 'Parque Náutico de Curitiba',
      description: 'Espaço de lazer com atividades aquáticas, parque e natureza no coração do Paraná.',
      image: parque
    },
    {
      id: 4,
      name: 'Coliseu de Roma',
      description: 'Ícone da história romana, este anfiteatro antigo é um espetáculo de arquitetura antiga.',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400'
    },
    {
      id: 5,
      name: 'Times Square',
      description: 'O coração de Nova York com seus telões gigantes e energia urbana incomparável.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400'
    },
    {
      id: 6,
      name: 'Lua',
      description: 'Visite o local onde a humanidade pisou pela primeira vez em 1969.',
      image: lua
    },
    {
      id: 7,
      name: 'Planeta Shan',
      description: 'Exoplaneta com paisagens alienígenas e tecnologia avançada.',
      image: planet
    },
    {
      id: 8,
      name: 'Inferno',
      description: 'Desencorajamos a visita, destino muito popular entre ateus e crentes',
      image: inferno
    },
    {
        id: 9, 
        name: 'Terra Oca', 
        description: 'Sim, a Terra é realmente oca, explore esse paraíso subterrâneo repleto de lojas de grife e cafés pitorescos.', 
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' 
    },
];

  return (
    <main className="destinations-container">
      <header className="header">
        <h1>Destinos Disponíveis</h1>
        <p className="subtitle">
          Explore destinos reais e além
        </p>
      </header>

      <section className="destinations-grid">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            {...destination}
            onClick={() => setSelectedDestination(destination)}
          />
        ))}
      </section>

      <Modal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </main>
  );
};

export default Destinations;