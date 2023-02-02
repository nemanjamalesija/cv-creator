import React from 'react';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import PersonalInfo from './components/PersonalInfo';
/* const user = require('./constants/img-undefined.jpg') as string; */

function App() {
  return (
    <div className="cv-container">
      <PersonalInfo />
      <FormExperience />
      <FormEducation />
    </div>
  );
}

export default App;
