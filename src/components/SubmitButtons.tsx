import React from 'react';

const SubmitButtons = () => {
  return (
    <section className="submit-section">
      <div className="submit-buttons">
        <button type="submit" className="btn btn-load-example">
          Preview
        </button>
        <button className="btn btn-reset">Reset</button>
      </div>
    </section>
  );
};

export default SubmitButtons;
