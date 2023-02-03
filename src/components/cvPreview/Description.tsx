import React from 'react';

const Description = ({ description }: { description: string }) => {
  return (
    <div className="description">
      <h3 className="modal-heading">Description</h3>
      <p className="description-paragraph">{description}</p>
    </div>
  );
};

export default Description;
