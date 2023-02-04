import { useGlobalContext } from '../context';

const SubmitButtons = () => {
  const { submitHandler, resetStateHandler } = useGlobalContext();
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
        <button className="btn btn-reset" onClick={resetStateHandler}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default SubmitButtons;
