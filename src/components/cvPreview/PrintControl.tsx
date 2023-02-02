import React from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BiPrinter } from 'react-icons/bi';
import './printControl.css';

const PrintControl = () => {
  return (
    <section className="section-print">
      <div className="print-control">
        <button className="btn btn-print">
          <BiPrinter /> Print
        </button>
        <button className="btn btn-back">
          <TiArrowBackOutline /> back
        </button>
      </div>
    </section>
  );
};

export default PrintControl;
