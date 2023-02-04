import { useRef } from 'react';
import { useGlobalContext } from './context';
import { Headline, SubmitButtons, Overlay } from './components';
import {
  PersonalInfo,
  FormEducation,
  FormExperience,
} from './components/cvForm';
import PrintControl from './components/cvPreview/PrintControl';
import CvPreview from './components/cvPreview/CvPreview';

function App() {
  // print
  const cvPrintRef: any = useRef();
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
    </div>
  );
}

export default App;
