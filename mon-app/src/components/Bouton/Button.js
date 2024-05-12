import React from 'react';

function Button({ children, onClick, className }) {
    const handleClick = () => {
        console.log(children); // Affiche le texte du bouton dans la console
        onClick(); // Appelle la fonction onClick fournie en prop
    };

    return (
        <button text ="je suis un bouton"onClick={handleClick} className={className}>
            {children}
        </button>
    );
}

export default Button;



