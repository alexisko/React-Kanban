import React from 'react';
import Card from '../containers/Card';

const Column = ({ cards, colTitle }) => {
  return (
    <div className="col-md-4 col-lg-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{colTitle}</h3>
        </div>
        <div className="panel-body">
          {
            cards.map((card) => {
              return (
                <Card
                  id={card.id}
                  title={card.title}
                  status={card.status}
                  priority={card.priority}
                  createdBy={card.createdBy}
                  assignedTo={card.assignedTo}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Column;