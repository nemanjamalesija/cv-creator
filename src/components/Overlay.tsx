import { useGlobalContext } from '../context';

const Overlay = () => {
  const { showModal, closeModalHandler } = useGlobalContext();
  return (
    <div
      className={`${showModal ? 'overlay' : 'overlay hidden'}`}
      onClick={closeModalHandler}
    />
  );
};

export default Overlay;
