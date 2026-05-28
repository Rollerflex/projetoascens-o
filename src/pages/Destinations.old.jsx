import React from 'react';

const Destinations = () => {
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
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400'
        },
        {
            id: 3,
            name: 'Parque Náutico de Curitiba',
            description: 'Espaço de lazer com atividades aquáticas, parques e natureza no coração do Paraná.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
        },
        {
            id: 4,
            name: 'Coliseu de Roma',
            description: 'Ícone da história romana, este anfiteatro antigo é um espetáculo de arquitetura antiga e cultura.',
            image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400'
        },
        {
            id: 5,
            name: 'Times Square',
            description: 'O coração de Nova York com seus telões gigantes, lojas e energia urbana incomparável.',
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400'
        },
        {
            id: 6,
            name: 'Local de Pouso dos Astronautas na Lua',
            description: 'Visite o histórico local onde a humanidade pisou pela primeira vez na Lua em 1969.',
            image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400'
        },
        {
            id: 7,
            name: 'Planeta Shan',
            description: 'Destino futurista em um exoplaneta com paisagens alienígenas e tecnologia avançada.',
            image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400'
        }
    ];

    return (
        <div className="destinations-container">
            <h1>Destinos Disponíveis</h1>
            <p className="subtitle">Explore os melhores destinos do mundo e além</p>
            <div className="destinations-grid">
                {destinations.map((destination) => (
                    <div key={destination.id} className="destination-card">
                        <img src={destination.image} alt={destination.name} />
                        <h2>{destination.name}</h2>
                        <p>{destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;