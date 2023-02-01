import React from 'react';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import FormPersonalInfo from './components/FormPersonalInfo';
import { useGlobalContext } from './context';
/* const user = require('./constants/img-undefined.jpg') as string; */

function App() {
  const { personalInfo, experience, education } = useGlobalContext();

  return (
    <div className="cv-container">
      <FormPersonalInfo />
      <FormExperience />
      <FormEducation />
    </div>
  );
}

export default App;
