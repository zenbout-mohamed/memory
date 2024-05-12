import React, { useState, useEffect } from 'react';
import Title from './components/Titre/Title.js';
import Button from './components/Bouton/Button.js';
import Card from './components/Carte/Card.js';

function App() {
    const [cards, setCards] = useState([]);
    const [flippedIds, setFlippedIds] = useState([]);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        // Générer et mélanger les cartes
    };

    const handleCardClick = id => {
        // Gérer le retournement des cartes
    };

    const restartGame = () => {
        initializeGame();
    };

    return (
        <div className="app">
            <Title />
            {cards.map(card => (
                <Card
                    key={card.id}
                    id={card.id}
                    content={card.content}
                    flipped={flippedIds.includes(card.id)}
                    onClick={handleCardClick}
                />
            ))}
            <Button onClick={restartGame}>Nouvelle Partie</Button>
        </div>
    );
}

export default App;


