import { TiArrowBackOutline } from 'react-icons/ti';
import { BiPrinter } from 'react-icons/bi';
import { useGlobalContext } from '../../context';
import { useReactToPrint } from 'react-to-print';
import './printControl.css';

const PrintControl = (props: any) => {
  const { closeModalHandler, showModal } = useGlobalContext();
  const { cvPrintRef } = props;

  const handlePrint = useReactToPrint({
    content: () => cvPrintRef.current,
    onAfterPrint: () => void {},
  });

  return (
    <section className={showModal ? 'section-print' : 'section-print hidden'}>
      <div className="print-control">
        <button className="btn btn-print" onClick={handlePrint}>
          <BiPrinter /> Print
        </button>
        <button className="btn btn-back" onClick={closeModalHandler}>
          <TiArrowBackOutline /> back
        </button>
      </div>
    </section>
  );
};

export default PrintControl;
