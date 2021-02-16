import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className="card-container">
        <h3>{props.book.name}</h3>
        <h5>{props.book.author}</h5>
        <p>{props.book.published}</p>
    </div>
);