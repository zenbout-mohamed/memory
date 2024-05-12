import React from 'react';

function Card({ id, content, onClick, flipped }) {
    return (
        <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => onClick(id)}>
            {flipped ? content : " "}
        </div>
    );
}

export default Card;
