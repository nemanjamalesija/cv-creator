import React, { useRef } from 'react';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import PersonalInfo from './components/PersonalInfo';
import Headline from './components/Headline';
import PrintControl from './components/cvPreview/PrintControl';
import SubmitButtons from './components/SubmitButtons';
import CvPreview from './components/cvPreview/CvPreview';
import { useGlobalContext } from './context';

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
    </div>
  );
}

export default App;
