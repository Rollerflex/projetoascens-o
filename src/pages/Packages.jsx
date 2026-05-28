import React, { useState } from 'react';
import './Packages.css';
import paris from '../assets/images/paris.jpg';
import tokyo from '../assets/images/tokyo.jpg';
import planetShan from '../assets/images/shan1.jpg';

const Packages = () => {
  const [openId, setOpenId] = useState(null);

  const packages = [
    {
      id: 1,
      destination: 'Paris, França',
      image: paris,
      accommodation: 'Hotel 5 estrelas no centro da cidade',
      activities: [
        'Visita à Torre Eiffel',
        'Cruzeiro no Rio Sena',
        'Tour pelo Museu do Louvre',
        'Jantar em restaurante com estrela Michelin'
      ]
    },
    {
      id: 2,
      destination: 'Tóquio, Japão',
      image: tokyo,
      accommodation: 'Ryokan tradicional com comodidades modernas',
      activities: [
        'Trilha no Monte Fuji',
        'Aula de fazer sushi',
        'Paseio pelas locações do filme "Lost in Translation"',
        'Sessão de Karaokê'
      ]
    },
    {
      id: 3,
      destination: 'Planeta Shan',
      image: planetShan,
      accommodation: 'Hotel de Hilbert',
      activities: [
        'Passeio na réplica do navio de Teseu',
        'Oficina de máquina de movimento perpétuo',
        'Lugares para assistir ao Miss Universo',
        'Piscina de bolinhas'
      ]
    }
  ];

  return (
    <div className="header">
      <h1>Pacotes de Viagem</h1>
      <p className="subtitle">
          Aqui oferecemos uma experiência mais rica e imersiva, sinta-se como se estivesse com seu corpo físico em cada lugar*
        </p>

      <div className="packages-grid">
        {packages.map(pkg => (
          <div key={pkg.id} className="package-card">
            
            <img
              src={pkg.image}
              alt={`Imagem de ${pkg.destination}`}
            />

            <h2>{pkg.destination}</h2>

            <p>
              <strong className="highlight">Acomodação:</strong>
              {` ${pkg.accommodation}`}
            </p>

              {/* BOTÃO TOGGLE */}
            <button
              className="btn"
              onClick={() =>
                setOpenId(openId === pkg.id ? null : pkg.id)
              }
            >
              {openId === pkg.id ? 'Ocultar pacote' : 'Ver pacote'}
            </button>

           {/* CONTEÚDO EXPANSÍVEL */}
            {openId === pkg.id && (
              <div className="package-details">
                <h4>Atividades:</h4>
                <ul>
                  {pkg.activities.map(activity => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        ))}
      </div>

       <footer className="packages-footer">
  <p>
    <small>
      *Atividades de teor observatório, dado o estado da matéria no momento da viagem astral.
    </small>
  </p>
</footer>

    </div>
    
  );
  

  
};

export default Packages;