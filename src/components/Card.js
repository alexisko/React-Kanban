import React from 'react';

const Card = ({ title, priority, createdBy, assignedTo }) => {
  return (
    <div>
      <p>Title: { title }</p>
      <p>Priority: { priority }</p>
      <p>Created By: { createdBy }</p>
      <p>Assigned To: { assignedTo }</p>
      <button>Edit</button><button>Delete</button>
    </div>
  );
};

export default Card;