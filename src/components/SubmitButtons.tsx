import React from 'react';
import { useGlobalContext } from '../context';

const SubmitButtons = () => {
  const { submitHandler } = useGlobalContext();
  return (
    <section className="submit-section">
      <div className="submit-buttons">
        <button
          type="submit"
          className="btn btn-load-example"
          onClick={submitHandler}
        >
          Preview
        </button>
        <button className="btn btn-reset">Reset</button>
      </div>
    </section>
  );
};

export default SubmitButtons;
