import React from 'react';
import './styles.css';

const Card = ({task, priority, created_by, assigned_to, handleCardDrag}) => {
  return (
    <div className="card" draggable="true" onDragStart={handleCardDrag}>
      <div className={priority} />
      <div className="card__content">
        <span className="card__task">{task}</span>
        <hr />
        <span>Assigned by: {created_by}</span>
        <div className="card__footer">
          <span>Priority: {priority}</span>
          <span>{assigned_to}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;