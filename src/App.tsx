import React from 'react';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import PersonalInfo from './components/PersonalInfo';
import Headline from './components/Headline';
import PrintControl from './components/cvPreview/PrintControl';
import SubmitButtons from './components/SubmitButtons';
/* const user = require('./constants/img-undefined.jpg') as string; */

function App() {
  return (
    <div className="cv-container">
      <Headline />
      <main className="container-center">
        <PersonalInfo />
        <FormEducation />
        <FormExperience />
        <SubmitButtons />
      </main>
    </div>
  );
}

export default App;
