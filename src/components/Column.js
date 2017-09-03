import React from 'react';
import Card from './Card.js';

const Column = ({ cards }) => {
  return (
    <div>
      {
        cards.map((card) => {
          return (
            <Card
              title={card.cardTitle}
              priority={card.cardPriority}
              createdBy={card.createdBy}
              assignedTo={card.assignedTo}
            />
          )
        })
      }
    </div>
  );
};

export default Column;