import React from 'react';
import { Card } from '../card/card';
import './card-list.style.css';

export const CardList = props => {
    console.log(props);
    return (
        <div className="card-list">
            {
                props.books.map(book => <Card key={book.id} book={book} />)
            }
        </div>
    )
}