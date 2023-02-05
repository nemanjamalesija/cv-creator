import { useRef } from 'react';
import { useGlobalContext } from './context';
import { Headline, SubmitButtons, Overlay, Footer } from './components';
import {
  PersonalInfo,
  FormEducation,
  FormExperience,
} from './components/cvForm';
import PrintControl from './components/cvPreview/PrintControl';
import CvPreview from './components/cvPreview/CvPreview';

function App() {
  // print
  const cvPrintRef = useRef<HTMLElement>(null);
  const { showModal } = useGlobalContext();

  return (
    <div className="cv-container">
      <Headline />
      <main
        className={showModal ? 'container-center hidden' : 'container-center'}
      >
        <PersonalInfo />
        <FormEducation />
        <FormExperience />
        <SubmitButtons />
      </main>
      <PrintControl cvPrintRef={cvPrintRef} />
      <CvPreview cvPrintRef={cvPrintRef} />
      <Overlay />
      {!showModal && <Footer />}
    </div>
  );
}

export default App;
