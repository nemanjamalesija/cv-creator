import React from 'react';
import { useGlobalContext } from '../context';

const Overlay = () => {
  const { showModal } = useGlobalContext();
  return <div className={`${showModal ? 'overlay' : 'overlay hidden'}`} />;
};

export default Overlay;
