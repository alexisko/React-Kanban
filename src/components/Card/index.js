import React from 'react';
import './styles.css';

const Card = ({task, priority, created_by, assigned_to, handleCardDrag, handleCardDelete}) => {
  const prioritybar = `prioritybar ${priority}`;
  const prioritytext = `prioritytext ${priority}`;
  return (
    <div className="card" draggable="true" onDragStart={handleCardDrag}>
      <div className={prioritybar} />
      <div className="card__content">
        <span className="card__task">{task}</span>
        <hr />
        <span>Assigned to: {assigned_to}</span>
        <span>Created by: {created_by}</span>
        <div className="card__footer">
          <div className="card__settings">
          <button className="card__button">Edit</button>
          <span> / </span>
          <button className="card__button" onClick={handleCardDelete}>Delete</button>
          </div>
          <span className={prioritytext}>{priority}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;