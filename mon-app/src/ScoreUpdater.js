import React, { useState } from 'react';

function Score(props) {
    // Déclaration d'une variable d'état 'score' et de la fonction 'setScore' pour la mettre à jour
    const [score, setScore] = useState(0);

    // Fonction pour gérer le clic sur le paragraphe et augmenter le score
    function click (){
        setScore(score + 1);  // Incrémente le score de 1
    };

    return (
        <p onClick={click}>
            Mon score est de {score}
        </p>
            
        
    );
}

export default Score;
